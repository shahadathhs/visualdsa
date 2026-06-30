import {
  Injectable,
  Inject,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@visualdsa/db';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private readonly prisma: PrismaClient;

  // Explicit @Inject keeps DI working under esbuild/tsx (spec generation),
  // which — unlike tsc — does not emit `design:paramtypes` metadata.
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    const connectionString =
      this.configService.getOrThrow<string>('DATABASE_URL');

    const adapter = new PrismaPg({ connectionString });

    this.prisma = new PrismaClient({
      adapter,
      log: [{ emit: 'event', level: 'error' }],
    });
  }

  async onModuleInit() {
    // SKIP_DB=true boots the app without a database (spec generation, CI).
    // The placeholder DATABASE_URL is syntactically valid but unreachable, so
    // skip the connection to avoid Prisma's fatal connect error.
    if (process.env.SKIP_DB === 'true') {
      this.logger.warn('SKIP_DB=true — skipping Prisma connection');
      return;
    }
    this.logger.log('Prisma connecting...');
    await this.prisma.$connect();
    this.logger.log('Prisma connected');
  }

  async onModuleDestroy() {
    if (process.env.SKIP_DB === 'true') return;
    this.logger.log('Prisma disconnecting...');
    await this.prisma.$disconnect();
    this.logger.log('Prisma disconnected');
  }

  get client() {
    return this.prisma;
  }
}

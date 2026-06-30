import { getLessonRaw, hasLesson, listLessons } from '@visualdsa/content';
import { phases } from '@/data/curriculum';

export { hasLesson, listLessons };

export type Lesson = {
  phase: string;
  topic: string;
  title: string;
  body: string;
};

/** Resolve a lesson for a phase + topic, or `undefined` if it has no content. */
export function getLesson(
  phaseSlug: string,
  topicSlug: string,
): Lesson | undefined {
  const body = getLessonRaw(phaseSlug, topicSlug);
  if (body === undefined) return undefined;

  const phase = phases.find((p) => p.slug === phaseSlug);
  const topic = phase?.topics.find((t) => t.slug === topicSlug);
  const title = topic?.title ?? topicSlug;

  return { phase: phaseSlug, topic: topicSlug, title, body };
}

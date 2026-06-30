import { lessonRaw } from './registry';

export { lessonRaw };

export type LessonKey = { phase: string; topic: string };

/** Get the raw MDX source for a lesson, or `undefined` if it doesn't exist yet. */
export function getLessonRaw(phase: string, topic: string): string | undefined {
  return lessonRaw[`${phase}/${topic}`];
}

/** Whether a lesson has been written for this phase + topic. */
export function hasLesson(phase: string, topic: string): boolean {
  return `${phase}/${topic}` in lessonRaw;
}

/** All lessons that have content (used to prerender topic pages). */
export function listLessons(): LessonKey[] {
  return Object.keys(lessonRaw).map((key) => {
    const [phase, topic] = key.split('/');
    return { phase, topic };
  });
}

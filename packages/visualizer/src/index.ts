export interface PlaybackState {
  isPlaying: boolean;
  currentStep: number;
  totalSteps: number;
  speed: number;
}

export const DEFAULT_PLAYBACK_STATE: PlaybackState = {
  isPlaying: false,
  currentStep: 0,
  totalSteps: 0,
  speed: 1,
};

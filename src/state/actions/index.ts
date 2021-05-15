export enum ActionType {
  SELECTED = "SONG_SELECTED",
}

export type Action = {
  type: ActionType.SELECTED;
  payload: string;
};

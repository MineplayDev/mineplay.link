export class HangmanSettings {
  word = "";
  difficulty = Difficulty.normal;
  playing = false;
}

export enum Difficulty {
  easy = "einfach",
  normal = "normal",
  hard = "schwer",
}

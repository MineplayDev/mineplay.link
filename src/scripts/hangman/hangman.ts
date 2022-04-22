import { ComputedRef } from "vue";

export class Hangman {
  static readonly guessableChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß".split("");
  static readonly visibleChars = " -_".split("");
  static readonly allChars = [...Hangman.guessableChars, ...Hangman.visibleChars];

  readonly word: string;
  readonly wordChars: string[];
  guessedChars: string[] = reactive([]);
  readonly hasWon: ComputedRef<boolean> = computed(() => {
    for (const value of this.wordChars) {
      if (!this.guessedChars.includes(value)) {
        return false;
      }
    }
    return true;
  });

  constructor(word: string) {
    this.word = word.toUpperCase();
    this.wordChars = this.word.split("");
    this.wordChars.forEach((value) => {
      if (!Hangman.allChars.includes(value)) {
        throw new Error("Invalid character in word!");
      }
    });
  }

  guess(char: string): boolean {
    this.guessedChars.push(char);
    return this.wordChars.includes(char);
  }
}

import { ComputedRef, Ref } from "vue";
import { HangmanGallows } from "~/scripts/hangman/hangman-gallows";
import { HangmanSettings } from "~/scripts/hangman/hangman-settings";

export class Hangman {
  static readonly guessableChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß".split("");
  static readonly visibleChars = " -_".split("");
  static readonly allChars = [...Hangman.guessableChars, ...Hangman.visibleChars];

  readonly gallows: HangmanGallows;

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
  readonly hasLost: Ref<boolean>;

  constructor(settings: HangmanSettings) {
    this.gallows = new HangmanGallows(settings.difficulty);
    this.hasLost = this.gallows.hasLost;

    this.word = settings.word.toUpperCase();
    this.wordChars = this.word.split("");
    this.wordChars.forEach((value) => {
      if (!Hangman.allChars.includes(value)) {
        throw new Error("Invalid character in word!");
      }
    });
  }

  guess(char: string) {
    if (this.hasLost.value) return;

    this.guessedChars.push(char);
    if (!this.wordChars.includes(char)) {
      this.gallows.guess();
    }
  }
}

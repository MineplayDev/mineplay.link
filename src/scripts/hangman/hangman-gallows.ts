import { Difficulty } from "~/scripts/hangman/hangman-settings";

export class HangmanGallows {
  readonly difficulty: Difficulty;
  stroke = 0;
  readonly hasLost = ref(false);
  private readonly contexts: CanvasRenderingContext2D[] = [];

  constructor(difficulty: Difficulty) {
    this.difficulty = difficulty;
  }

  guess(): void {
    if (this.stroke >= 13) {
      this.hasLost.value = true;
      console.log("You lost!" + this.stroke);
    }
    this.draw(this.stroke++);
    if (
      (this.difficulty === Difficulty.hard &&
        (this.stroke === 3 || this.stroke === 8 || this.stroke === 10)) ||
      (this.difficulty !== Difficulty.easy && (this.stroke === 12 || this.stroke === 13))
    ) {
      this.guess();
    }
  }

  draw(id: number): void {
    this.contexts.forEach((ctx) => {
      ctx.beginPath();

      switch (id) {
        case 0:
          ctx.arc(150, 400, 60, Math.PI, Math.PI * 2);
          break;
        case 1:
          ctx.moveTo(150, 340);
          ctx.lineTo(150, 100);
          break;
        case 2:
          ctx.moveTo(150, 100);
          ctx.lineTo(400, 100);
          break;
        case 3:
          ctx.moveTo(200, 100);
          ctx.lineTo(150, 150);
          break;
        case 4:
          ctx.moveTo(400, 100);
          ctx.lineTo(400, 150);
          break;
        case 5:
          ctx.arc(400, 170, 20, 0, Math.PI * 2);
          break;
        case 6:
          ctx.moveTo(400, 190);
          ctx.lineTo(400, 255);
          break;
        case 7:
          ctx.moveTo(400, 195);
          ctx.lineTo(370, 210);
          break;
        case 8:
          ctx.moveTo(400, 195);
          ctx.lineTo(430, 210);
          break;
        case 9:
          ctx.moveTo(400, 255);
          ctx.lineTo(430, 280);
          break;
        case 10:
          ctx.moveTo(400, 255);
          ctx.lineTo(370, 280);
          break;
        case 11:
          ctx.moveTo(390, 160);
          ctx.lineTo(397, 170);

          ctx.moveTo(397, 160);
          ctx.lineTo(390, 170);
          break;
        case 12:
          ctx.moveTo(410, 160);
          ctx.lineTo(403, 170);

          ctx.moveTo(403, 160);
          ctx.lineTo(410, 170);
          break;
        case 13:
          ctx.moveTo(390, 183);
          ctx.arc(400, 183, 10, Math.PI, Math.PI * 2);
          break;
      }

      ctx.stroke();
    });
  }

  addContext(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "rgba(255,255,255, 0.7)";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.font = "50px sans-serif";
    ctx.fillStyle = "rgba(255,255,255, 0.7)";
    this.contexts.push(ctx);
  }
}

<script lang="ts" setup>
import { Hangman } from "~/scripts/hangman/hangman";
import { HangmanSettings } from "~/scripts/hangman/hangman-settings";

const props = defineProps({
  settings: {
    type: HangmanSettings,
    required: true,
  },
});
const hm = new Hangman(props.settings.word);
</script>

<template>
  <div class="all">
    <div v-if="hm.hasWon.value">Gewonnen</div>
    <div class="word">
      <div
        class="char"
        v-for="char in hm.wordChars"
        :key="char"
        :data-underscore="Hangman.guessableChars.includes(char)"
      >
        {{ hm.guessedChars.includes(char) || Hangman.visibleChars.includes(char) ? char : "" }}
      </div>
    </div>

    <div class="chars">
      <div
        class="char"
        v-for="char in Hangman.guessableChars"
        :key="char"
        :data-disabled="hm.guessedChars.includes(char)"
        @click="hm.guess(char)"
      >
        {{ char }}
      </div>
    </div>

    <div class="gallows">Galgen</div>
  </div>
</template>

<style scoped>
.all {
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto 20rem;
  grid-template-rows: 20rem auto;
}

.word {
  padding: 3rem;
  grid-column: 1;
  grid-row: 1;

  & .char {
    &[data-underscore] {
      width: 3rem;
      height: 3rem;
      text-align: center;
      border-bottom: solid 2px #ccc;
      float: left;
      margin-right: 1rem;
      font-size: 40px;
    }
  }
}

.chars {
  padding: 3rem;
  grid-row: 2;
  grid-column: span 2;
  & .char {
    float: left;
    font-size: 40px;
    position: relative;
    margin-right: 1rem;
    cursor: pointer;
    &[data-disabled="true"] {
      color: #777;
      &::after {
        content: "";
        position: absolute;
        border-top: solid 2px #777;
        width: 160%;
        transform: translate(-50%, -50%) rotate(-45deg);
        top: 50%;
        left: 50%;
      }
    }
  }
}

.gallows {
  grid-column: 2;
  grid-row: 1;
}
</style>

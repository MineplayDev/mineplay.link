<script lang="ts" setup>
import Chars from "~/components/hangman/Chars.vue";
import Gallows from "~/components/hangman/Gallows.vue";
import Word from "~/components/hangman/Word.vue";
import { Hangman } from "~/scripts/hangman/hangman";
import { HangmanSettings } from "~/scripts/hangman/hangman-settings";

const props = defineProps({
  settings: {
    type: HangmanSettings,
    required: true,
  },
});
const hm = new Hangman(props.settings);
</script>

<template>
  <div v-if="hm.hasWon.value">Gewonnen</div>
  <div v-if="hm.hasLost.value">Verloren</div>
  <div class="all">
    <div class="word"><Word :hm="hm" /></div>
    <div class="chars"><Chars :hm="hm" /></div>
    <div class="gallows"><Gallows :gallows="hm.gallows" /></div>
  </div>
</template>

<style scoped>
.all {
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto 500px;
  grid-template-rows: 500px auto;

  & .word {
    padding: 3rem;
    grid-column: 1;
    grid-row: 1;
  }

  & .chars {
    padding: 3rem;
    grid-row: 2;
    grid-column: span 2;
  }

  & .gallows {
    grid-column: 2;
    grid-row: 1;
    border-left: solid 4px rgba(255, 255, 255, 0.7);
  }
}
</style>

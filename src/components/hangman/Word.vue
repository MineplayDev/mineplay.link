<script setup lang="ts">
import { Hangman } from "~/scripts/hangman/hangman";

defineProps({
  hm: {
    type: Hangman,
    required: true,
  },
});
</script>

<template>
  <div
    class="char"
    v-for="char in hm.wordChars"
    :key="char"
    :data-underscore="Hangman.guessableChars.includes(char)"
  >
    {{ hm.guessedChars.includes(char) || Hangman.visibleChars.includes(char) ? char : "" }}
  </div>
</template>

<style scoped>
.char {
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
</style>

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
    v-for="char in Hangman.guessableChars"
    :key="char"
    :data-disabled="hm.guessedChars.includes(char)"
    @click="hm.guess(char)"
  >
    {{ char }}
  </div>
</template>

<style scoped>
.char {
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
</style>

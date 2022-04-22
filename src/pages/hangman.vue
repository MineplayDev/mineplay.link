<script lang="ts" setup>
import Settings from "~/components/hangman/Settings.vue";
import Game from "~/components/hangman/Game.vue";
import { HangmanSettings } from "~/scripts/hangman/hangman-settings";

useHead({
  title: "Galgenmännchen",
});

let settings = reactive(new HangmanSettings()) as HangmanSettings;
</script>

<template>
  <div class="bg"></div>
  <div class="main">
    <Game v-if="settings.playing" :settings="settings" />
    <Settings v-else :settings="settings" />
  </div>
</template>

<style scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  background: url("../assets/blackboard.jpg");
  z-index: -10;
}

.main {
  font-family: "Fredericka the Great", sans-serif;
}
</style>

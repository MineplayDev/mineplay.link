<script lang="ts" setup>
import { Difficulty, HangmanSettings } from "~/scripts/hangman/hangman-settings";
defineProps({
  settings: {
    type: HangmanSettings,
    required: true,
  },
});
</script>

<template>
  <div class="all">
    <label>
      Wort:
      <input class="textEingabe" type="text" v-model="settings.word" />
    </label>
    <button title="Zufälliges Wort" class="randomWordButton"></button>

    <h3>Schwierigkeit:</h3>
    <div class="difficulty">
      <label v-for="diff in Difficulty" :key="diff" :data-checked="settings.difficulty === diff">
        {{ diff }}
        <input type="radio" class="difficultyInput" v-model="settings.difficulty" :value="diff" />
      </label>
    </div>

    <button class="startbutton" @click="settings.playing = true">Start</button>
  </div>
</template>

<style scoped>
.all {
  font-size: 25px;
  text-align: center;
}

.textEingabe {
  border: none;
  border-bottom: solid 2px #aaa;
  padding: 0.1rem 0.5rem;
  color: #fff;
  background-color: transparent;
  font-family: "Fredericka the Great", sans-serif;
  font-size: 30px;
  width: 30rem;
  letter-spacing: 4px;

  &:focus {
    outline: none;
  }
}

.randomWordButton {
  background-image: url("../../assets/book.png");
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  background-color: transparent;
  background-size: cover;
  border: none;
  margin-left: 1rem;
  transform: translateY(-0.5rem);
}

h3 {
  font-weight: normal;
}

.difficulty {
  display: flex;
  flex-direction: column;
  margin: 1rem 0 3rem 0;
  user-select: none;

  & > label {
    cursor: pointer;

    & > input {
      display: none;
    }

    &::after {
      content: "\2718";
      opacity: 0;
      transition: opacity 400ms;
      color: rgba(255, 255, 255, 0.8);
    }

    &[data-checked="true"]::after {
      opacity: 1;
    }
  }
}

.startbutton {
  border: solid 2px #aaa;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: transparent;
  font-size: 30px;
  font-family: "Fredericka the Great", sans-serif;
  cursor: pointer;
}
</style>

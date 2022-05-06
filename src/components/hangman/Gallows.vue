<script setup lang="ts">
import { Ref } from "vue";
import { HangmanGallows } from "~/scripts/hangman/hangman-gallows";

const props = defineProps({
  gallows: {
    type: HangmanGallows,
    required: true,
  },
});
const canvas: Ref<HTMLCanvasElement | null> = ref(null);
onMounted(() => {
  let context = canvas.value?.getContext("2d");
  if (context) {
    props.gallows.addContext(context);
  }
});
</script>

<template>
  <canvas ref="canvas" width="500" height="500"></canvas>
</template>

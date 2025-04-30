<script setup lang="ts">
import OptionButton from './OptionButton.vue';
import TopBar from './TopBar.vue';
import ContentDisplay from './ContentDisplay.vue';

const emit = defineEmits(['switch']);

function handleChoice() {
  emit('switch');
}
</script>

<template>
  <TopBar title="Beefcake" />
  <div class="wrapper">
    <ContentDisplay src="src/assets/beefcake-sleeping-large.gif" width="760" height="760" alt="Beefcake sleeping" />
    <OptionButton src="src/assets/icons/heart.png" width="544" height="544" alt="icon" msg="Start game" @click="handleChoice" />
    <OptionButton src="src/assets/icons/question-mark.png" width="272" height="272" alt="icon" msg="About the game" />
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  background: #f4f0ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  height: 100%;
  gap: 16px;
}
</style>

<script setup lang="ts">
import OptionButton from './OptionButton.vue';
import TopBar from './TopBar.vue';
import ContentDisplay from './ContentDisplay.vue'; 

import beefcakeSleeping from '/src/assets/beefcake-sleeping-large.gif';
import iconHeart from '/src/assets/icons/heart.png';
import iconQuestion from '/src/assets/icons/question-mark.png';

const emit = defineEmits(['switch']);

function handleChoice() {
  emit('switch');
}
</script>

<template>
  <TopBar title="Beefcake" />
  <div class="wrapper">
    <ContentDisplay :src="beefcakeSleeping" width="760" height="760" alt="Beefcake sleeping" />
    <OptionButton :src="iconHeart" width="544" height="544" alt="icon" msg="Start game" @click="handleChoice" />
    <OptionButton :src="iconQuestion" width="272" height="272" alt="icon" msg="About the game" />
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

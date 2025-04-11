<script setup lang="ts">
import OptionButton from './OptionButton.vue';
import TopBar from './TopBar.vue';
import ContentDisplay from './ContentDisplay.vue';

function handleChoice() {
  console.log('button pressed');
}
</script>

<template>
  <TopBar title="Beefcake" />
  <div class="wrapper">
    <ContentDisplay 
    src="src/assets/beefcake-sleeping-large.gif"
    width="760"
    height="760"
    alt="Beefcake sleeping"/>
    <OptionButton icon="/src/assets/vue.svg" msg="Start game" @click="handleChoice" />
    <OptionButton icon="/src/assets/vue.svg" msg="About the game" />
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

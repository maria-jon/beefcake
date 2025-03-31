<script setup lang="ts">
import OptionButton from './OptionButton.vue';
import TopBar from './TopBar.vue';

function handleChoice() {
  console.log('button pressed');
}
</script>

<template>
  <TopBar title="Beefcake" />
  <div class="wrapper">
    <div class="content">
      <img src="/src/assets/beefcake-sleeping-large.gif" width="760" height="760" alt="Beefcake sleeping" />
    </div>
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
.content {
  width: 380px;
  height: 380px;
  background: #cff0ff;
  border-radius: 10px;
  border: 4px solid #37312d;
  overflow: hidden;
}
.content > img {
  width: 380px;
  height: 380px;
}
</style>

<script setup lang="ts">
import StartScreen from './components/StartScreen.vue';
</script>

<template>
  <div class="wrapper">
    <main>
      <StartScreen />
    </main>
  </div>
</template>

<style scoped>
main {
  width: 448px;
  height: 820px;
  border-radius: 10px;
  overflow: hidden;
  border: 4px solid #37312d;
  margin: 16px;
}
.wrapper {
  min-width: 100vw;
  height: auto;
  background-image: url('/src/assets/Tile.svg/');
  display: flex;
  justify-content: center;
}
</style>

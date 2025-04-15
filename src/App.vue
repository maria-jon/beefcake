<script setup lang="ts">
import StartScreen from './components/StartScreen.vue';
import GameScene from './components/GameScene.vue';
import { ref, computed } from 'vue';
import storyData, { type IScene as SceneType, type IChoice } from './data/storyData';

function handleStart() {
  document.getElementById('start')?.classList.add('hidden');
  document.getElementById('game')?.classList.remove('hidden');
}

const currentSceneId = ref<number>(0);
  
// const history = ref<number[]>([]);

const currentScene = computed<SceneType | undefined>(() =>{
  return storyData.find((scene) => scene.id === currentSceneId.value)
});

function handleChoice(choice: IChoice) {
  // history.value.push(currentSceneId.value);
  currentSceneId.value = choice.nextId;
}

</script>

<template>
  <div class="wrapper">
    <main>
      <div id="start">
        <StartScreen @switch="handleStart"/>
      </div>
      <div id="game" class="hidden">
        <GameScene 
        :scene="currentScene" 
        @choiceSelected="handleChoice" 
        />
      </div>
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

.hidden {
  display: none;
}
</style>

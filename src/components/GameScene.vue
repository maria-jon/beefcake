<script setup lang="ts">
import OptionButton from './OptionButton.vue';
import TopBar from './TopBar.vue';
import type { IScene, IChoice } from './data/storyData';


const props = defineProps<{
  scene: Scene | undefined;
}>();

const emit = defineEmits<{
  (event: 'choiceSelected', choice: IChoice): void;
}>();

function selectChoice(choice: IChoice) {
  emit('choiceSelected', choice);
}


</script>

<template class="scene" v-if="scene">
  <TopBar title="Beefcake" />
  <div class="wrapper">
    <div class="content">
      <h2>{{ scene.title }}</h2>
      <p>{{ scene.text }}</p>
      <p>{{ scene.text2 }}</p>
      <p>{{ scene.text3 }}</p>
    </div>
    <div>
      <OptionButton
      v-for="(choice, index) in scene.choices"
      :key="index"
      @click="selectChoice(choice)"
      icon="/src/assets/vue.svg"
      :msg="choice.text" 
      />
    </div>
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
.content > p {
  padding: 0.2rem 2rem;
  margin: 0;
}
h2 {
  font-size: 2rem;
  margin: 1rem;
}
</style>
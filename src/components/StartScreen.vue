<script setup lang="ts">
import OptionButton from './OptionButton.vue';

/* const props = */
defineProps<{ msg: string }>();
</script>

<template>
  <div class="top-bar">
    <h1>{{ msg }}</h1>
    <span><img src="" ></span>
  </div>
  <div class="wrapper">
    <div class="content">
      <img src="/src/assets/beefcake-sleeping-large.gif" width="760" height="760" alt="Beefcake sleeping" />
    </div>
    <OptionButton icon="/src/assets/vue.svg" msg="Start game"/>
  </div>
</template>
<style scoped lang="scss">
h1 {
  font-size: 3rem;
  color: #f4f0ed;
}

.top-bar {
  border-bottom: 4px solid #37312d;
}
.wrapper {
  background: #f4f0ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  height: 100%;
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
span > img {
    width: 45px;
    height: 45px;
}
</style>

<script setup lang="ts">
/* const props = */
defineProps<{ title: string }>();

function closeButton() {
  console.log('close button');
}

</script>

<template>
  <div class="top-bar">
    <h1>{{ title }}</h1>
    <button @click="closeButton"><img src="/src/assets/icons/close.png" width="360" height="360" alt="close icon" /></button>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: 3rem;
  color: #f4f0ed;
}
.top-bar {
  max-height: 46px;
  width: auto;
  background: #48458c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10px;
  border-bottom: 4px solid #37312d;
}
button {
  border: none;
  background-color: transparent;
}

button > img {
  width: 45px;
  height: 45px;
}
</style>

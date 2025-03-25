<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <div class="top-bar">
    <h1>{{ msg }}</h1>
    <span>CLOSE</span>
  </div>
  <div class="wrapper">
    <div class="content">Hejhej</div>
    <button>Text</button>
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
}
</style>

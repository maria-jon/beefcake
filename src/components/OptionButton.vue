<script setup lang="ts">
defineProps<{ msg: string }>();
</script>
<template>
  <button>
    <img src="" />
    {{ msg }}
  </button>
</template>
<style scoped>
button {
  width: 340px;
  margin: 16px;
  border-radius: 10px;
  border: 4px solid #37312d;
  padding: 12px 16px;
  font-size: 1.125em;
  font-weight: 700;
  font-family: 'Amatic SC', Helvetica, Arial, sans-serif;
  background-color: #f4f0ed;
  cursor: pointer;
  transition: border-color 0.25s;
  display: flex;
  align-items: center;
  gap: 16px;
}
button:hover {
  color: #f4f0ed;
  border-color: #f4f0ed;
  background-color: #37312d;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

img {
  width: 34px;
  height: 34px;
}
</style>

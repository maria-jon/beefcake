<script setup lang="ts">
/* const props = */
// defineProps<{ title: string }>();
</script>

<template>
  <div class="content">
    <img src="/src/assets/beefcake-sleeping-large.gif" width="760" height="760" alt="Beefcake sleeping" />
  </div>
</template>

<style scoped lang="scss">
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

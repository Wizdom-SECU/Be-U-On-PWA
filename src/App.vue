<template>
  <div style="width: 100%;height: 100%;">
    <router-view/>
    <ReloadPrompt/>
  </div>
</template>

<script setup>
import ReloadPrompt from './components/ReloadPrompt.vue'
</script>
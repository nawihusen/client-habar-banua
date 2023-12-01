<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ProjectCardComponent'
})
</script>

<template>
  <div class="flex flex-col h-full w-full bg-black z-auto">
    <div>Nama Project</div>
    <div>Summary Projecy</div>
    <div>Tech stack Project</div>
    <div class="flex justify-end"><button>Github</button></div>
  </div>
</template>

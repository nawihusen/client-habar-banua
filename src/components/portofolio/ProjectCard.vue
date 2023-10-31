<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ProjectCardComponent'
})
</script>

<template>
  <div class="flex flex-col w-full px-8">
    <div>Nama Project -> Nama Company</div>
    <div>Summary Projecy</div>
    <div>Tech stack Project</div>
    <div class="flex justify-end"><button>Github</button></div>
  </div>
</template>

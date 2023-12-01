<script setup>
import { defineComponent } from 'vue'
import ExperienceCard from './ExperienceCard.vue'
// import ProjectCard from './ProjectCard.vue'

defineComponent({
  name: 'BodyComponent'
})
</script>

<template>
  <ExperienceCard class="bg-blue-600 p-4" />
  <!-- <ProjectCard /> -->
</template>

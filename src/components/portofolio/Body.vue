<script setup>
import { defineComponent } from 'vue'
import ExperienceCard from './ExperienceCard.vue'
import ProjectCard from './ProjectCard.vue'

defineComponent({
  name: 'BodyComponent'
})
</script>

<template>
  <ExperienceCard />
  <ProjectCard />
</template>

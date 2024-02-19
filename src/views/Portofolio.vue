<script setup>
import { defineComponent } from 'vue'
import profile from '@/components/portofolio/Head.vue'
import content from '@/components/portofolio/Body.vue'
// import ProjectCard from '@/components/portofolio/ProjectCard.vue'

defineComponent({
  name: 'PortopolioPage'
})
</script>

<template>
  <!-- <div><ProjectCard /></div> -->
  <div>
    <profile />
    <content />
  </div>
</template>

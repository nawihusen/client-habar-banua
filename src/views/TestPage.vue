<script setup>
import ProjectModal from '@/components/portofolio/ProjectModal.vue'
import { ref } from 'vue'

const show = ref(true)
const closeModal = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="h-screen w-screen bg-blue-500 p10">
    <ProjectModal v-if="show" :toggle="show" @close="closeModal" />
  </div>
</template>

<!-- <Icon v-if="loading" icon="eos-icons:loading" color="white" width="24" height="24" />
<span v-if="!loading">Masuk</span> -->

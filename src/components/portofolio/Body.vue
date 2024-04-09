<script setup>
import { defineComponent, ref, watch } from 'vue'
import { useGetExperience } from '@/components/portofolio/query.js'
import ExperienceCard from './ExperienceCard.vue'

defineComponent({
  name: 'BodyComponent'
})

const experiences = ref([])
const { data } = useGetExperience()

watch(data, () => {
  experiences.value = data?.value?.data
  // console.log(experiences.value)
})
</script>

<template>
  <ExperienceCard
    class="bg-blue-600 p-4 my-2"
    v-for="experience in experiences"
    :key="experience.id"
    :data="experience"
  />
</template>

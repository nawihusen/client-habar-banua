<script setup>
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
// import { getExperiences } from '../../services/portofolio/portofolio.js'

const router = useRouter()

defineComponent({
  name: 'ExperienceCardComponent'
})

const props = defineProps({
  company: {
    default: 'Nama Perusahaan',
    type: String
  },
  date: {
    default: '01 January 2023',
    type: String
  },
  role: {
    default: 'Backend Engineer',
    type: String
  },
  description: {
    default: 'desc 1. desc 2. desc 3',
    type: String
  }
})

function splitDetail(data) {
  const result = data.split('. ')

  return result
}

const goExperienceListPage = () => {
  router.push('/experience')
}

const getRoute = () => {
  const route = computed(() => router.currentRoute.value.name)
  return route.value
}
</script>

<template>
  <div class="flex flex-col w-full px-8">
    <div class="flex flex-row justify-between font-bold">
      <h1>{{ props.company }}</h1>
      <h1>{{ props.date }}</h1>
    </div>
    <div class="font-bold">{{ props.role }}</div>
    <div>
      <ul>
        <li class="pl-8 py-1" v-for="(item, index) in splitDetail(description)" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="flex justify-end">
      <button v-if="getRoute() === 'portofolio'" class="font-bold" @click="goExperienceListPage">
        More Details
      </button>
    </div>
  </div>
</template>

<style></style>

<!-- gasan commi6 -->

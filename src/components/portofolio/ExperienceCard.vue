<script setup>
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getExperiences } from '../../services/portofolio/portofolio.js'

const router = useRouter()

defineComponent({
  name: 'ExperienceCardComponent'
})

const detail = ref({
  company: '',
  date: '',
  role: '',
  desc: ''
})

const exps = ref([])

const experiences = async () => {
  const res = await getExperiences()

  exps.value = res
}
console.log(experiences)
console.log(experiences.value)

console.log(detail)
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
      <h1>nama perusahaan</h1>
      <h1>tanggal masul</h1>
    </div>
    <div class="font-bold">role</div>
    <div>
      <ul v-if="getRoute() === 'experience'">
        <li class="pl-8 py-1" v-for="(item, index) in splitDetail(experiences[0])" :key="index">
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
<!-- commit  -->
<!-- commit -->

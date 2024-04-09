<script setup>
import { defineComponent, ref } from 'vue'
// import { useRouter } from 'vue-router'
// import ProjectModal from './ProjectModal.vue'

defineComponent({
  name: 'ExperienceCardComponent'
})

// const router = useRouter()
const show = ref(false)

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const toggleModal = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="flex flex-col w-full px-8">
    <div class="flex flex-row justify-between font-bold">
      <h1>{{ props.data.company }}</h1>
      <h1>{{ props.data.start }} - {{ props.data.end }}</h1>
    </div>
    <div class="font-bold">{{ props.data.role }}</div>
    <!-- <div>{{ props.data.description }}</div> -->
    <ul>
      <li
        v-for="(detail, index) in props.data.description"
        :key="index"
        class="list-outside list-disc ml-8"
      >
        {{ detail }}
      </li>
    </ul>
    <br />
    <div class="flex justify-end">
      <button @click="toggleModal" class="text-xs bg-red-500 w-fit py-1 px-2 rounded-md">
        More Detail
      </button>
    </div>
  </div>
  <!-- <ProjectModal :toggle:"show"></ProjectModal> -->
</template>

<style></style>

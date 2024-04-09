<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ProjectModalComponent'
})

const props = defineProps({
  toggle: {
    type: Boolean,
    default: false
  }
})

console.log(props.toggle)
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div
    class="modal bg-white fixed w-80 -translate-x-1/2 -translate-y-1/2 h-96 top-1/2 left-1/2 flex justify-center align-middle"
  >
    <div class="p-5 rounded-md">
      <span class="absolute top-3 right-3 cursor-pointer" @click="closeModal">&times;</span>
      <p>Isi modal di sini...</p>
    </div>
  </div>
</template>

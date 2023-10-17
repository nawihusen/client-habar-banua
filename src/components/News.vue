<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'NewsComponent'
})

const props = defineProps({
  imgUrl: {
    type: String,
    default: 'src/assets/images/news.png'
  },
  time: {
    type: String,
    default: 'time'
  },
  title: {
    type: String,
    default: 'title'
  }
})
</script>

<template>
  <div>
    <div>
      <img :src="props.imgUrl" class="rounded w-40 h-40" alt="gambar berita" />
      <p class="p-0 text-xs font-semibold text-red-500">{{ props.time }}</p>
    </div>
    <p>{{ props.title }}</p>
  </div>
</template>

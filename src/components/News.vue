<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'NewsComponent'
})

function shorter(data) {
  if (data.length > 60) {
    return data.substring(0, 51) + '. . .'
  }
}

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
    <div class="flex flex-col justify-center">
      <div class="flex h-full w-full items-center justify-center">
        <img :src="props.imgUrl" class="rounded w-32 h-32" alt="gambar berita" />
      </div>
      <p class="p-0 text-xs font-semibold text-red-500 justify-end">{{ props.time }}</p>
    </div>
    <div>
      <p class="text-sm">{{ shorter(props.title) }}</p>
    </div>
  </div>
</template>

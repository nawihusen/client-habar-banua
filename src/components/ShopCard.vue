<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ShopCardComponent'
})

// function shorter(data) {
//   if (data.length > 60) {
//     return data.substring(0, 45) + '. . .'
//   } else if (data.length <= 60) {
//     return data
//   }
// }

const props = defineProps({
  imgUrl: {
    type: String,
    default: 'src/assets/images/news.png'
  },
  id: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="h-44 w-44 p-2">
    <div class="flex flex-col justify-center">
      <div class="flex h-full w-full items-center justify-center">
        <img :src="props.imgUrl" class="rounded w-24 h-24" alt="gambar berita" />
      </div>
    </div>
    <div class="flex flex-row flex-wrap w-full">
      <div class="flex flex-col">
        <p class="tag"><span>Name</span>:</p>
        <p class="tag"><span>Price</span>:</p>
      </div>
      <div class="flex flex-col">
        <p class="tag ml-1">{{ name }}</p>
        <p class="tag ml-1">{{ price }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.tag {
  font-size: small;
}
</style>

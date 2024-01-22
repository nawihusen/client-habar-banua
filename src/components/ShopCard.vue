<script setup>
import { defineComponent } from 'vue'
// import { defineComponent, ref } from 'vue'
// import { useRouter } from 'vue-router'

defineComponent({
  name: 'ShopCardComponent'
})

// const router = useRouter()

// const form = ref({
//   imgUrl: '',
//   id: '',
//   name: '',
//   price: ''
// })

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

const edit = (id) => {
  console.log(id)
}
</script>

<template>
  <div class="h-44 w-44 p-2" @click="edit(id)">
    <div class="flex flex-col justify-center">
      <div class="flex h-full w-full items-center justify-center">
        <img :src="props.imgUrl" class="rounded w-24 h-24" alt="gambar berita" />
      </div>
    </div>
    <div class="flex flex-row flex-wrap w-full mt-4 pl-2">
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
<!-- gasan commit seadanya dlulu -->

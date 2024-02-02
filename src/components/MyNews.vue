<script setup>
import { defineComponent } from 'vue'
import news from '@/components/NewsCard.vue'

defineComponent({
  name: 'MyNewsComponent'
})

const temps = [
  {
    time: 'senin jalo hala',
    title:
      'aku ingin coba buat judul yang panjang supaya tahu apa yang akan terjadi testing pang lui kyapa',
    img: 'src/assets/images/kazuha.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/news.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/default.jpg'
  },
  {
    time: 'senin jalo hala',
    title: 'Judul 1',
    img: 'src/assets/images/kazuha.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/news.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/default.jpg'
  },
  {
    time: 'senin jalo hala',
    title: 'Judul 1',
    img: 'src/assets/images/kazuha.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/news.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/default.jpg'
  },
  {
    time: 'senin jalo hala',
    title: 'Judul 1',
    img: 'src/assets/images/kazuha.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/news.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/default.jpg'
  },
  {
    time: 'senin jalo hala',
    title: 'Judul 1',
    img: 'src/assets/images/kazuha.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/news.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/default.jpg'
  },
  {
    time: 'senin jalo hala',
    title: 'Judul 1',
    img: 'src/assets/images/kazuha.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/news.png'
  },
  {
    time: 'selasa jalo hala',
    title: 'Judul 2',
    img: 'src/assets/images/default.jpg'
  },
  {
    time: 'senin jalo hala',
    title: 'Judul 1',
    img: 'src/assets/images/kazuha.png'
  }
]
</script>

<template>
  <div><h4 class="p8 bg-gray-400 w-fit px-4 rounded-tr-full">News</h4></div>
  <div>
    <ul class="flex flex-row flex-wrap bg-gray-400 justify-between gap-y-2 gap-x-2 p-4">
      <li class="bg-white" v-for="(item, index) in temps" :key="index">
        <news :time="item.time" :title="item.title" :imgUrl="item.img" />
      </li>
    </ul>
  </div>
</template>

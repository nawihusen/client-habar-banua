<script setup>
import navbar from '@/components/navigator/Header.vue'
import sideDrawer from '@/components/navigator/SideDrawer.vue'
import news from '@/components/NewsCard.vue'

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
  // {
  //   time: 'selasa jalo hala',
  //   title: 'Judul 2',
  //   img: 'src/assets/images/news.png'
  // }
  // {
  //   time: 'selasa jalo hala',
  //   title: 'Judul 2',
  //   img: 'src/assets/images/default.jpg'
  // },
  // {
  //   time: 'senin jalo hala',
  //   title: 'Judul 1',
  //   img: 'src/assets/images/kazuha.png'
  // },
  // {
  //   time: 'selasa jalo hala',
  //   title: 'Judul 2',
  //   img: 'src/assets/images/news.png'
  // },
  // {
  //   time: 'selasa jalo hala',
  //   title: 'Judul 2',
  //   img: 'src/assets/images/default.jpg'
  // }
]
</script>

<template>
  <div class="flex flex-row w-full h-full">
    <div class="max-md:hidden fixed h-full">
      <sideDrawer />
    </div>

    <div class="bg-orange-400 flex flex-col md:pl-52 grow">
      <div class="fixed w-full md:pr-52 max-md:hidden"><navbar /></div>
      <div class="flex h-full w-full bg-green-600 fixed top-12 md:pr-52 pb-12">
        <div class="flex max-md:justify-center w-full h-full border-4 border-blue-600 p-8">
          <div class="h-full overflow-auto bg-red-500 max-md:justify-center max-md:items-center">
            <ul class="flex flex-wrap gap-3 max-md:justify-between">
              <li class="test flex items-center justify-center" v-for="(item, i) in temps" :key="i">
                <news :time="item.time" :title="item.title" :imgUrl="item.img" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.test {
  background-color: blue;
}
</style>

<!-- vs code bermasalah -->

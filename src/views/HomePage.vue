<script setup>
import navbar from '@/components/navigator/Header.vue'
import sideDrawer from '@/components/navigator/SideDrawer.vue'
import news from '@/components/News.vue'

const temps = [
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
  {}
]
</script>

<template>
  <div class="flex flex-row w-full h-full fixed">
    <div>
      <sideDrawer />
    </div>

    <div class="flex grow flex-col">
      <div><navbar /></div>

      <div class="flex h-full items-center justify-center border-black border-8 p-8">
        <div
          class="flex h-full w-full flex-wrap sm:bg-red-500 md:bg-orange-500 lg:bg-yellow-500 xl:bg-green-500 2xl:bg-blue-500"
        >
          <ul class="flex flex-row gap-3">
            <li class="test" v-for="(item, i) in temps" :key="i">
              <news :time="item.time" :title="item.title" :imgUrl="item.img" />
            </li>
          </ul>
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

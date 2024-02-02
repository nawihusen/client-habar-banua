<script setup>
import navbar from '@/components/navigator/Header.vue'
import news from '@/components/MyNews.vue'
import sideDrawer from '@/components/navigator/SideDrawer.vue'

const onSearch = () => {
  console.log('lakukan sesuatu di sini')
}
</script>

<template>
  <div class="max-md:hidden fixed h-full">
    <sideDrawer />
  </div>
  <div class="fixed w-full md:pl-52"><navbar /></div>

  <div class="md:pt-12 md:pl-64 md:pr-20 max-md:pt-16 max-md:px-8">
    <div class="pl-2 md:mt-8 border-b-4 border-black w-full font-bold flex flex-row gap-3">
      <input
        placeholder="Search ..."
        type="text"
        class="input w-full dark:text-white outline-none"
      />
      <span class="material-symbols-outlined hover:text-blue-500 cursor-pointer" @click="onSearch">
        search
      </span>
    </div>

    <div class="mt-8"><news /></div>
  </div>
</template>

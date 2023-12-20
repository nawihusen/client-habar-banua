<script setup>
import navbar from '@/components/navigator/Header.vue'
import profile from '@/components/MyProfile.vue'
import news from '@/components/MyNews.vue'
import shop from '@/components/MyShop.vue'
</script>

<template>
  <div class="fixed w-full max-md:hidden"><navbar /></div>
  <div class="pt-12 px-8">
    <div class="mb-4"><profile /></div>
    <div class="mb-4"><news /></div>
    <div><shop /></div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'MyShopComponent'
})
</script>

<template>
  <div><h4 class="p8 bg-gray-400 w-fit px-4 rounded-tr-full">My Shop</h4></div>
  <div>
    <ul class="flex flex-row flex-wrap bg-gray-400 justify-between gap-y-2 gap-x-2 p-4">
      <li class="bg-white" v-for="(item, index) in temps" :key="index">
        <news :time="item.time" :title="item.title" :imgUrl="item.img" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import shop from '@/components/ShopCard.vue'

defineComponent({
  name: 'MyShopComponent'
})

const items = [
  {
    id: 1,
    name: 'Produk 1',
    price: 20000
  },
  {
    id: 2,
    name: 'Produk 2',
    price: 50000
  }
]
</script>

<template>
  <div><h4 class="p8 bg-gray-400 w-fit px-4 rounded-tr-full">My Shop</h4></div>
  <div>
    <ul class="flex flex-row flex-wrap bg-gray-400 justify-between gap-y-2 gap-x-2 p-4">
      <li class="bg-white" v-for="(item, index) in items" :key="index">
        <shop :name="item.name" :price="item.price" :id="item.id" />
      </li>
    </ul>
  </div>
</template>

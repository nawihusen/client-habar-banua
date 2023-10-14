<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'HeaderComponent'
})
</script>

<template>
  <div class="flex h-12 px-8 pb-1 pt-1 w-full justify-between items-start">
    <span class="material-symbols-outlined"> mosque </span>
    <button
      class="rounded flex justify-center items-center bg-red-600 w-20 h-3/4 font-bold"
      @click="onlogout"
    >
      <span>logout</span>
    </button>
  </div>
</template>

<!-- https://instagram.fbdj6-1.fna.fbcdn.net/v/t51.2885…nR88JulGvpevEmRyC1Il4A&oe=64FA71B8&_nc_sid=8b3546 -->

<script setup>
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/Auth'

defineComponent({
  name: 'HeaderComponent'
})

const onlogout = async () => {
  console.log('click logout')
  const { logout } = useAuthStore()
  try {
    logout()
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="flex h-12 px-8 py-1 justify-between items-start bg-red-700 w-full">
    <div class="h-full flex items-center justify-center">
      <h1 class="cursor-pointer">Habar Banua</h1>
    </div>
    <div class="h-full flex items-center justify-center">
      <button
        class="rounded flex justify-center items-center bg-red-600 w-20 h-3/4 font-bold"
        @click="onlogout"
      >
        <span>logout</span>
      </button>
    </div>
  </div>
</template>

<!-- https://instagram.fbdj6-1.fna.fbcdn.net/v/t51.2885…nR88JulGvpevEmRyC1Il4A&oe=64FA71B8&_nc_sid=8b3546 -->

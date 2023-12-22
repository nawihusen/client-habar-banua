<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'MyProfileComponent'
})
</script>

<template>
  <div class="flex flex-col p-4 bg-gray-300 rounded-md">
    <div class="flex flex-row">
      <div class="flex items-center w-full h-40 bg-blue-500 pl-8 md:flex-row">
        <img src="@/assets/images/default.jpg" alt="image" class="rounded-full w-32 h-32" />
      </div>
      <div class="max-md:hidden"><p>wah</p></div>
    </div>
    <div class="flex flex-row flex-wrap bg-yellow-500 h-full w-full">
      <div class="flex flex-col justify-between py-8 px-4 bg-green-500">
        <p><span class="tag">Name</span>:</p>
        <p><span class="tag">Phone</span>:</p>
        <p><span class="tag">Wa</span>:</p>
        <p><span class="tag">Role</span>:</p>
      </div>
      <div class="flex flex-col grow justify-between py-8 bg-purple-500">
        <p>Muhammad Nawi Husen</p>
        <p>di suatu tempat</p>
        <p>Bekerja di suatu tempat</p>
        <p>Bekerja di suatu tempat</p>
      </div>
    </div>
    <div></div>
  </div>
</template>

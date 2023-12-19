<script setup>
import navbar from '@/components/navigator/Header.vue'
</script>

<template>
  <div class="fixed w-full max-md:hidden"><navbar /></div>

  <div class="flex flex-row pt-12 h-full w-full">
    <div
      class="profile flex flex-col h-full w-1/2 border-8 border-red-500 justify-center items-center"
    >
      <div class="w-full h-40 bg-green-500">
        <img src="@/assets/images/default.jpg" alt="image" class="rounded-full p-4 w-40 h-40" />
      </div>
      <div class="flex flex-row bg-yellow-500 h-full w-full">
        <div class="flex flex-col justify-between py-8 px-4 bg-green-500">
          <p><span class="tag">Name</span>:</p>
          <p><span class="tag">Phone</span>:</p>
          <p><span class="tag">Wa</span>:</p>
          <p><span class="tag">Role</span>:</p>
        </div>
        <div class="flex flex-col grow justify-between py-8 bg-purple-500">
          <p>Muhammad Nawi Husen</p>
          <p>Bekerja di suatu tempat</p>
          <p>di suatu tempat</p>
          <p><button class="button">Resume and 履歴書</button></p>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-1/2 h-full border-black border-8">
      <div class="news h-1/2 w-full bg-yellow-500">
        <p>test</p>
      </div>
      <div class="shop h-1/2 w-full bg-orange-500">
        <p>test</p>
      </div>
    </div>
  </div>
</template>

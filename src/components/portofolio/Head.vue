<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'HeaderComponent'
})
</script>

<template>
  <header>
    <div class="flex flex-row flex-wrap p-8 bg-inherit w-full">
      <div class="flex lg:w-1/3 px-8 items-center justify-center w-full h-full">
        <img
          src="@/assets/images/profile.jpg"
          alt="Profile Image"
          class="rounded-full w-80 h-80 border-2 border-red-400"
        />
      </div>
      <div class="lg:w-2/3 bg-inherit grow rounded-lg">
        <ul class="py-8">
          <li><span>Name </span>Muhammad Nawi Husen</li>
          <li><span>Address </span></li>
          <li><span>Email </span></li>
          <li><span>Phone </span></li>
          <li><span>LinkedIn </span></li>
          <li><span>Github </span></li>
        </ul>
      </div>
    </div>
  </header>
  <p class="sm:bg-black md:bg-red-500 lg:bg-blue-500 xl:bg-orange-600">
    apa sih yang di maksud breaj
  </p>
</template>

<style>
span {
  display: block;
}
</style>

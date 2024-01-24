<script setup>
import navbar from '@/components/navigator/Header.vue'
import sideDrawer from '@/components/navigator/SideDrawer.vue'
</script>

<template>
  <div class="max-md:hidden fixed h-full">
    <sideDrawer />
  </div>
  <div class="fixed w-full md:pl-52 max-md:hidden"><navbar /></div>

  <div class="pt-12 md:pl-52">
    <div class="px-12 mt-8 border-b-4 border-black w-full font-bold">
      <input
        placeholder="Search ..."
        type="text"
        class="input w-full dark:text-white"
        :class="{
          'input-error': errorMessage,
          'input-focus': !errorMessage
        }"
        v-model="model"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>

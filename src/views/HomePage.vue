<script setup>
import navbar from '@/components/navigator/Header.vue'
import sideDrawer from '@/components/navigator/SideDrawer.vue'
</script>

<template>
  <div class="flex flex-row w-full h-full fixed">
    <div>
      <sideDrawer />
    </div>

    <div class="flex grow flex-col">
      <div><navbar /></div>

      <div class="flex h-full items-center justify-center border-black border-8 p-8">
        <div
          class="flex h-full w-full sm:bg-red-500 md:bg-orange-500 lg:bg-yellow-500 xl:bg-green-500 2xl:bg-blue-500"
        >
          <p>waluh</p>
        </div>
      </div>
    </div>
  </div>
</template>

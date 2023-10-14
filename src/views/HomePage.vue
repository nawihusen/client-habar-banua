<script setup>
import navbar from '@/components/navigator/Header.vue'
import sideDrawer from '@/components/navigator/SideDrawer.vue'
</script>

<template>
  <div class="flex flex-row">
    <div>
      <sideDrawer />
    </div>
    <div class="flex flex-col">
      <div>
        <navbar />
      </div>

      <div>halo</div>
    </div>
  </div>
</template>

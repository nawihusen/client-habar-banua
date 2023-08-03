<template>
  <div class="bg-sky-400 h-full dark:bg-darksecondary rounded-[10px] p-4 xl:p-6">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ContainerComponent'
})
</script>

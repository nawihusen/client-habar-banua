<script setup>
import { defineComponent } from 'vue'
import profile from '@/components/portofolio/Head.vue'
import Naiyou from '@/components/portofolio/Body.vue'

defineComponent({
  name: 'PortopolioPage'
})
</script>

<template>
  <profile />
  <Naiyou />
</template>

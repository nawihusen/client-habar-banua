<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ExperienceCardComponent'
})
</script>

<template>
  <div class="flex flex-col w-full px-8">
    <div class="flex flex-row justify-between font-bold">
      <h1>Nama Perusahaan</h1>
      <h1>Tanggal Masuk</h1>
    </div>
    <div class="font-bold">Role</div>
    <div>
      <ul>
        <li>Isi daari pekerjaan yang di lakukan di sana</li>
      </ul>
    </div>
  </div>
</template>

<style></style>

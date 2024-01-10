<script setup>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineComponent({
  name: 'ExperienceCardComponent'
})

const goExperienceListPage = () => {
  router.push('/experience')
}
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
        <li>coba dlu apa yang ada</li>
      </ul>
    </div>
    <div class="flex justify-end">
      <button class="font-bold" @click="goExperienceListPage">List Projects</button>
    </div>
  </div>
</template>

<style></style>

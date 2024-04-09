<script setup>
import { defineComponent, ref, watch } from 'vue'
import { useFetchInfo } from '@/components/portofolio/query.js'

defineComponent({
  name: 'HeaderComponent'
})

const info = ref({})
const { data } = useFetchInfo()

watch(data, () => {
  info.value = data?.value?.data
})
</script>

<template>
  <header>
    <div class="flex flex-row flex-wrap p-4 bg-inherit w-full">
      <div class="flex lg:w-1/3 px-8 items-center justify-center w-full h-full bg-red-500">
        <img
          src="@/assets/images/profile.jpg"
          alt="Profile Image"
          class="rounded-full w-80 h-80 border-2 border-red-400"
        />
      </div>
      <div class="flex lg:w-1/3 bg-inherit grow rounded-lg bg-blue-500 w-full">
        <div class="flex flex-row bg-yellow-500 h-full w-full">
          <div class="flex flex-col justify-between py-8 px-4 bg-green-500">
            <p><span class="tag">Name</span>:</p>
            <p><span class="tag">Status</span>:</p>
            <p><span class="tag">Address</span>:</p>
            <p><span class="tag">Email</span>:</p>
            <p><span class="tag">Phone/Wa</span>:</p>
            <p><span class="tag">Line</span>:</p>
            <p><span class="tag">LinkedIn</span>:</p>
            <p><span class="tag">Github</span>:</p>
            <p><span class="tag">CV</span>:</p>
          </div>
          <div class="flex flex-col grow justify-between py-8 bg-purple-500">
            <p>{{ info?.name }}</p>
            <p>{{ info?.status }}</p>
            <p>{{ info?.address }}</p>
            <p>{{ info?.email }}</p>
            <p>{{ info?.phone }}</p>
            <p>{{ info?.line }}</p>
            <p class="link">
              <a :href="info?.linkedin" target="_blank">Linked Profile</a>
            </p>
            <p class="link">
              <a :href="info?.github" target="_blank">Github Profile</a>
            </p>
            <p class="link">
              <a :href="info?.cv" target="_blank">Resume and 履歴書</a>
            </p>
          </div>
        </div>
      </div>
      <div class="flex grow pt-8 pl-4 flex-col lg:w-1/3 bg-inherit rounded-lg bg-blue-500 w-full">
        <h1>Role :</h1>
        <ul class="pl-8 list-disc w-full tag">
          <li>Backend Developer</li>
          <li>Frontend Developer</li>
          <!-- <li>Android Developer</li> -->
        </ul>
      </div>
    </div>
    <div class="flex flex-col bg-inherit grow rounded-lg bg-orange-500 w-full p-8">
      <h1 class="bg-red-500 pb-2 font-bold">About Me :</h1>
      <div>
        <p>{{ info?.summary }}</p>
      </div>
    </div>
  </header>
</template>

<style>
.tag {
  font-weight: bold;
}

p {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.link {
  color: blue;
}
</style>

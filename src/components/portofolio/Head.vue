<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'HeaderComponent'
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
            <p>Muhammad Nawi Husen</p>
            <p>Bekerja di suatu tempat</p>
            <p>di suatu tempat</p>
            <p>muhammadf dfdfda</p>
            <p>dfdfdfdfdfdfdfdfd</p>
            <p>Line</p>
            <p><button class="button">LinkedIn Profile</button></p>
            <p><button class="button">Github Profile</button></p>
            <p><button class="button">Resume and 履歴書</button></p>
          </div>
        </div>
      </div>
      <div class="flex grow pt-8 pl-4 flex-col lg:w-1/3 bg-inherit rounded-lg bg-blue-500 w-full">
        <h1>Role :</h1>
        <ul class="pl-8 list-disc w-full tag">
          <li>Backend Developer</li>
          <li>Frontend Developer</li>
          <li>Android Developer</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col bg-inherit grow rounded-lg bg-orange-500 w-full p-8">
      <h1 class="bg-red-500 pb-2 font-bold">About Me :</h1>
      <div>
        <p>
          I'm a Backend engineer, graduated from Alterra Academy Immersive Program. I have extensive
          skill in Golang, gRPC and MySQL. I am also experienced in implementing clean architecture
          and payment gateway (Using Midtrans) in several projects. I'm very excited about new
          things I encounter when improving my skills and develop many features, this thing makes me
          excited to keep growing. Always looking for new challenges and opportunities to learn and
          grow as a developer. I'm a Backend engineer, graduated from Alterra Academy Immersive
          Program. I have extensive skill in Golang, gRPC and MySQL. I am also experienced in
          implementing clean architecture and payment gateway (Using Midtrans) in several projects.
          I'm very excited about new things I encounter when improving my skills and develop many
          features, this thing makes me excited to keep growing. Always looking for new challenges
          and opportunities to learn and grow as a developer.
        </p>
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

.button {
  border: 1px;
  background-color: blue;
  border-radius: 5px;
  padding: 1px;
}
</style>

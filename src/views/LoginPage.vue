<script setup>
import { ref, defineComponent } from 'vue'
import InputText from '@/components/form/InputText.vue'
import { useAuthStore } from '@/stores/Auth'
// import Container from '@/components/Container.vue'
import * as yup from 'yup'

defineComponent({
  name: 'LoginPage'
})
const form = ref({
  username: '',
  password: ''
})

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
})

const loginHandler = async () => {
  const { login } = useAuthStore()
  const { username, password } = form.value
  try {
    await login({ username, password })
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div
    class="bg-[url('https://images.alphacoders.com/115/1150213.png')] bg-cover bg-center flex h-screen w-screen flex-row-reverse"
  >
    <div class="flex justify-center items-center w-1/2">
      <div class="w-1/2 h-1/2 bg-sky-400 flex justify-center align-middle rounded-lg bg-opacity-50">
        <form
          :validation-schema="schema"
          @submit.prevent="loginHandler"
          class="flex flex-col justify-center h-full w-10/12"
        >
          <InputText
            cla
            label="Username :"
            type="text"
            placeholder=" Username"
            v-model="form.username"
          />
          <InputText
            label="Password :"
            type="password"
            placeholder=" Password"
            v-model="form.password"
          />

          <button
            class="btn text-white bg-indigo-900 w-full text-center justify-center items-center flex flex-col gap-5 mt-4 rounded"
            type="submit"
          >
            <span>Masuk</span>
          </button>
        </form>
      </div>
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<!-- <Icon v-if="loading" icon="eos-icons:loading" color="white" width="24" height="24" />
<span v-if="!loading">Masuk</span> -->

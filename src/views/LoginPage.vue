<script setup>
import { ref, defineComponent } from 'vue'
import InputText from '@/components/form/InputText.vue'
import Container from '@/components/Container.vue'
import * as yup from 'yup'

defineComponent({
  name: 'LoginPage'
})
const form = ref({
  username: '',
  password: ''
})

const schema = yup.object({
  Username: yup.string().required(),
  Password: yup.string().required()
})

const loginHandler = () => {
  console.log('berhasil panggil login page')
  console.log(form.value)
}
</script>

<template>
  <div
    class="flex flex-col gap-6 bg-surface p-4 lg:p-12 xl:p-32 items-center justify-center min-h-screen bg-[url('https://images.alphacoders.com/115/1150213.png')] bg-cover bg-center"
  >
    <Container
      class="max-w-sm flex flex-col gap-10 overflow-hidden transition-all md:min-w-[450px] md:flex"
    >
      <form
        :validation-schema="schema"
        @submit.prevent="loginHandler"
        class="flex flex-col justify-center"
      >
        <InputText label="Username :" type="text" placeholder=" Username" v-model="form.username" />
        <InputText
          class="mt-3"
          label="Password :"
          type="password"
          placeholder=" Password"
          v-model="form.password"
        />

        <button
          class="btn text-white bg-indigo-900 w-full text-center justify-center items-center flex flex-col gap-5 mt-4"
          type="submit"
        >
          <span>Masuk</span>
        </button>
      </form>
    </Container>
  </div>
</template>

<!-- <Icon v-if="loading" icon="eos-icons:loading" color="white" width="24" height="24" />
<span v-if="!loading">Masuk</span> -->

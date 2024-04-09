<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ModalComponent'
})
// export default {
//   data() {
//     return {
//       showModal: false
//     }
//   },
//   methods: {
//     openModal() {
//       this.showModal = true
//     },
//     closeModal() {
//       this.showModal = false
//     }
//   }
// }
</script>

<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <p>Isi modal di sini...</p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>

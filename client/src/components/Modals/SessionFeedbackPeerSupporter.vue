<script setup lang="ts">
import axios from 'axios'
import { useToast } from 'vue-toastification'
import type beneficiaryType from '@/interfaces/beneficiary'
const props = defineProps<{
  modalOpened: boolean
  beneficiary: beneficiaryType | undefined
}>()

const toast = useToast()

const sumbitFeedback = async () => {
  try {
    const response = await axios.post('/session/feedback/', {
      sessionId: '',
      peerSupporterId: '',
    })
    toast.success('Successfully the updated session')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my_modal_5" :checked="props.modalOpened" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">This modal works with a hidden checkbox!</p>
      <div class="modal-action">
        <label for="my_modal_6" class="btn" @click="sumbitFeedback()">Close!</label>
      </div>
    </div>
  </div>
</template>

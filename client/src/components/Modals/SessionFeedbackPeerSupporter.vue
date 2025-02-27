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
  <input type="checkbox" id="my_modal_5" :checked="props.modalOpened" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box flex flex-col">
      <h1 class="text-lg font-bold">Session Feedback Form</h1>
      <p class="py-4">test</p>
      <section class="flex w-full items-end justify-between">
        <p class="text-base-200">Click outside the modal to close it</p>
        <button class="btn place-self-end" @click="sumbitFeedback()">Submit</button>
      </section>
    </div>
    <label class="modal-backdrop" for="my_modal_5">Close</label>
  </div>
</template>

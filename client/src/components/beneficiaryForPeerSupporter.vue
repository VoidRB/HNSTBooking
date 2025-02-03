<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import FlagModal from './Modals/FlagModal.vue'
const toast = useToast()
const beneficiary = ref({
  id: 1,
  name: 'Alice Johnson',
  email: 'alice.johnson@example.com',
  status: 'Approved',
  gender: 'Female',
  Sessions: '3',
  assignedPeerSupporter: 'John Doe',
  communicationOption: 'Google Meet',
  staffNotes: '',
})

const notifyBeneficiary = async (chosenBeneficiaryId: number) => {
  toast.info('Notifiying Beneficiary...')
  try {
    const response = await axios.post('/api/notify-beneficiary', {
      beneficiaryId: chosenBeneficiaryId,
    })
    toast.success('Notified Beneficiary')
  } catch (error) {
    toast.error('Couldnt notify the beneficiary')
  }
}
</script>
<template>
  <div class="mt-16 flex h-full w-full flex-col items-center px-10">
    <h1 class="w-full text-2xl">Assigned Beneficiary</h1>
    <div class="m-5 flex w-full flex-col rounded-lg p-5 ring-1 ring-base-200">
      <h1 class="mb-5 text-lg underline">Personal Info</h1>
      <p class="text-">Name: {{ beneficiary.name }}</p>
      <p>Email: {{ beneficiary.email }}</p>
      <p>Status: {{ beneficiary.status }}</p>
      <p>Gender: {{ beneficiary.gender }}</p>
      <hr class="divider" />
      <h1 class="text-lg underline">Therapy Information</h1>
      <p>Preferred communication option: {{ beneficiary.communicationOption }}</p>
      <p>Notes: {{ beneficiary.staffNotes }}</p>
      <section class="mt-10 flex items-center justify-center gap-2 self-end">
        <div class="flex justify-center gap-2 text-2xl">
          <p class="self-center bg-none">Session Number</p>
          <p class="flex items-center justify-center rounded-lg bg-base-200 p-2">
            {{ beneficiary.Sessions }}
          </p>
        </div>
        <div class="flex items-center justify-center rounded-lg bg-base-200">
          <span class="countdown h-full select-none gap-1 p-3 font-mono text-2xl">
            <span style="--value: 1"></span>
            h
            <span style="--value: 00"></span>
            m
            <span style="--value: ${counter}"></span>
            s
          </span>
        </div>
        <button class="pi pi-bell btn" @click="notifyBeneficiary(beneficiary.id)"></button>
        <button class="btn btn-error" onclick="my_modal_3.showModal()">Flag</button>
      </section>
    </div>
    <FlagModal :beneficiary="beneficiary" />
  </div>
</template>

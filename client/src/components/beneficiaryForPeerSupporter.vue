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
})

const beneficiaryStatusBackground = (status: string) => {
  switch (status) {
    case 'Approved':
      return 'badge bg-green-500'
    case 'Flagged':
      return 'badge bg-yellow-500'
    case 'Finished':
      return 'badge bg-slate-100'
    case 'Denied':
      return 'badge bg-red-500'

    default:
      break
  }
}

const notifyBeneficiary = async (chosenBeneficiaryId: number) => {
  toast.info('Notifiying Beneficiary...')
  try {
    const response = await axios.post('/api/notifyBeneficiary', {
      beneficiaryId: chosenBeneficiaryId,
    })
    toast.success('Notified Beneficiary')
  } catch (error) {
    toast.error('Couldnt notify the beneficiary')
  }
}
</script>
<template>
  <div class="flex flex-col">
    <h1 class="text-2xl">Assigned Beneficiary</h1>
    <table class="table flex h-full w-full place-items-center items-center justify-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>

          <th>Session</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ beneficiary.name }}</td>
          <td>{{ beneficiary.email }}</td>
          <td>
            <p :class="[beneficiaryStatusBackground(beneficiary.status), '']">
              {{ beneficiary.status }}
            </p>
          </td>
          <td>{{ beneficiary.Sessions }}</td>
          <td>
            <button class="btn mr-5" @click="notifyBeneficiary(beneficiary.id)">Notify</button>
            <button class="btn btn-error" onclick="my_modal_3.showModal()">Flag</button>
          </td>
        </tr>
      </tbody>
    </table>
    <FlagModal :beneficiary="beneficiary" />
  </div>
</template>

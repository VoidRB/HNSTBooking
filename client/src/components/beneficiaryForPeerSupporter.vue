<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'
import FlagModal from './Modals/FlagModal.vue'
import SessionFeedbackPeerSupporter from './Modals/SessionFeedbackPeerSupporter.vue'

const hour = ref(3600)
const minute = ref(59)
const seconds = ref(60)
const modalState = ref(false)
const toast = useToast()
const beneficiary = ref({
  id: 1,
  name: 'Alice Johnson',
  email: 'alice.johnson@example.com',
  status: 'Approved',
  gender: 'Female',
  sessionNumber: 3,
  assignedPeerSupporter: 'John Doe',
  communicationOption: 'Google Meet',
  staffNotes: '',
})

onMounted(async () => {
  try {
    const response = await axios.get('/beneficiary/:beneficiaryId')
    // beneficiary.value = response.data
  } catch (error) {
    toast.error('Oops, An Error Occurred')
    console.log(error)
  }
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

const startTimer = () => {
  setInterval(() => {
    if (hour.value >= 0) {
      hour.value -= 1
      if (seconds.value === 0) {
        seconds.value = 59
      }
      seconds.value -= 1
    } else {
      modalState.value = true
    }
  }, 1000)

  setInterval(() => {
    if (hour.value >= 0) {
      minute.value -= 1
    } else {
    }
  }, 60000)
}
</script>
<template>
  <div class="flex h-full w-full flex-col items-center px-10">
    <h1 class="w-full text-2xl">Assigned Beneficiary</h1>
    <div class="m-5 flex h-full w-full flex-col rounded-lg p-5 shadow-lg ring-1 ring-base-200">
      <h1 class="mb-5 text-lg underline">Personal Info</h1>
      <p class="text-">Name: {{ beneficiary.name }}</p>
      <p>Email: {{ beneficiary.email }}</p>
      <p>Status: {{ beneficiary.status }}</p>
      <p>Gender: {{ beneficiary.gender }}</p>
      <hr class="divider" />
      <h1 class="text-lg underline">Therapy Information</h1>
      <p>Preferred communication option: {{ beneficiary.communicationOption }}</p>
      <p>Notes: {{ beneficiary.staffNotes }}</p>
      <section
        class="mt-10 flex h-full w-full flex-row items-end justify-end gap-2 md:flex-row md:self-end"
      >
        <div class="flex justify-center gap-2 text-2xl">
          <p
            class="tooltip flex items-center justify-center rounded-lg bg-base-200 p-2 px-4 hover:tooltip-top"
            data-tip="Session Number"
          >
            {{ beneficiary.sessionNumber }}
          </p>
        </div>
        <div class="flex items-center justify-center rounded-lg bg-base-200">
          <button class="btn" v-if="hour === 3600" @click="startTimer()">Start Timer</button>
          <span class="countdown h-full select-none gap-1 p-3 font-mono text-2xl" v-else>
            <span :style="'--value:' + minute + ';'"></span>
            m
            <span :style="'--value:' + seconds + ';'"></span>
            s
          </span>
        </div>
        <button
          class="btn tooltip text-lg hover:tooltip-top"
          data-tip="Notify"
          @click="notifyBeneficiary(beneficiary.id)"
        >
          <i class="pi pi-bell"></i>
        </button>
        <button class="btn btn-error" onclick="my_modal_3.showModal()">Flag</button>
      </section>
    </div>
    <FlagModal id="my_modal_3" :beneficiary="beneficiary" />
    <SessionFeedbackPeerSupporter :beneficiary="beneficiary" :modalOpened="modalState" />
  </div>
</template>

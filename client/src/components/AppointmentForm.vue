<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()
const appointment = reactive({
  beneficiaryEmail: '',
  appointmentDate: '',
  appointmentDuration: 60,
})
const bookAppointment = () => {
  try {
    const response = axios.post('/api/bookAppointment', {
      beneficiaryEmail: appointment.beneficiaryEmail,
      appointmentDate: appointment.appointmentDate,
      appointmentDuration: appointment.appointmentDuration,
    })
    toast.success('Successfully booked')
  } catch (error) {
    toast.error('failed')
    throw error
  }
}
</script>
<template>
  <div class="flex w-full flex-col items-center justify-center gap-5">
    <div class="flex w-full flex-col items-center">
      <label for="Beneficiary">Beneficiary Email</label>
      <input
        type="text"
        v-model="appointment.beneficiaryEmail"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <div class="flex w-full flex-col items-center">
      <label for="Date">Appointment Date</label>
      <input
        type="date"
        v-model="appointment.appointmentDate"
        class="input input-bordered w-full max-w-xs text-center"
      />
    </div>
    <div class="flex w-full flex-col items-center">
      <label for="Beneficiary">Duration (In Mins)</label>
      <input
        type="text"
        placeholder="60"
        disabled
        v-model="appointment.appointmentDuration"
        class="input input-bordered w-full max-w-xs"
      />
    </div>

    <button class="btn" @click="bookAppointment">Book</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()
const appointment = reactive({
  beneficiaryEmail: '',
  beneficiaryName: '',
  appointmentDate: '',
  appointmentOption: '',
  appointmentOptionData: '',
  appointmentDuration: 60,
})
const bookAppointment = () => {
  try {
    const response = axios.post('/api/bookAppointment', {
      beneficiaryEmail: appointment.beneficiaryEmail,
      appointmentDate: appointment.appointmentDate,
      appointmentDuration: appointment.appointmentDuration,
      appointmentOption: appointment.appointmentOption,
      appointmentOptionData: appointment.appointmentOptionData,
    })
    toast.success('Successfully booked')
  } catch (error) {
    toast.error('failed')
    console.log(error)
  }
}
</script>
<template>
  <form
    class="flex w-full flex-col items-center justify-center gap-5"
    @submit.prevent="bookAppointment"
  >
    <div class="flex gap-5">
      <section class="flex flex-col gap-5">
        <div class="flex w-full flex-col items-center">
          <label for="Beneficiary">Beneficiary Email</label>
          <input
            required
            type="email"
            v-model="appointment.beneficiaryEmail"
            placeholder="Email"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="flex w-full flex-col items-center">
          <label for="Beneficiary">Beneficiary Name</label>
          <input
            required
            type="text"
            v-model="appointment.beneficiaryName"
            placeholder="Name"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="flex w-full flex-col items-center">
          <label for="Date">Appointment Date</label>
          <!-- should be reactive with todays date -->
          <input
            required
            min="2025-01-10"
            max="2025-12-31"
            type="date"
            v-model="appointment.appointmentDate"
            class="input input-bordered w-full max-w-xs text-center"
          />
        </div>
      </section>
      <section class="flex flex-col gap-5">
        <div class="flex w-full flex-col items-center">
          <label for="Date">Perferred Communication</label>
          <select
            placeholder="Pick One"
            class="select select-bordered w-full max-w-xs"
            v-model="appointment.appointmentOption"
          >
            <option disabled selected>Pick One</option>
            <option>Telephone</option>
            <option>Web Conferencing</option>
          </select>
        </div>
        <div
          class="flex w-full flex-col items-center"
          v-if="appointment.appointmentOption === 'Telephone'"
        >
          <label for="Date">Telephone Number</label>
          <input
            required
            type="number"
            v-model="appointment.appointmentOptionData"
            class="input input-bordered w-full max-w-xs text-center"
          />
        </div>
        <div
          class="flex w-full flex-col items-center"
          v-else-if="appointment.appointmentOption === 'Web Conferencing'"
        >
          <label for="Date">Perferred Platform</label>
          <select
            placeholder="Pick One"
            class="select select-bordered w-full max-w-xs"
            v-model="appointment.appointmentOption"
          >
            <option disabled selected>Choose a platform</option>
            <option>Google Meet</option>
            <option>Skype</option>
            <option>Zoom</option>
          </select>
        </div>
        <div v-else>
          <label for="Date">&nbsp;</label>
          <select class="btn w-full max-w-xs appearance-none bg-base-100" disabled></select>
        </div>
        <div class="flex w-full flex-col items-center">
          <label for="Beneficiary">Duration (In Mins)</label>
          <input
            required
            type="text"
            placeholder="60"
            disabled
            v-model="appointment.appointmentDuration"
            class="input input-bordered w-full max-w-xs text-center"
          />
        </div>
      </section>
    </div>
    <button class="btn">Book</button>
  </form>
</template>

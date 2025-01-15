<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { countries } from '../../../shared/countryCodes.ts'

const toast = useToast()
const Session = reactive({
  beneficiaryEmail: '',
  beneficiaryName: '',
  SessionDate: '',
  SessionOption: '',
  SessionOptionData: '',
  SessionDuration: 60,
})
const bookSession = () => {
  try {
    const response = axios.post('/api/bookSession', {
      beneficiaryEmail: Session.beneficiaryEmail,
      SessionDate: Session.SessionDate,
      SessionDuration: Session.SessionDuration,
      SessionOption: Session.SessionOption,
      SessionOptionData: Session.SessionOptionData,
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
    class="mt-32 flex w-full flex-col items-center justify-center gap-5"
    @submit.prevent="bookSession"
  >
    <div class="flex gap-5">
      <section class="flex flex-col gap-5">
        <div class="flex w-full flex-col items-center">
          <label for="Beneficiary">Beneficiary Email</label>
          <input
            required
            type="email"
            v-model="Session.beneficiaryEmail"
            placeholder="Email"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="flex w-full flex-col items-center">
          <label for="Beneficiary">Beneficiary Name</label>
          <input
            required
            type="text"
            v-model="Session.beneficiaryName"
            placeholder="Name"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="flex w-full flex-col items-center">
          <label for="Date">Session Date</label>
          <!-- should be reactive with todays date -->
          <input
            required
            min="2025-01-10"
            max="2025-12-31"
            type="date"
            v-model="Session.SessionDate"
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
            v-model="Session.SessionOption"
          >
            <option disabled selected>Pick One</option>
            <option>Telephone</option>
            <option>Web Conferencing</option>
          </select>
        </div>
        <div class="flex w-full flex-col items-center" v-if="Session.SessionOption === 'Telephone'">
          <label for="Date">Telephone Number</label>
          <div class="join">
            <select class="join-item select select-bordered">
              <option v-for="country in countries" :key="country.phone_code">
                <!-- PROBLEM -->
                <span>{{ country.country_code }}</span> {{ country.phone_code }}
              </option>
            </select>
            <input
              required
              type="number"
              v-model="Session.SessionOptionData"
              class="input join-item input-bordered w-full text-center"
            />
          </div>
        </div>
        <div
          class="flex w-full flex-col items-center"
          v-else-if="Session.SessionOption === 'Web Conferencing'"
        >
          <label for="Date">Perferred Platform</label>
          <select
            placeholder="Pick One"
            class="select select-bordered w-full max-w-xs"
            v-model="Session.SessionOptionData"
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
            v-model="Session.SessionDuration"
            class="input input-bordered w-full max-w-xs text-center"
          />
        </div>
      </section>
    </div>
    <button class="btn">Book</button>
  </form>
</template>

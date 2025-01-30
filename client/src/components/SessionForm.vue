<!-- TODO add a drop down for the state and a location for the user to pick from -->
<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { countries } from '../../../shared/countryCodes.ts'
const [todaysDate] = new Date().toISOString().split('T')

const toast = useToast()
const session = reactive({
  beneficiaryEmail: '',
  beneficiaryName: '',
  beneficiaryPhoneCode: '249',
  employnmentStatus: 'Employed',
  SessionDate: '',
  SessionCommOption: 'Telephone',
  SessionCommOptionData: '',
  locationState: 'Diaspora',
  location: '',
  SessionDuration: 60,
})

const bookSession = () => {
  try {
    const response = axios.postForm('/api/bookSession', {
      beneficiaryEmail: session.beneficiaryEmail,
      beneficiaryName: session.beneficiaryName,
      beneficiaryLocation: session.location,
      beneficiaryEmploymentStatus: session.employnmentStatus,
      beneficiaryPhoneCode: session.beneficiaryPhoneCode,
      SessionDate: session.SessionDate,
      SessionDuration: session.SessionDuration,
      SessionCommOption: session.SessionCommOption,
      SessionCommOptionData: session.SessionCommOptionData,
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
      <section class="flex w-1/2 flex-col gap-5">
        <!-- Beneficiary Email -->
        <div class="flex w-full flex-col items-center">
          <label for="Beneficiary">Beneficiary Email</label>
          <input
            required
            type="email"
            v-model="session.beneficiaryEmail"
            placeholder="Email"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <!-- Beneficiary Name -->
        <div class="flex w-full flex-col items-center">
          <label for="Beneficiary">Beneficiary Name</label>
          <input
            required
            type="text"
            v-model="session.beneficiaryName"
            placeholder="Name"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <!-- Employment Status -->
        <div class="flex w-full flex-col items-center">
          <label>Employment Status</label>
          <select
            required
            placeholder="Pick One"
            class="select select-bordered w-full max-w-xs"
            v-model="session.employnmentStatus"
          >
            <option disabled selected>Pick One</option>
            <option>Employed</option>
            <option>Unemployed</option>
            <option>Student</option>
            <option>Retired</option>
            <option>Homemaker</option>
          </select>
        </div>
        <!-- Session Date -->
        <div class="flex w-full flex-col items-center">
          <label>Session Date</label>
          <input
            required
            :min="todaysDate"
            max="2025-12-31"
            type="date"
            v-model="session.SessionDate"
            class="input input-bordered w-full max-w-xs text-center"
          />
        </div>
      </section>
      <section class="flex w-1/2 flex-col gap-5">
        <!-- Perferred Communication -->
        <div class="flex w-full flex-col items-center">
          <label>Perferred Platform</label>
          <select
            required
            placeholder="Pick One"
            class="select select-bordered w-full max-w-xs"
            v-model="session.SessionCommOption"
          >
            <option disabled selected>Pick One</option>
            <option>Telephone</option>
            <option>Web Conferencing</option>
          </select>
        </div>
        <!-- Telephone Option -->
        <div
          class="flex w-full flex-col items-center"
          v-if="session.SessionCommOption === 'Telephone'"
        >
          <div>
            <label class="mr-9">Country</label>
            <label>Telephone Number</label>
          </div>
          <div class="join">
            <select
              v-model="session.beneficiaryPhoneCode"
              class="join-item select select-bordered select-multiple w-20 overflow-hidden text-ellipsis pr-0"
            >
              <option
                v-for="country in countries"
                :value="country.phone_code"
                :key="country.phone_code"
              >
                {{ country.country_en }}
              </option>
            </select>
            <input
              required
              type="number"
              maxlength="10"
              minlength="10"
              v-model="session.SessionCommOptionData"
              class="input join-item input-bordered w-full text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
        </div>
        <!-- Web Conferencing -->
        <div
          class="flex w-full flex-col items-center"
          v-else-if="session.SessionCommOption === 'Web Conferencing'"
        >
          <label>Perferred Platform</label>
          <select
            required
            placeholder="Pick One"
            class="select select-bordered w-full max-w-xs"
            v-model="session.SessionCommOptionData"
          >
            <option disabled selected>Choose a platform</option>
            <option>Google Meet</option>
            <option>WhatsApp</option>
            <option>Telegram</option>
          </select>
        </div>
        <!-- Empty Placeholder -->
        <div v-else>
          <label>&nbsp;</label>
          <select class="btn w-full max-w-xs appearance-none bg-base-100" disabled></select>
        </div>
        <!-- Location -->
        <div class="flex w-full flex-col items-center">
          <div>
            <label class="">Location</label>
          </div>
          <div class="join select-none">
            <select
              v-model="session.locationState"
              class="join-item select select-bordered select-multiple w-20 overflow-hidden text-ellipsis"
            >
              <option>Internally displaced</option>
              <option>Externally displaced</option>
              <option>Diaspora</option>
            </select>
            <input
              required
              type="text"
              v-model="session.location"
              class="input join-item input-bordered w-full text-center"
            />
          </div>
        </div>
        <!-- Duration -->
        <div class="flex w-full flex-col items-center">
          <label for="Beneficiary">Duration (In Mins)</label>
          <input
            required
            type="text"
            placeholder="60"
            disabled
            v-model="session.SessionDuration"
            class="input input-bordered w-full max-w-xs text-center"
          />
        </div>
      </section>
    </div>
    <button class="btn">Book</button>
  </form>
</template>

<script setup lang="ts">
import DuringAssessment from '@/components/Assessments/DuringAssessment.vue'
import PostAssessment from '@/components/Assessments/PostAssessment.vue'
import PreAssessment from '@/components/Assessments/PreAssessment.vue'
import StaticNavBar from '@/components/NavBars/StaticNavBar.vue'
import { ref } from 'vue'

const beneficiaries = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    status: 'Active',
    appointments: '3',
    assignedPS: 'John Doe',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    status: 'Pending',
    appointments: '1',
    assignedPS: 'Jane Roe',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    status: 'Inactive',
    appointments: '0',
    assignedPS: 'Chris Martin',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    status: 'Active',
    appointments: '5',
    assignedPS: 'Alex King',
  },
]
const [todaysDate] = new Date().toISOString().split('T')

const chosenAssessmentType = ref('')
const chosenBeneficiary = ref()
</script>
<template>
  <div class="flex h-full w-full flex-col gap-10">
    <StaticNavBar />
    <section class="flex w-full gap-10 px-10">
      <div class="flex w-1/3 flex-col">
        <label class="label-text">Choose a Beneficiary</label>
        <select v-model="chosenBeneficiary" class="select select-bordered w-full max-w-xs">
          <option disabled selected>Choose the beneficiary</option>
          <option v-for="beneficiary in beneficiaries" :key="beneficiary.id">
            {{ beneficiary.name }}
          </option>
        </select>
      </div>

      <div class="flex w-1/3 flex-col">
        <label class="label-text">Assessment Type</label>
        <select v-model="chosenAssessmentType" class="select select-bordered w-full max-w-xs">
          <option disabled selected>Assessment Type</option>
          <option>Pre-Appointment</option>
          <option>During-Appointment</option>
          <option>Post-Appointment</option>
        </select>
      </div>

      <div class="flex w-1/3 flex-col">
        <label class="label-text">Date</label>
        <button disabled class="input input-bordered w-full max-w-xs text-center">
          {{ todaysDate }}
        </button>
      </div>
    </section>
    <section>
      <article v-if="chosenAssessmentType === 'Pre-Appointment'">
        <PreAssessment :beneficiary="chosenBeneficiary" :chosenAssessmentDate="todaysDate" />
      </article>
      <article v-else-if="chosenAssessmentType === 'During-Appointment'">
        <DuringAssessment :beneficiary="chosenBeneficiary" :chosenAssessmentDate="todaysDate" />
      </article>
      <article v-else-if="chosenAssessmentType === 'Post-Appointment'">
        <PostAssessment :beneficiary="chosenBeneficiary" :chosenAssessmentDate="todaysDate" />
      </article>
      <article v-else class="ml-2">
        Please pick a <span class="font-bold">Beneficiary</span> and
        <span class="font-bold">Assessment Type</span> to Begin
      </article>
    </section>
  </div>
</template>

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

const assessmentType = ref('Assessment Type')
const chosenBeneficiary = ref('Choose the beneficiary')
</script>
<template>
  <div class="flex h-full w-full flex-col gap-10">
    <StaticNavBar />
    <section class="flex gap-10 px-10">
      <select v-model="chosenBeneficiary" class="select select-bordered w-full max-w-xs">
        <option disabled selected>Choose the beneficiary</option>
        <option v-for="beneficiary in beneficiaries" :key="beneficiary.id">
          {{ beneficiary.name }}
        </option></select
      ><select v-model="assessmentType" class="select select-bordered w-full max-w-xs">
        <option disabled selected>Assessment Type</option>
        <option>Pre-Appointment</option>
        <option>During-Appointment</option>
        <option>Post-Appointment</option>
      </select>
    </section>
    <section class="mx-5">
      <article v-if="assessmentType === 'Pre-Appointment'">
        <PreAssessment :beneficiary="chosenBeneficiary" />
      </article>
      <article v-else-if="assessmentType === 'During-Appointment'">
        <DuringAssessment :beneficiary="chosenBeneficiary" />
      </article>
      <article v-else-if="assessmentType === 'Post-Appointment'">
        <PostAssessment :beneficiary="chosenBeneficiary" />
      </article>
      <article v-else>
        Please pick a <span class="font-bold">Beneficiary</span> and
        <span class="font-bold">Assessment Type</span> to Begin
      </article>
    </section>
  </div>
</template>

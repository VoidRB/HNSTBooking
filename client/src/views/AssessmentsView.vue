<script setup lang="ts">
import DuringAssessment from '@/components/Assessments/DuringAssessment.vue'
import PostAssessment from '@/components/Assessments/PostAssessment.vue'
import ScreeningAssessment from '@/components/Assessments/ScreeningAssessment.vue'
import { ref } from 'vue'

const beneficiaries = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    status: 'Active',
    Sessions: '3',
    assignedPS: 'John Doe',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    status: 'Pending',
    Sessions: '1',
    assignedPS: 'Jane Roe',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    status: 'Inactive',
    Sessions: '0',
    assignedPS: 'Chris Martin',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    status: 'Active',
    Sessions: '5',
    assignedPS: 'Alex King',
  },
]
const [todaysDate] = new Date().toISOString().split('T')

const chosenAssessmentType = ref('')
const chosenBeneficiary = ref()
const chosenSessionNumber = ref('1')
</script>
<template>
  <div class="mt-16 flex h-full w-full flex-col gap-10">
    <section class="flex w-full gap-10 px-10">
      <div class="flex w-1/3 flex-col">
        <label class="label-text">Choose a Beneficiary</label>
        <select v-model="chosenBeneficiary" class="select select-bordered w-full max-w-xs">
          <option disabled selected>Choose the beneficiary</option>
          <option :value="beneficiary" v-for="beneficiary in beneficiaries" :key="beneficiary.id">
            {{ beneficiary.name }}
          </option>
        </select>
      </div>

      <div class="join flex w-1/3 flex-col">
        <label class="join-item label-text">Assessment Type</label>
        <div class="join">
          <select
            v-model="chosenAssessmentType"
            class="join-item select select-bordered join-horizontal w-full max-w-xs text-ellipsis text-nowrap"
          >
            <option disabled selected>Assessment Type</option>
            <option>Screening</option>
            <option>During-Session</option>
            <option>Post-Session</option>
          </select>
          <select
            v-if="chosenAssessmentType === 'During-Session'"
            v-model="chosenSessionNumber"
            class="join-item select select-bordered w-16"
          >
            <option disabled selected>Session #</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>

      <div class="flex w-1/3 flex-col">
        <label class="label-text">Date</label>
        <button disabled class="input input-bordered w-full max-w-xs text-center">
          {{ todaysDate }}
        </button>
      </div>
    </section>
    <section>
      <article v-if="chosenAssessmentType === 'During-Session'">
        <DuringAssessment
          :beneficiary="chosenBeneficiary"
          :chosenAssessmentDate="todaysDate"
          :sessionNumber="chosenSessionNumber"
        />
      </article>
      <article v-else-if="chosenAssessmentType === 'Post-Session'">
        <PostAssessment :beneficiary="chosenBeneficiary" :chosenAssessmentDate="todaysDate" />
      </article>
      <article v-else-if="chosenAssessmentType === 'Screening'">
        <ScreeningAssessment :beneficiary="chosenBeneficiary" :chosenAssessmentDate="todaysDate" />
      </article>
      <article v-else class="ml-2">
        Please pick a <span class="font-bold">Beneficiary</span> and
        <span class="font-bold">Assessment Type</span> to Begin
      </article>
    </section>
  </div>
</template>

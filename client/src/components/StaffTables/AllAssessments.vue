<script setup lang="ts">
import type assessmentType from '@/interfaces/assessment'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import AssessmentModal from '../Modals/AssessmentModal.vue'

const assessments = [
  {
    id: 1,
    type: 'Counseling',
    assignedPeerSupporter: 'Sarah Al-Rawi',
    beneficiary: 'Ahmed Bin Suleiman',
    date: '2025-01-15',
  },
  {
    id: 2,
    type: 'Tutoring',
    assignedPeerSupporter: 'Yasmin Al-Nahdi',
    beneficiary: 'Faisal Al-Qahtani',
    date: '2025-01-16',
  },
  {
    id: 3,
    type: 'Mentoring',
    assignedPeerSupporter: 'Khalid Al-Farsi',
    beneficiary: 'Hassan Al-Ahmad',
    date: '2025-01-17',
  },
  {
    id: 4,
    type: 'Coaching',
    assignedPeerSupporter: 'Mariam Al-Hajri',
    beneficiary: 'Amina Al-Khattab',
    date: '2025-01-18',
  },
  {
    id: 5,
    type: 'Consultation',
    assignedPeerSupporter: 'Omar Al-Shehri',
    beneficiary: 'Noura Al-Mutairi',
    date: '2025-01-19',
  },
  {
    id: 6,
    type: 'Workshop',
    assignedPeerSupporter: 'Fatimah Al-Dosari',
    beneficiary: 'Sultan Al-Balawi',
    date: '2025-01-20',
  },
]

const assessments2 = ref([])
const assessmentToModal = ref<assessmentType>()

onMounted(async () => {
  try {
    const response = await axios.get('/api/all-assessment')
    assessments2.value = response.data
  } catch (error) {
    //will fix the error handling
    console.log(error)
  }
})

const setAssessment = (assessment: assessmentType) => {
  console.log(`Modal opened`)
  assessmentToModal.value = assessment
}

const refreshTable = async () => {
  console.log(`Refreshing Table`)
  assessments2.value = []
  try {
    const response = await axios.get('/api/all-beneficiaries')
    assessments2.value = response.data
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Assessments</h1>
      <button class="btn rounded-full" @click="refreshTable()">
        <i class="pi pi-refresh"></i>
      </button>
    </section>

    <div class="h-60 overflow-y-scroll scroll-smooth">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <th></th>
            <th>Beneficiary Name</th>
            <th>Type</th>
            <th>Assigned Peer Supporter</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="assessment in assessments"
            :key="assessment.id"
            class="hover cursor-pointer"
            onclick="my_modal_4.showModal()"
            @click="setAssessment(assessment)"
          >
            <th class="w-0">{{ assessment.id }}</th>
            <td>{{ assessment.beneficiary }}</td>
            <td>{{ assessment.type }}</td>
            <td>{{ assessment.assignedPeerSupporter }}</td>
            <td>{{ assessment.date }}</td>
          </tr>
        </tbody>
      </table>
      <AssessmentModal id="my_modal_4" :assessment="assessmentToModal" />
    </div>
  </section>
</template>

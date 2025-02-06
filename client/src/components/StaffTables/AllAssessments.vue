<script setup lang="ts">
import type assessmentType from '@/interfaces/assessment'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import AssessmentModal from '../Modals/AssessmentModal.vue'
//placeholder data
const assessments = ref([
  {
    id: 1,
    type: 'Pre-Session',
    assignedPeerSupporter: 'Sarah Al-Rawi',
    beneficiary: 'Ahmed Bin Suleiman',
    date: '2025-01-15',
    likertScore: 5.4,
  },
  {
    id: 2,
    type: 'During-Session-1',
    assignedPeerSupporter: 'Yasmin Al-Nahdi',
    beneficiary: 'Faisal Al-Qahtani',
    date: '2025-01-16',
    likertScore: 3.2,
  },
  {
    id: 3,
    type: 'During-Session-5',
    assignedPeerSupporter: 'Khalid Al-Farsi',
    beneficiary: 'Hassan Al-Ahmad',
    date: '2025-01-17',
    likertScore: 7.1,
  },
  {
    id: 4,
    type: 'During-Session-3',
    assignedPeerSupporter: 'Mariam Al-Hajri',
    beneficiary: 'Amina Al-Khattab',
    date: '2025-01-18',
    likertScore: 9,
  },
  {
    id: 5,
    type: 'Pre-Session',
    assignedPeerSupporter: 'Omar Al-Shehri',
    beneficiary: 'Noura Al-Mutairi',
    date: '2025-01-19',
    likertScore: 10,
  },
  {
    id: 6,
    type: 'Post-Session',
    assignedPeerSupporter: 'Fatimah Al-Dosari',
    beneficiary: 'Sultan Al-Balawi',
    date: '2025-01-20',
    likertScore: 2.8,
  },
])
const assessmentToModal = ref<assessmentType>()

onMounted(async () => {
  try {
    const response = await axios.get('/api/assessments/all')
    assessments.value = response.data
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
  assessments.value = []
  try {
    const response = await axios.get('/api/all-beneficiaries')
    assessments.value = response.data
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

    <div class="overflow-y-scroll scroll-smooth">
      <table class="table table-pin-rows h-1/2">
        <thead>
          <tr>
            <th></th>
            <th>Beneficiary Name</th>
            <th>Type</th>
            <th>Assigned Peer Supporter</th>
            <th>Date</th>
            <th>Likert Score</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="assessment in assessments"
            :key="assessment.id"
            class="hover cursor-pointer"
            onclick="my_modal_1.showModal()"
            @click="setAssessment(assessment)"
          >
            <th class="w-0">{{ assessment.id }}</th>
            <td>{{ assessment.beneficiary }}</td>
            <td>{{ assessment.type }}</td>
            <td>{{ assessment.assignedPeerSupporter }}</td>
            <td>{{ assessment.date }}</td>
            <td>{{ assessment.likertScore }}</td>
          </tr>
        </tbody>
      </table>
      <AssessmentModal id="my_modal_4" :assessment="assessmentToModal" />
    </div>
  </section>
</template>

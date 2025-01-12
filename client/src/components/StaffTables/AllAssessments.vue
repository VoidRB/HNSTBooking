<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const appointments = [
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

const appointments2 = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/all-appointments')
    appointments2.value = response.data
  } catch (error) {
    //will fix the error handling
    console.log(error)
  }
})
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Assessments</h1>
      <button class="btn rounded-full"><i class="pi pi-refresh"></i></button>
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
            v-for="appointment in appointments"
            :key="appointment.id"
            class="hover cursor-pointer"
          >
            <th class="w-0">{{ appointment.id }}</th>
            <td>{{ appointment.beneficiary }}</td>
            <td>{{ appointment.type }}</td>
            <td>{{ appointment.assignedPeerSupporter }}</td>
            <td>{{ appointment.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

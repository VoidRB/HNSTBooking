<script setup lang="ts">
import type appointmentType from '@/interfaces/appointment'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import AppointmentModal from '../Modals/AppointmentModal.vue'

const appointments = [
  {
    id: 1,
    name: 'Alice Johnson',
    stage: 'Finished',
    assignedPeerSupporter: 'John Doe',
  },
  {
    id: 2,
    name: 'Bob Smith',
    stage: 'In Process',
    assignedPeerSupporter: 'Jane Roe',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    stage: 'Not Started',
    assignedPeerSupporter: 'Chris Martin',
  },
  {
    id: 4,
    name: 'Diana Prince',
    stage: 'Finished',
    assignedPeerSupporter: 'Alex King',
  },
  {
    id: 1,
    name: 'Alice Johnson',
    stage: 'Finished',
    assignedPeerSupporter: 'John Doe',
  },
  {
    id: 2,
    name: 'Bob Smith',
    stage: 'In Process',
    assignedPeerSupporter: 'Jane Roe',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    stage: 'Not Started',
    assignedPeerSupporter: 'Chris Martin',
  },
  {
    id: 4,
    name: 'Diana Prince',
    stage: 'Finished',
    assignedPeerSupporter: 'Alex King',
  },
]
const appointments2 = ref([])
const appointmentToModal = ref<appointmentType>()

onMounted(async () => {
  try {
    const response = await axios.get('/api/all-appointments')
    appointments2.value = response.data
  } catch (error) {
    //will fix the error handling
    console.log(error)
  }
})

const setAppointment = (appointment: appointmentType) => {
  console.log(`modal opened`)
  appointmentToModal.value = appointment
}

const appointmentStatusBackground = (stage: string) => {
  switch (stage) {
    case 'Finished':
      return 'badge bg-green-500'
    case 'Not Started':
      return 'badge bg-red-500'
    case 'In Process':
      return 'badge bg-yellow-500'

    default:
      return 'badge'
  }
}

const refreshTable = async () => {
  console.log(`Refreshing Table`)
  appointments2.value = []
  try {
    const response = await axios.get('/api/all-beneficiaries')
    appointments2.value = response.data
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Appointments</h1>
      <button class="btn rounded-full" @click="refreshTable()">
        <i class="pi pi-refresh"></i>
      </button>
    </section>

    <div class="h-60 overflow-y-scroll scroll-smooth">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Stage</th>
            <th>Assigned Peer Supporter</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="appointment in appointments"
            :key="appointment.id"
            class="hover cursor-pointer"
            onclick="my_modal_3.showModal()"
            @click="setAppointment(appointment)"
          >
            <th class="w-0">{{ appointment.id }}</th>
            <td>{{ appointment.name }}</td>
            <td>
              <p :class="appointmentStatusBackground(appointment.stage)">{{ appointment.stage }}</p>
            </td>
            <td>{{ appointment.assignedPeerSupporter }}</td>
          </tr>
        </tbody>
      </table>
      <AppointmentModal id="my_modal_3" :appointment="appointmentToModal" />
    </div>
  </section>
</template>

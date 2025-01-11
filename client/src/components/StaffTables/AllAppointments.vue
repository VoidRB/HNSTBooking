<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const appointments = [
  {
    id: 1,
    name: 'Alice Johnson',
    stage: 'Active',
    assignedPS: 'John Doe',
  },
  {
    id: 2,
    name: 'Bob Smith',
    stage: 'Pending',
    assignedPS: 'Jane Roe',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    stage: 'Inactive',
    assignedPS: 'Chris Martin',
  },
  {
    id: 4,
    name: 'Diana Prince',
    stage: 'Active',
    assignedPS: 'Alex King',
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
      <h1>All Appointments</h1>
      <button class="btn rounded-full"><i class="pi pi-refresh"></i></button>
    </section>

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Stage</th>
            <th>Assigned Peer Supporter</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appointment in appointments" :key="appointment.id">
            <th>{{ appointment.id }}</th>
            <td>{{ appointment.name }}</td>
            <td>{{ appointment.stage }}</td>
            <td>{{ appointment.assignedPS }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

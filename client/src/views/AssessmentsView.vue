<script setup lang="ts">
import StaticNavBar from '@/components/NavBars/StaticNavBar.vue'

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
</script>
<template>
  <div class="flex h-full w-full flex-col gap-10">
    <StaticNavBar />
    <section class="flex gap-10 px-10">
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Choose the beneficiary</option>
        <option v-for="beneficiary in beneficiaries" :key="beneficiary.id">
          {{ beneficiary.name }}
        </option></select
      ><select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Assessment Type</option>
        <option>Pre-Appointment</option>
        <option>During-Appointment</option>
        <option>Post-Appointment</option>
      </select>
    </section>
    <section></section>
  </div>
</template>

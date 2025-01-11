<script setup lang="ts">
const beneficiaries = [
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
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Appointments</h1>
      <button class="btn rounded-full"><i class="pi pi-refresh"></i></button>
    </section>

    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Stage</th>
            <th>Assigned Peer Supporter</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="beneficiary in beneficiaries" :key="beneficiary.id">
            <th>{{ beneficiary.id }}</th>
            <td>{{ beneficiary.name }}</td>
            <td>{{ beneficiary.stage }}</td>
            <td>{{ beneficiary.assignedPS }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

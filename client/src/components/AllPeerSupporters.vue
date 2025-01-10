<script setup lang="ts">
const peerSupporters = [
  {
    id: 1,
    name: 'Eve Adams',
    email: 'eve.adams@example.com',
    status: 'Inactive',
    appointments: '2',
    assignedPS: 'Sam Wilson',
  },
  {
    id: 2,
    name: 'Frank Johnson',
    email: 'frank.johnson@example.com',
    status: 'Active',
    appointments: '4',
    assignedPS: 'Lucy Liu',
  },
  {
    id: 3,
    name: 'Grace Kelly',
    email: 'grace.kelly@example.com',
    status: 'Pending',
    appointments: '3',
    assignedPS: 'David Lee',
  },
  {
    id: 4,
    name: 'Hank Moody',
    email: 'hank.moody@example.com',
    status: 'Inactive',
    appointments: '1',
    assignedPS: 'Nina Ricci',
  },
]
</script>
<template>
  <section>
    <section class="w-full place-items-start px-10 text-2xl">All Peer Supporters</section>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Appointments</th>
            <th>Assigned beneficiaries</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="peerSupporter in peerSupporters" :key="peerSupporter.id">
            <th>{{ peerSupporter.id }}</th>
            <td>{{ peerSupporter.name }}</td>
            <td class="text-ellipsis text-wrap">{{ peerSupporter.email }}</td>
            <td>{{ peerSupporter.status }}</td>
            <td>{{ peerSupporter.appointments }}</td>
            <td>{{ peerSupporter.assignedPS }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

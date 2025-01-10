<script setup lang="ts">
const users = [
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
  <section>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Appointments</th>
            <th>Assigned PS</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="user in users" :key="user.id">
            <th>{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.status }}</td>
            <td>{{ user.appointments }}</td>
            <td>{{ user.assignedPS }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

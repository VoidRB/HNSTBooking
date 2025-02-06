<script setup lang="ts">
import { ref } from 'vue'
import type UserType from '@/interfaces/user'
import AdminUserModal from '../Modals/AdminUserModal.vue'
const userToModal = ref<UserType>()
const allUsers = ref([
  {
    id: 0,
    name: 'user 0',
    role: 'Beneficiary',
  },
  {
    id: 1,
    name: 'user 1',
    role: 'Coordinator',
  },
  {
    id: 2,
    name: 'user 2',
    role: 'Peer Supporter',
  },
  {
    id: 3,
    name: 'user 3',
    role: 'Auditor',
  },
  {
    id: 4,
    name: 'user 4',
    role: 'Admin',
  },
  {
    id: 5,
    name: 'user 5',
    role: 'Guest',
  },
])

const setUser = (user: UserType) => {
  userToModal.value = user
}
</script>
<template>
  <section class="mt-16">
    <h1 class="px-10 text-2xl">All Users</h1>
    <div class="h-60 overflow-y-scroll scroll-smooth">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in allUsers"
            class="hover cursor-pointer"
            @click="setUser(user)"
            onclick="my_modal_7.showModal()"
            :key="user.id"
          >
            <th>{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
      <AdminUserModal id="my_modal_7" :user="userToModal" />
    </div>
  </section>
</template>

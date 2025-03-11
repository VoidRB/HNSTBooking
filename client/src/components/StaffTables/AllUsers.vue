<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type UserType from '@/interfaces/user'
import AdminUserModal from '../Modals/AdminUserModal.vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
const userToModal = ref<UserType>()
const toast = useToast()
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

onMounted(async () => {
  try {
    const response = await axios.get('api/users/all')
    allUsers.value = response.data
  } catch (error) {
    toast.error('There was an error fetching the users, please try again later.')
  }
})

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

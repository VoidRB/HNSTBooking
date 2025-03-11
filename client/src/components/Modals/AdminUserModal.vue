<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import type UserType from '../../interfaces/user'
import { useToast } from 'vue-toastification'
const props = defineProps<{ user: UserType | undefined }>()

const toast = useToast()
const newRole = ref('')

const updateUser = () => {
  try {
    const response = axios.put('/api/updateUser', {})
    toast.success('Successfully the updated User')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}
</script>
<template>
  <dialog id="my_modal_7" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">User</h3>
      <div class="mt-4 grid grid-cols-2 grid-rows-3">
        <p class="col-start-1 row-start-1">User ID :</p>
        <p class="col-start-2 row-start-1">{{ props.user?.id }}</p>
        <p class="col-start-1 row-start-2">Username :</p>
        <p class="col-start-2 row-start-2">{{ props.user?.name }}</p>
        <p class="col-start-1 row-start-3">User Role :</p>
        <select
          class="select select-bordered select-sm col-start-2 row-start-3 w-32 max-w-xs"
          v-model="newRole"
        >
          <option disabled selected>Role</option>
          <option>Beneficiary</option>
          <option>Coordinator</option>
          <option>Peer Supporter</option>
          <option>Auditor</option>
          <option>Admin</option>
        </select>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updateUser()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

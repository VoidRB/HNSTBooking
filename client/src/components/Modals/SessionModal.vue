<script setup lang="ts">
import axios from 'axios'
import type sessionType from '../../interfaces/session'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const props = defineProps<{ session: sessionType | undefined }>()

const toast = useToast()

const updateSession = () => {
  try {
    const response = axios.put('/api/updateSession', {})
    toast.success('Successfully the updated session')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}
</script>
<template>
  <dialog id="my_modal_6" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Session</h3>
      <p class="pt-4">{{ props.session?.id }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updateSession()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import axios from 'axios'
import type appointmentType from '../../interfaces/appointment'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const props = defineProps<{ appointment: appointmentType | undefined }>()

const toast = useToast()

const updateAppointment = () => {
  try {
    const response = axios.put('/api/updateAppointment', {})
    toast.success('Successfully updated appointment')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}
</script>
<template>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Appointment</h3>
      <p class="pt-4">{{ props.appointment?.id }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updateAppointment()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

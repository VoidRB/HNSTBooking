<script setup lang="ts">
import axios from 'axios'
import type assessmentType from '../../interfaces/assessment'
import { useToast } from 'vue-toastification'
const props = defineProps<{ assessment: assessmentType | undefined }>()

const toast = useToast()

const updateAssessment = () => {
  try {
    const response = axios.put('/api/updateBeneficiary', {})
    toast.success('Successfully updated the assessment')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}
</script>
<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Assessment</h3>
      <p class="pt-4">{{ props.assessment?.id }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updateAssessment()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

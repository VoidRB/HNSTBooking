<script setup lang="ts">
import axios from 'axios'
import type beneficiaryObject from '../interfaces/beneficiary'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const props = defineProps<{ beneficiary: beneficiaryObject | undefined }>()
const assignedPeerSupporter = ref('')
const beneficiaryStatus = ref('')
const toast = useToast()

const updateBeneficiary = () => {
  try {
    const response = axios.put('/api/updateBeneficiary', {
      beneficiaryId: props.beneficiary?.id,
      assignedPeerSupporter: assignedPeerSupporter.value,
      beneficiaryStatus: beneficiaryStatus.value,
    })
    toast.success('Successfully the updated beneficiary')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}
</script>
<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Beneficiary</h3>
      <p class="pt-4">Name : {{ props.beneficiary?.name }}</p>
      <p class="pt-4">Email : {{ props.beneficiary?.email }}</p>
      <p class="pt-4">Gender : {{ props.beneficiary?.gender }}</p>
      <p class="pt-4">
        Status :&nbsp;
        <select class="select select-bordered select-sm max-w-xs" v-model="beneficiaryStatus">
          <option disabled selected>Status</option>
          <option>Approved</option>
          <option>Flagged</option>
          <option>Denied</option>
        </select>
      </p>
      <p class="pt-4">
        Assigned Peer Supporter :&nbsp;
        <select class="select select-bordered select-sm max-w-xs" v-model="assignedPeerSupporter">
          <option disabled selected>Peer Supporter</option>
          <!-- need the list of the peer supporters -->
          <option>PS 1</option>
          <option>PS 2</option>
          <option>PS 3</option>
        </select>
      </p>
      <p class="pt-4">Communication : {{ props.beneficiary?.communicationOption }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updateBeneficiary()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import axios from 'axios'
import type peerSupporterType from '@/interfaces/peerSupporter'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const props = defineProps<{ peerSupporter: peerSupporterType | undefined }>()
const assignedBeneficiary = ref()
const peerSupporterStatus = ref()
const toast = useToast()

const updatePeerSupporter = () => {
  try {
    const response = axios.put('/api/updatePeerSupporter', {
      peerSupporterId: props.peerSupporter?.id,
      assignedPeerSupporter: assignedBeneficiary.value,
      peerSupporterStatus: peerSupporterStatus.value,
    })
    toast.success('Successfully updated the peer supporter')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}
</script>
<template>
  <dialog id="my_modal_4" class="modal">
    <div class="modal-box">
      <h3 class="text-xl font-bold underline">Peer Supporter</h3>
      <div class="mt-4 grid grid-cols-2 grid-rows-5 gap-2">
        <p class="col-start-1 row-start-1 select-none font-bold">Name :</p>
        <p class="col-start-1 row-start-2 select-none font-bold">Email :</p>
        <p class="col-start-2 row-start-1">{{ props.peerSupporter?.name }}</p>
        <p class="col-start-2 row-start-2">{{ props.peerSupporter?.email }}</p>
        <p class="col-start-1 row-start-3 select-none font-bold">Status :</p>
        <p class="col-start-2 row-start-3">
          <select
            class="select select-bordered select-sm w-32 max-w-xs"
            v-model="peerSupporterStatus"
          >
            <option disabled selected>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </p>
        <p class="col-start-1 row-start-4 select-none font-bold">Sessions :</p>
        <p class="col-start-2 row-start-4">{{ props.peerSupporter?.Sessions }}</p>
        <p class="col-start-1 row-start-5 select-none font-bold">Assigned Beneficiary :</p>
        <p class="col-start-2 row-start-5">
          <select
            class="select select-bordered select-sm w-32 max-w-xs"
            v-model="assignedBeneficiary"
          >
            <option disabled selected>Beneficiary</option>
            <!-- need the list of the Beneficiary -->
            <option>B 1</option>
            <option>B 2</option>
            <option>B 3</option>
          </select>
        </p>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updatePeerSupporter()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

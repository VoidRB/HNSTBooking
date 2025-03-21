<script setup lang="ts">
import axios from 'axios'
import type beneficiaryObject from '../../interfaces/beneficiary'
import { onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'
import type peerSupporterType from '@/interfaces/peerSupporter'
const props = defineProps<{ beneficiary: beneficiaryObject | undefined }>()
const assignedPeerSupporter = ref('')
const beneficiaryStatus = ref('')
const toast = useToast()
const allPeerSupporters = ref<Array<peerSupporterType>>()

const updateBeneficiary = () => {
  try {
    const response = axios.put('/api/updateBeneficiary', {
      beneficiaryId: props.beneficiary?.id,
      assignedPeerSupporter: assignedPeerSupporter.value,
      beneficiaryStatus: beneficiaryStatus.value,
    })
    toast.success('Successfully updated beneficiary')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('api/peerSupporter/all')
    allPeerSupporters.value = response.data
  } catch (error) {
    toast.error('There was an error fetching the peer supporters, please try again later')
  }
})
</script>
<template>
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box">
      <h3 class="text-xl font-bold underline">Beneficiary</h3>
      <div class="mt-4 grid grid-cols-2 grid-rows-6">
        <p class="col-start-1 row-start-1 select-none font-bold">Name :</p>
        <p class="col-start-1 row-start-2 select-none font-bold">Email :</p>
        <p class="col-start-1 row-start-3 select-none font-bold">Gender :</p>
        <p class="col-start-2 row-start-1">{{ props.beneficiary?.name }}</p>
        <p class="col-start-2 row-start-2">{{ props.beneficiary?.email }}</p>
        <p class="col-start-2 row-start-3">{{ props.beneficiary?.gender }}</p>
        <p class="col-start-1 row-start-4 select-none font-bold">Status :&nbsp;</p>
        <p class="col-start-2 row-start-4">
          <select
            class="select select-bordered select-sm col-start-2 row-start-4 w-32 max-w-xs"
            v-model="beneficiaryStatus"
          >
            <option disabled selected>Status</option>
            <option>Approved</option>
            <option>Flagged</option>
            <option>Finished</option>
            <option>Denied</option>
          </select>
        </p>
        <p class="col-start-1 row-start-5 select-none font-bold">Peer Supporter :</p>
        <p class="">
          <select
            class="select select-bordered select-sm col-start-2 row-start-5 w-32 max-w-xs"
            v-model="assignedPeerSupporter"
          >
            <option disabled selected>Peer Supporter</option>
            <option v-for="peerSupporter in allPeerSupporters" :key="peerSupporter.id">
              {{ peerSupporter.name }}
            </option>
          </select>
        </p>
        <p class="col-start-1 row-start-6 select-none font-bold">
          Preferred option of Communication :
        </p>
        <p class="col-start-2 row-start-6">{{ props.beneficiary?.communicationOption }}</p>
        <p class="col-start-1 row-start-7 select-none self-center font-bold">Staff Notes :</p>
        <textarea class="textarea textarea-bordered col-start-2 row-start-7 resize-none"></textarea>
      </div>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updateBeneficiary()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

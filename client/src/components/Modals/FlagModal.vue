<script setup lang="ts">
import axios from 'axios'
import type beneficiaryType from '@/interfaces/beneficiary'
import { ref } from 'vue'
import decode from 'jwt-decode'

const props = defineProps<{ beneficiary: beneficiaryType }>()
const reasonForFlagging = ref('')
// const { payload } = decode(document.cookie)

const updatePeerSupporter = () => {
  try {
    const response = axios.post('/api/flagBeneficiary', {
      reasonForFlagging: reasonForFlagging.value,
      // peerSupporterResponsible: payload.userId,
    })
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <h3 class="text-xl font-bold underline">Flag Beneficiary</h3>
      <div class="mt-4 grid grid-cols-2 grid-rows-3 gap-2">
        <p class="col-start-1 row-start-1 select-none font-bold">Name:</p>
        <p class="col-start-2 row-start-1">{{ props.beneficiary.name }}</p>
        <p class="col-start-1 row-start-2 select-none font-bold">Email:</p>
        <p class="col-start-2 row-start-2">{{ props.beneficiary.email }}</p>
        <p class="col-start-1 row-start-3 select-none font-bold">Gender:</p>
        <p class="col-start-2 row-start-3">{{ props.beneficiary.gender }}</p>
        <p class="col-start-1 row-start-4 select-none font-bold">Reason for flagging:</p>
        <textarea
          v-model="reasonForFlagging"
          class="textarea textarea-bordered col-start-2 row-start-4 resize-none"
        ></textarea>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updatePeerSupporter()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

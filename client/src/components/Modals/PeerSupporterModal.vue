<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import type peerSupporterType from '@/interfaces/peerSupporter'
const props = defineProps<{ peerSupporter: peerSupporterType | undefined }>()

const toast = useToast()

const updatePeerSupporter = () => {
  try {
    const response = axios.put('/api/updatePeerSupporter', {})
    toast.success('Successfully updated Peer Supporter')
  } catch (error) {
    toast.error('There was an error.')
    console.log(error)
  }
}
</script>
<template>
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Peer Supporter</h3>
      <p class="pt-4">{{ props.peerSupporter?.id }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="updatePeerSupporter()">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

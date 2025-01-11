<script setup lang="ts">
import type beneficiaryObject from '../interfaces/beneficiary'
const props = defineProps<{ beneficiary: beneficiaryObject | undefined }>()
</script>
<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Beneficiary</h3>
      <p class="pt-4">Name : {{ props.beneficiary?.name }}</p>
      <p class="pt-4">Email : {{ props.beneficiary?.email }}</p>
      <p class="pt-4">
        Status :
        <select class="select select-bordered select-sm max-w-xs">
          <option disabled selected>Status</option>
          <option>Approved</option>
          <option>Flagged</option>
          <option>Denied</option>
        </select>
      </p>
      <p class="pt-4">
        Assigned Peer Supporter :
        <select class="select select-bordered select-sm max-w-xs">
          <option disabled selected>Peer Supporter</option>
          <!-- need the list of the peer supporters -->
          <option>PS 1</option>
          <option>PS 2</option>
          <option>PS 3</option>
        </select>
      </p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Submit & Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

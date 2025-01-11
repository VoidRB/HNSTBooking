<script setup lang="ts">
import type beneficiaryObject from '../interfaces/beneficiary.ts'
const props = defineProps<{ beneficiary: beneficiaryObject }>()
</script>
<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Beneficiary</h3>
      <p class="pt-4">Name : {{ props.beneficiary.name }}</p>
      <p class="pt-4">Email : {{ props.beneficiary.email }}</p>
      <p class="pt-4">Status : {{ props.beneficiary.status }}</p>
      <p class="pt-4">Assigned Peer Supporter : {{ props.beneficiary.assignedPS }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

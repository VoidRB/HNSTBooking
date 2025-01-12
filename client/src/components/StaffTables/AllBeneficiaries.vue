<script setup lang="ts">
import type beneficiaryObject from '../../interfaces/beneficiary.ts'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import BeneficiariyModal from '@/components/BeneficiaryModal.vue'
const beneficiaries = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    status: 'Active',
    gender: 'Female',
    appointments: '3',
    assignedPeerSupporter: 'John Doe',
    communicationOption: 'Google Meet',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    status: 'Pending',
    gender: 'Male',
    appointments: '1',
    assignedPeerSupporter: 'Jane Roe',
    communicationOption: 'Skype',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    status: 'Inactive',
    gender: 'Other',
    appointments: '0',
    assignedPeerSupporter: 'Chris Martin',
    communicationOption: '+249 91 230 0026',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    status: 'Active',
    gender: 'Female',
    appointments: '5',
    assignedPeerSupporter: 'Alex King',
    communicationOption: 'Zoom',
  },
]

const beneficiaries2 = ref([])
const beneficiaryToModal = ref<beneficiaryObject>()
onMounted(async () => {
  try {
    const response = await axios.get('/api/all-beneficiaries')
    beneficiaries2.value = response.data
  } catch (error) {
    //will fix the error handling
    console.log(error)
  }
})

const setBeneficiary = (beneficiary: beneficiaryObject) => {
  beneficiaryToModal.value = beneficiary
}
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Beneficiaries</h1>
      <button class="btn rounded-full"><i class="pi pi-refresh"></i></button>
    </section>

    <div class="h-60 overflow-y-scroll scroll-smooth">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>

            <th>Session</th>
            <th>Assigned P.S</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="beneficiary in beneficiaries"
            :key="beneficiary.id"
            class="hover cursor-pointer"
            onclick="my_modal_1.showModal()"
            @click="setBeneficiary(beneficiary)"
          >
            <th>{{ beneficiary.id }}</th>
            <td>
              {{ beneficiary.name }}
            </td>
            <td>{{ beneficiary.email }}</td>
            <td>{{ beneficiary.status }}</td>

            <td>{{ beneficiary.appointments }}</td>
            <td>{{ beneficiary.assignedPeerSupporter }}</td>
          </tr>
        </tbody>
      </table>
      <BeneficiariyModal id="my_modal_1" :beneficiary="beneficiaryToModal" />
    </div>
  </section>
</template>

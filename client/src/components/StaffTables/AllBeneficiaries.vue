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
    appointments: '3',
    assignedPS: 'John Doe',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    status: 'Pending',
    appointments: '1',
    assignedPS: 'Jane Roe',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    status: 'Inactive',
    appointments: '0',
    assignedPS: 'Chris Martin',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    status: 'Active',
    appointments: '5',
    assignedPS: 'Alex King',
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

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Appointments</th>
            <th>Assigned Peer Supporter</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="beneficiary in beneficiaries" :key="beneficiary.id">
            <th>{{ beneficiary.id }}</th>
            <td
              onclick="my_modal_1.showModal()"
              @click="setBeneficiary(beneficiary)"
              class="cursor-pointer hover:underline"
            >
              {{ beneficiary.name }}
            </td>
            <td>{{ beneficiary.email }}</td>
            <td>{{ beneficiary.status }}</td>
            <td>{{ beneficiary.appointments }}</td>
            <td>{{ beneficiary.assignedPS }}</td>
          </tr>
        </tbody>
      </table>
      <BeneficiariyModal id="my_modal_1" :beneficiary="beneficiaryToModal" />
    </div>
  </section>
</template>

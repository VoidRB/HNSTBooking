<script setup lang="ts">
import type beneficiaryType from '../../interfaces/beneficiary.ts'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import BeneficiariyModal from '@/components/Modals/BeneficiaryModal.vue'

const beneficiaries = ref([
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    status: 'Approved',
    gender: 'Female',
    sessionNumber: 0,
    assignedPeerSupporter: 'John Doe',
    communicationOption: 'Google Meet',
    staffNotes: '',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    status: 'Flagged',
    gender: 'Male',
    sessionNumber: 3,
    assignedPeerSupporter: 'Jane Roe',
    communicationOption: 'Skype',
    staffNotes: '',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    status: 'Finished',
    gender: 'Other',
    sessionNumber: 7,
    assignedPeerSupporter: 'Chris Martin',
    communicationOption: '+249 91 230 0026',
    staffNotes: '',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    status: 'Denied',
    gender: 'Female',
    sessionNumber: 0,
    assignedPeerSupporter: 'None',
    communicationOption: 'Zoom',
    staffNotes: '',
  },
])
const beneficiaryToModal = ref<beneficiaryType>()

onMounted(async () => {
  try {
    const response = await axios.get('/api/user/all/role/1')
    beneficiaries.value = response.data
  } catch (error) {
    //will fix the error handling hehe
    console.log(error)
  }
})

const setBeneficiary = (beneficiary: beneficiaryType) => {
  beneficiaryToModal.value = beneficiary
}

const beneficiaryStatusBackground = (status: string) => {
  switch (status) {
    case 'Approved':
      return 'badge bg-green-500'
    case 'Flagged':
      return 'badge bg-yellow-500'
    case 'Finished':
      return 'badge bg-slate-100'
    case 'Denied':
      return 'badge bg-red-500'

    default:
      break
  }
}

const refreshTable = async () => {
  console.log(`Refreshing Table`)
  beneficiaries.value = []
  try {
    const response = await axios.get('/api/all-beneficiaries')
    beneficiaries.value = response.data
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Beneficiaries</h1>
      <button class="btn rounded-full" @click="refreshTable()">
        <i class="pi pi-refresh"></i>
      </button>
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
            onclick="my_modal_2.showModal()"
            @click="setBeneficiary(beneficiary)"
          >
            <th>{{ beneficiary.id }}</th>
            <td>{{ beneficiary.name }}</td>
            <td>{{ beneficiary.email }}</td>
            <td>
              <p :class="[beneficiaryStatusBackground(beneficiary.status), '']">
                {{ beneficiary.status }}
              </p>
            </td>
            <td>{{ beneficiary.sessionNumber }}</td>
            <td>{{ beneficiary.assignedPeerSupporter }}</td>
          </tr>
        </tbody>
      </table>
      <BeneficiariyModal id="my_modal_2" :beneficiary="beneficiaryToModal" />
    </div>
  </section>
</template>

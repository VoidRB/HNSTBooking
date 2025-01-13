<script setup lang="ts">
import type peerSupporterType from '../../interfaces/peerSupporter.ts'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import PeerSupporterModal from '../Modals/PeerSupporterModal.vue'

const peerSupporters2 = ref([])
const peerSupporters = [
  {
    id: 1,
    name: 'Eve Adams',
    email: 'eve.adams@example.com',
    status: 'Inactive',
    appointments: '2',
    assignedBeneficiary: 'Sam Wilson',
  },
  {
    id: 2,
    name: 'Frank Johnson',
    email: 'frank.johnson@example.com',
    status: 'Active',
    appointments: '4',
    assignedBeneficiary: 'Lucy Liu',
  },
  {
    id: 3,
    name: 'Grace Kelly',
    email: 'grace.kelly@example.com',
    status: 'Pending',
    appointments: '3',
    assignedBeneficiary: 'David Lee',
  },
  {
    id: 4,
    name: 'Hank Moody',
    email: 'hank.moody@example.com',
    status: 'Inactive',
    appointments: '1',
    assignedBeneficiary: 'Nina Ricci',
  },
  {
    id: 3,
    name: 'Grace Kelly',
    email: 'grace.kelly@example.com',
    status: 'Pending',
    appointments: '3',
    assignedBeneficiary: 'David Lee',
  },
  {
    id: 4,
    name: 'Hank Moody',
    email: 'hank.moody@example.com',
    status: 'Inactive',
    appointments: '1',
    assignedBeneficiary: 'Nina Ricci',
  },
  {
    id: 3,
    name: 'Grace Kelly',
    email: 'grace.kelly@example.com',
    status: 'Pending',
    appointments: '3',
    assignedBeneficiary: 'David Lee',
  },
  {
    id: 4,
    name: 'Hank Moody',
    email: 'hank.moody@example.com',
    status: 'Inactive',
    appointments: '1',
    assignedBeneficiary: 'Nina Ricci',
  },
]
const peerSupporterToModal = ref<peerSupporterType>()

onMounted(async () => {
  try {
    const response = await axios.get('/api/all-peer-supporters')
    peerSupporters2.value = response.data
  } catch (error) {
    //will fix the error handling
    console.log(error)
  }
})

const setPeerSupporter = (peerSupporter: peerSupporterType) => {
  peerSupporterToModal.value = peerSupporter
}

const peerSupporterStatusBackground = (status: string) => {
  switch (status) {
    case 'Active':
      return 'badge bg-green-500'
    case 'Inactive':
      return 'badge bg-yellow-500'

    default:
      return 'badge'
  }
}
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Peer Supporters</h1>
      <button class="btn rounded-full"><i class="pi pi-refresh"></i></button>
    </section>

    <div class="h-60 overflow-x-auto overflow-y-scroll scroll-smooth">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Appointments</th>
            <th>Assigned beneficiaries</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="peerSupporter in peerSupporters"
            :key="peerSupporter.id"
            class="hover cursor-pointer"
            onclick="my_modal_1.showModal()"
            @click="setPeerSupporter(peerSupporter)"
          >
            <th>{{ peerSupporter.id }}</th>
            <td>{{ peerSupporter.name }}</td>
            <td>{{ peerSupporter.email }}</td>
            <td>
              <p :class="peerSupporterStatusBackground(peerSupporter.status)">
                {{ peerSupporter.status }}
              </p>
            </td>
            <td>{{ peerSupporter.appointments }}</td>
            <td>{{ peerSupporter.assignedBeneficiary }}</td>
          </tr>
        </tbody>
      </table>
      <PeerSupporterModal id="my_modal_1" :peerSupporter="peerSupporterToModal" />
    </div>
  </section>
</template>

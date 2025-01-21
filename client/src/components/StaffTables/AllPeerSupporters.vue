<script setup lang="ts">
import type peerSupporterType from '../../interfaces/peerSupporter.ts'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import PeerSupporterModal from '../Modals/PeerSupporterModal.vue'

const peerSupporters = ref([
  {
    id: 1,
    name: 'Eve Adams',
    email: 'eve.adams@example.com',
    status: 'Inactive',
    Sessions: '2',
    assignedBeneficiary: 'Sam Wilson',
  },
  {
    id: 2,
    name: 'Frank Johnson',
    email: 'frank.johnson@example.com',
    status: 'Active',
    Sessions: '4',
    assignedBeneficiary: 'Lucy Liu',
  },
  {
    id: 3,
    name: 'Grace Kelly',
    email: 'grace.kelly@example.com',
    status: 'Active',
    Sessions: '3',
    assignedBeneficiary: 'David Lee',
  },
  {
    id: 4,
    name: 'Hank Moody',
    email: 'hank.moody@example.com',
    status: 'Inactive',
    Sessions: '1',
    assignedBeneficiary: 'Nina Ricci',
  },
  {
    id: 3,
    name: 'Grace Kelly',
    email: 'grace.kelly@example.com',
    status: 'Active',
    Sessions: '3',
    assignedBeneficiary: 'David Lee',
  },
  {
    id: 4,
    name: 'Hank Moody',
    email: 'hank.moody@example.com',
    status: 'Inactive',
    Sessions: '1',
    assignedBeneficiary: 'Nina Ricci',
  },
  {
    id: 3,
    name: 'Grace Kelly',
    email: 'grace.kelly@example.com',
    status: 'Active',
    Sessions: '3',
    assignedBeneficiary: 'David Lee',
  },
  {
    id: 4,
    name: 'Hank Moody',
    email: 'hank.moody@example.com',
    status: 'Inactive',
    Sessions: '1',
    assignedBeneficiary: 'Nina Ricci',
  },
])
const peerSupporterToModal = ref<peerSupporterType>()

onMounted(async () => {
  try {
    const response = await axios.get('/api/user/all/role/2')
    peerSupporters.value = response.data
  } catch (error) {
    //will fix the error handling hehe
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

const refreshTable = async () => {
  console.log(`Refreshing Table`)
  peerSupporters.value = []
  try {
    const response = await axios.get('/api/all-beneficiaries')
    peerSupporters.value = response.data
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Peer Supporters</h1>
      <button class="btn rounded-full" @click="refreshTable()">
        <i class="pi pi-refresh"></i>
      </button>
    </section>

    <div class="h-60 overflow-x-auto overflow-y-scroll scroll-smooth">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Sessions</th>
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
            <td>{{ peerSupporter.Sessions }}</td>
            <td>{{ peerSupporter.assignedBeneficiary }}</td>
          </tr>
        </tbody>
      </table>
      <PeerSupporterModal id="my_modal_1" :peerSupporter="peerSupporterToModal" />
    </div>
  </section>
</template>

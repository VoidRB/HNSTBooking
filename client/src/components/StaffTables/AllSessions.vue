<script setup lang="ts">
import type sessionType from '@/interfaces/session'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import SessionModal from '../Modals/SessionModal.vue'

const sessions = ref([
  {
    id: 1,
    name: 'Alice Johnson',
    stage: 'Finished',
    assignedPeerSupporter: 'John Doe',
  },
  {
    id: 2,
    name: 'Bob Smith',
    stage: 'In Process',
    assignedPeerSupporter: 'Jane Roe',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    stage: 'Not Started',
    assignedPeerSupporter: 'Chris Martin',
  },
  {
    id: 4,
    name: 'Diana Prince',
    stage: 'Finished',
    assignedPeerSupporter: 'Alex King',
  },
  {
    id: 1,
    name: 'Alice Johnson',
    stage: 'Finished',
    assignedPeerSupporter: 'John Doe',
  },
  {
    id: 2,
    name: 'Bob Smith',
    stage: 'In Process',
    assignedPeerSupporter: 'Jane Roe',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    stage: 'Not Started',
    assignedPeerSupporter: 'Chris Martin',
  },
  {
    id: 4,
    name: 'Diana Prince',
    stage: 'Finished',
    assignedPeerSupporter: 'Alex King',
  },
])
const sessionToModal = ref<sessionType>()

onMounted(async () => {
  try {
    const response = await axios.get('/api/sessions/all')
    sessions.value = response.data
  } catch (error) {
    //will fix the error handling
    console.log(error)
  }
})

const setSession = (session: sessionType) => {
  console.log(`modal opened`)
  sessionToModal.value = session
}

const sessionStatusBackground = (stage: string) => {
  switch (stage) {
    case 'Finished':
      return 'badge bg-green-500'
    case 'Not Started':
      return 'badge bg-red-500'
    case 'In Process':
      return 'badge bg-yellow-500'

    default:
      return 'badge'
  }
}

const refreshTable = async () => {
  console.log(`Refreshing Table`)
  sessions.value = []
  try {
    const response = await axios.get('/api/all-beneficiaries')
    sessions.value = response.data
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <section>
    <section class="flex w-full place-items-center justify-between px-10 text-2xl">
      <h1>All Sessions</h1>
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
            <th>Stage</th>
            <th>Assigned Peer Supporter</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="session in sessions"
            :key="session.id"
            class="hover cursor-pointer"
            onclick="my_modal_3.showModal()"
            @click="setSession(session)"
          >
            <th class="w-0">{{ session.id }}</th>
            <td>{{ session.name }}</td>
            <td>
              <p :class="sessionStatusBackground(session.stage)">{{ session.stage }}</p>
            </td>
            <td>{{ session.assignedPeerSupporter }}</td>
          </tr>
        </tbody>
      </table>
      <SessionModal id="my_modal_3" :session="sessionToModal" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const userRole = ref('Admin')
const menuData = [
  {
    id: 1,
    role: 'beneficiary',
    routes: [
      { name: 'Homepage', routeName: 'home' },
      { name: 'Session', routeName: 'SessionView' },
      { name: "FAQ's", routeName: 'FAQView' },
    ],
  },
  {
    id: 2,
    role: 'peerSupporter',
    routes: [
      { name: 'Homepage', routeName: 'home' },
      { name: 'Assessments', routeName: 'AssessmentsView' },
      { name: 'Peer Supporter Page', routeName: 'PeerSupporterView' },
    ],
  },
  {
    id: 3,
    role: 'coordinator',
    routes: [
      { name: 'Homepage', routeName: 'home' },
      { name: 'Assessments', routeName: 'AssessmentsView' },
      { name: 'Coordinator Page', routeName: 'CoordinatorView' },
    ],
  },
  {
    id: 4,
    role: 'auditor',
    routes: [
      { name: 'Homepage', routeName: 'home' },
      { name: 'Assessments', routeName: 'AssessmentsView' },
      { name: 'Auditor Page', routeName: 'AuditorView' },
    ],
  },
  {
    id: 5,
    role: 'Admin',
    routes: [
      { name: 'Homepage', routeName: 'home' },
      { name: 'Session', routeName: 'SessionView' },
      { name: 'Assessments', routeName: 'AssessmentsView' },
      { name: 'Peer Supporter Page', routeName: 'PeerSupporterView' },
      { name: 'Coordinator Page', routeName: 'CoordinatorView' },
      { name: 'Auditor Page', routeName: 'AuditorView' },
      { name: "FAQ's", routeName: 'FAQView' },
      { name: 'Admin Page', routeName: 'AdminView' },
    ],
  },
]
</script>
<template>
  <div class="navbar fixed z-10 bg-base-100">
    <section class="navbar-start">
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl">B'Saraha</RouterLink>
    </section>
    <section class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-circle btn-ghost">
          <i class="pi pi-align-right"></i>
        </div>
        <div v-for="menu in menuData" :key="menu.id">
          <ul
            v-if="userRole === menu.role"
            tabindex="0"
            class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li v-for="route in menu.routes" :key="route.routeName">
              <RouterLink :to="{ name: route.routeName }">{{ route.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

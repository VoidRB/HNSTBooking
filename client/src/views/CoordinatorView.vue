<script setup lang="ts">
import AllAppointments from '@/components/StaffTables/AllAppointments.vue'
import AllBeneficiaries from '@/components/StaffTables/AllBeneficiaries.vue'
import AllPeerSupporters from '@/components/StaffTables/AllPeerSupporters.vue'
import CoordinatorNavBar from '@/components/NavBars/CoordinatorNavBar.vue'
import AllAssessments from '@/components/StaffTables/AllAssessments.vue'
import { onMounted } from 'vue'

onMounted(async () => {})
</script>
<template>
  <div class="flex h-full w-full flex-col items-center">
    <CoordinatorNavBar />
    <section class="mx-1 mt-16 flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1">
      <AllPeerSupporters class="col-start-1" />
      <AllBeneficiaries class="col-start-2" />
      <AllAppointments class="col-start-1 row-start-2" />
      <AllAssessments class="col-start-2 row-start-2" />
    </section>
  </div>
</template>

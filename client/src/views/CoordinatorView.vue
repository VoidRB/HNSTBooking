<script setup lang="ts">
import AllAppointments from '@/components/StaffTables/AllAppointments.vue'
import AllBeneficiaries from '@/components/StaffTables/AllBeneficiaries.vue'
import AllPeerSupporters from '@/components/StaffTables/AllPeerSupporters.vue'
import CoordinatorNavBar from '@/components/NavBars/CoordinatorNavBar.vue'
</script>
<template>
  <div class="flex h-full w-full flex-col items-center gap-10">
    <CoordinatorNavBar />
    <section class="flex flex-col gap-10">
      <AllPeerSupporters />
      <AllBeneficiaries />
      <AllAppointments />
    </section>
  </div>
</template>

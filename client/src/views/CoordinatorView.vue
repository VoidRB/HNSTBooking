<script setup lang="ts">
import AllAppointments from '@/components/AllAppointments.vue'
import AllBeneficiaries from '@/components/AllBeneficiaries.vue'
import AllPeerSupporters from '@/components/AllPeerSupporters.vue'
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

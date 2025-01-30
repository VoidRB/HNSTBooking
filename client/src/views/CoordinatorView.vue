<script setup lang="ts">
import AllBeneficiaries from '@/components/StaffTables/AllBeneficiaries.vue'
import AllPeerSupporters from '@/components/StaffTables/AllPeerSupporters.vue'
import AllSessions from '@/components/StaffTables/AllSessions.vue'
import CoordinatorStats from '../components/CoordinatorStats.vue'
</script>
<template>
  <div class="flex h-full w-full flex-col">
    <section class="mt-16 flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1">
      <AllBeneficiaries class="col-start-1" />
      <AllPeerSupporters class="col-start-2" />
      <AllSessions class="col-start-1 row-start-2" />
      <CoordinatorStats class="col-start-2 row-start-2" />
    </section>
  </div>
</template>

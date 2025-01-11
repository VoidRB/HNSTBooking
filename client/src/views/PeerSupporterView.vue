<script setup lang="ts">
import AllBeneficiaries from '@/components/StaffTables/AllBeneficiaries.vue'
import PeerSupporterNavBar from '@/components/NavBars/PeerSupporterNavBar.vue'
</script>
<template>
  <div class="flex h-full w-full flex-col items-center gap-10">
    <PeerSupporterNavBar />
    <AllBeneficiaries />
  </div>
</template>

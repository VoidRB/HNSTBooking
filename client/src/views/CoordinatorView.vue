<script setup lang="ts">
import AllBeneficiaries from '@/components/AllBeneficiaries.vue'
import AllPeerSupporters from '@/components/AllPeerSupporters.vue'
import CoordinatorNavBar from '@/components/NavBars/CoordinatorNavBar.vue'
</script>
<template>
  <div class="flex h-full w-full flex-col items-center gap-10">
    <CoordinatorNavBar />
    <AllPeerSupporters />
    <AllBeneficiaries />
  </div>
</template>

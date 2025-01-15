<script setup lang="ts">
import AllSessions from '@/components/StaffTables/AllSessions.vue'
import AllBeneficiaries from '@/components/StaffTables/AllBeneficiaries.vue'
import AllPeerSupporters from '@/components/StaffTables/AllPeerSupporters.vue'

import { onMounted } from 'vue'

onMounted(async () => {})
</script>
<template>
  <div class="flex h-full w-full flex-col items-center">
    <section class="mx-1 mt-16 flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1">
      <AllPeerSupporters class="col-start-1" />
      <AllBeneficiaries class="col-start-2" />
      <AllSessions class="col-start-1 row-start-2" />
    </section>
  </div>
</template>

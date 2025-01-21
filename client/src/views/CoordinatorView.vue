<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AllSessions from '@/components/StaffTables/AllSessions.vue'
import AllBeneficiaries from '@/components/StaffTables/AllBeneficiaries.vue'
import AllPeerSupporters from '@/components/StaffTables/AllPeerSupporters.vue'

const allPeerSupporters = ref()
const allBeneficiaries = ref()
const allSessions = ref()

onMounted(async () => {
  //4 routes will be turned into props when BE is ready
})
</script>
<template>
  <div class="flex h-full w-full flex-col items-center">
    <section class="mt-16 flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1">
      <AllPeerSupporters class="col-start-1" />
      <AllBeneficiaries class="col-start-2" />
      <AllSessions class="col-start-1 row-start-2" />
    </section>
  </div>
</template>

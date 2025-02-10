<script setup lang="ts">
import AllAssessments from '@/components/StaffTables/AllAssessments.vue'
import AllSessions from '@/components/StaffTables/AllSessions.vue'
</script>
<template>
  <div class="lg:grid-cols-2w mt-16 flex h-full w-full flex-col gap-10 lg:grid">
    <AllAssessments />
    <AllSessions />
  </div>
</template>

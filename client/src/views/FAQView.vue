<script setup lang="ts">
import FAQsComp from '@/components/FAQsComp.vue'
import ResourcesComp from '@/components/ResourcesComp.vue'
</script>
<template>
  <div class="mt-16 flex h-full w-full flex-col">
    <section class="flex h-full w-full flex-col lg:flex-row">
      <FAQsComp />
      <hr class="divider border-0 px-5 lg:divider-horizontal lg:py-5" />
      <ResourcesComp />
    </section>
  </div>
</template>

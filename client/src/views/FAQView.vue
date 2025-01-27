<script setup lang="ts">
import FAQsComp from '@/components/FAQsComp.vue'
import ResourcesComp from '@/components/ResourcesComp.vue'
</script>
<template>
  <div class="mt-16 flex h-full w-full flex-col">
    <section class="flex h-full w-full flex-col lg:flex-row">
      <FAQsComp />
      <hr class="divider mx-5 lg:divider-horizontal lg:mx-0 lg:my-5 lg:border-0" />
      <ResourcesComp />
    </section>
  </div>
</template>

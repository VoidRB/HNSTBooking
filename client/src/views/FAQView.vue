<script setup lang="ts">
import FAQsComp from '@/components/FAQsComp.vue'
import ResourcesComp from '@/components/ResourcesComp.vue'
import BeneficiariyNavBar from '@/components/NavBars/BeneficiariyNavBar.vue'
</script>
<template>
  <div class="flex h-full w-full flex-col">
    <BeneficiariyNavBar />
    <section class="flex h-full w-full flex-col lg:flex-row">
      <FAQsComp />
      <hr class="divider px-5 lg:divider-horizontal lg:py-5" />
      <ResourcesComp />
    </section>
  </div>
</template>

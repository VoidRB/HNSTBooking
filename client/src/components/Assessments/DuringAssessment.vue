<script setup lang="ts">
const props = defineProps({
  beneficiary: String,
})
</script>
<template>{{ props.beneficiary }}</template>

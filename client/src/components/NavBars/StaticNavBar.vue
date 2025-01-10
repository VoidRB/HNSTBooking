<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl">B'Saraha</RouterLink>
    </div>
  </div>
</template>

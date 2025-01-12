<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl">B'Saraha </a>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end fixed z-10">
        <div tabindex="0" role="button" class="btn btn-circle btn-ghost">
          <i class="pi pi-align-right"></i>
        </div>
        <ul
          tabindex="0"
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li><RouterLink :to="{ name: 'home' }">Homepage</RouterLink></li>
          <li><RouterLink :to="{ name: 'AssessmentsView' }">Assessments</RouterLink></li>
          <li><RouterLink :to="{ name: 'CoordinatorView' }">Coordinator Page</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

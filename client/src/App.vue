<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
const route = useRoute()
console.log(route.name)
</script>

<template>
  <div class="flex h-screen w-full flex-1 flex-col">
    <NavBar v-if="route.name !== 'home'" />
    <RouterView v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>

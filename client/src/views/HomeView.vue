<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import { ref } from 'vue'

console.log(``)

const formState = ref(true)
</script>

<template>
  <div
    class="flex h-full w-full items-center justify-center bg-[url(/p2p.svg)] bg-cover bg-bottom bg-no-repeat lg:bg-none"
  >
    <section
      class="hidden h-full w-2/3 items-start justify-start bg-base-200 bg-[url(/waves.svg)] bg-cover bg-bottom p-10 lg:flex"
    >
      <h1 class="mx-4 select-none text-9xl font-bold text-base-content shadow-black drop-shadow-xl">
        Welcome to B'Sarahas <span class="text-secondary">peer</span
        ><span class="text-primary">-to-</span><span class="text-accent">peer</span>
        project!
      </h1>
    </section>
    <section class="flex w-full flex-col items-center justify-center lg:w-1/3">
      <label class="swap swap-flip mb-5">
        <input type="checkbox" @click="formState = !formState" />

        <h1 class="swap-off text-3xl font-bold">&nbsp;&nbsp;Login</h1>
        <h1 class="swap-on text-3xl font-bold">Register</h1>
      </label>

      <LoginForm v-if="formState" />
      <RegisterForm v-else />
    </section>
  </div>
</template>

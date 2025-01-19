<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import { ref } from 'vue'

const formState = ref(true)
</script>

<template>
  <div class="flex h-full w-full items-center justify-center gap-10">
    <section class="hidden h-full w-2/3 items-start justify-start bg-base-200 p-10 md:flex">
      <h1 class="select-none text-9xl font-bold text-neutral shadow-black drop-shadow-xl">
        Welcome to B'Saraha _______!
      </h1>
    </section>
    <section class="flex w-1/3 flex-col items-center justify-center">
      <label class="swap swap-flip mb-5">
        <input type="checkbox" @click="formState = !formState" />

        <h1 class="swap-off text-3xl font-bold">&nbsp;&nbsp;login</h1>
        <h1 class="swap-on text-3xl font-bold">Register</h1>
      </label>

      <LoginForm v-if="formState" />
      <RegisterForm v-else />
    </section>
  </div>
</template>

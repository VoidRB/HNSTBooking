<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import { ref } from 'vue'

const formState = ref(true)

const changeForms = () => {
  formState.value = !formState.value
}
</script>

<template>
  <div class="flex h-full w-full items-center justify-center gap-10">
    <section class="none hidden h-full w-2/3 items-start justify-start bg-base-200 p-10 md:flex">
      <h1 class="select-none text-9xl font-bold text-neutral shadow-black drop-shadow-xl">
        Welcome to B'Saraha _______(?)!
      </h1>
    </section>
    <section class="flex w-1/3 flex-col items-center justify-center">
      <div class="flex flex-col">
        <h1 class="text-center">Click here to change forms</h1>
        <i class="pi pi-arrow-down self-center"></i>
        <input
          type="checkbox"
          class="toggle mt-5 self-center"
          :checked="formState"
          @click="changeForms()"
        />
      </div>

      <LoginForm v-if="formState" />
      <RegisterForm v-else />
    </section>
  </div>
</template>

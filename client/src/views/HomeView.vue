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
  <div class="flex h-full w-full flex-col items-center justify-center gap-10">
    <section class="fixed top-24 flex flex-col">
      <h1 class="text-center">Click here to change forms</h1>
      <i class="pi pi-arrow-down self-center"></i>
      <input
        type="checkbox"
        class="toggle mt-5 self-center"
        :checked="formState"
        @click="changeForms()"
      />
    </section>

    <section v-if="formState">
      <LoginForm />
    </section>
    <section v-else>
      <RegisterForm />
    </section>
  </div>
</template>

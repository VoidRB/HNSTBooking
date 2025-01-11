<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
</script>

<template>
  <div class="flex h-full w-full items-center justify-center gap-10">
    <LoginForm />
    <section>Or</section>
    <RegisterForm />
  </div>
</template>

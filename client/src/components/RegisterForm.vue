<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
</script>
<template>
  <div class="flex flex-col items-center gap-2">
    <label for="LoginForm">Register</label>
    <input
      v-model="email"
      type="text"
      placeholder="Email"
      class="input input-bordered w-full max-w-xs"
    />
    <input
      v-model="password"
      type="password"
      placeholder="password"
      class="input input-bordered w-full max-w-xs"
    />
    <button class="btn">Register</button>
  </div>
</template>

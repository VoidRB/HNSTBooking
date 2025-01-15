<script setup lang="ts">
import router from '@/router'
import axios from 'axios'
import { reactive } from 'vue'

const user = reactive({
  email: '',
  password: '',
})
const login = async () => {
  try {
    const response = await axios.postForm('/api/login', {
      email: user.email,
      password: user.password,
    })
    console.log(`logged in`)
    router.push({ name: response.data.route })
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <form class="flex flex-col items-center gap-2" @submit.prevent="login">
    <div class="input"></div>
    <div class="input"></div>
    <label for="LoginForm" class="text-3xl font-bold">Login</label>
    <input
      v-model="user.email"
      type="email"
      placeholder="Email"
      autocomplete="email"
      required
      class="input input-bordered w-full max-w-xs"
    />
    <input
      v-model="user.password"
      required
      type="password"
      placeholder="password"
      autocomplete="current-password"
      class="input input-bordered w-full max-w-xs"
    />
    <button class="btn">Login</button>
    <div class="input"></div>
    <div class="input"></div>
  </form>
</template>

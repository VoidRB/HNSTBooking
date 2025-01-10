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
    const response = await axios.post('/api/login', {
      email: user.email,
      password: user.password,
    })
    router.push({ name: 'Appointments' })
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <form class="flex flex-col items-center gap-2">
    <label for="LoginForm">Login</label>
    <input
      v-model="user.email"
      type="text"
      placeholder="Email"
      autocomplete="email"
      class="input input-bordered w-full max-w-xs"
    />
    <input
      v-model="user.password"
      type="password"
      placeholder="password"
      autocomplete="current-password"
      class="input input-bordered w-full max-w-xs"
    />
    <button class="btn" @click.prevent="login">Login</button>
  </form>
</template>

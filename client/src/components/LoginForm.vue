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
    router.push({ name: response.data.route })
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <form class="flex h-full w-full flex-col items-center gap-2" @submit.prevent="login">
    <div class="input bg-transparent"></div>
    <div class="input bg-transparent"></div>
    <input
      v-model="user.email"
      type="email"
      placeholder="Email"
      autocomplete="email"
      required
      class="input input-bordered max-w-xs"
    />
    <input
      v-model="user.password"
      required
      type="password"
      placeholder="password"
      autocomplete="current-password"
      class="input input-bordered max-w-xs"
    />
    <div class="input bg-transparent"></div>
    <div class="input bg-transparent"></div>
    <div class="input bg-transparent"></div>
    <button class="btn">Login</button>
  </form>
</template>

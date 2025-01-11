<script setup lang="ts">
import router from '@/router'
import axios from 'axios'
import { reactive } from 'vue'

const user = reactive({
  email: '',
  name: '',
  gender: 'Gender',
  age: '',
  password: '',
})
const register = async () => {
  try {
    const response = await axios.post('/api/register', {
      email: user.email,
      name: user.name,
      gender: user.gender,
      age: user.age,
      password: user.password,
    })
    router.push({ name: 'AppointmentView' })
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <form class="flex flex-col items-center gap-2">
    <label for="LoginForm">Register</label>

    <input
      v-model="user.email"
      type="email"
      placeholder="Email"
      autocomplete="email"
      class="input input-bordered w-full max-w-xs"
    />
    <input
      v-model="user.name"
      type="text"
      placeholder="Name"
      autocomplete="name"
      class="input input-bordered w-full max-w-xs"
    />
    <select v-model="user.gender" class="select select-bordered w-full max-w-xs">
      <option disabled selected>Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
    <input
      v-model="user.age"
      min="0"
      max="100"
      type="number"
      placeholder="Age"
      autocomplete="age"
      class="input input-bordered w-full max-w-xs"
    />
    <input
      v-model="user.password"
      type="password"
      placeholder="password"
      autocomplete="current-password"
      class="input input-bordered w-full max-w-xs"
    />
    <button class="btn" @click.prevent="register">Register</button>
  </form>
</template>

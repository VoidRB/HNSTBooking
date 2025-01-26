<script setup lang="ts">
import router from '@/router'
import axios from 'axios'
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toastification'
const toast = useToast()
const user = reactive({
  email: '',
  username: '',
  gender: 'Gender',
  age: '',
  languagePreference: 'Language',
  password: '',
  passwordRepeated: '',
})

const passwordBorderColor = ref('')

const register = async () => {
  if (user.password != user.passwordRepeated) {
    passwordBorderColor.value = 'input-error'
    toast.warning('Passwords Dont Match')
  }

  try {
    const response = await axios.postForm('/api/register', {
      email: user.email,
      username: user.username,
      gender: user.gender,
      age: user.age,
      password: user.password,
      passwordRepeated: user.passwordRepeated,
    })
    console.log(`Registered`)
    toast.success('Successfully registered, Welcome!')
    router.push({ name: response.data.route })
  } catch (error) {
    toast.error('Oops, There was an error')
    console.log(error)
  }
}
</script>
<template>
  <form class="flex flex-col items-center gap-2" @submit.prevent="register">
    <input
      required
      v-model="user.email"
      type="email"
      placeholder="Email"
      autocomplete="email"
      class="input input-bordered w-full max-w-xs"
    />
    <input
      required
      v-model="user.username"
      type="text"
      placeholder="Name"
      minlength="3"
      autocomplete="name"
      class="input input-bordered w-full max-w-xs"
    />
    <div class="w-full">
      <select v-model="user.gender" class="select select-bordered w-full max-w-xs">
        <option disabled selected>Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
    <input
      required
      v-model="user.age"
      min="0"
      max="100"
      maxlength="3"
      type="number"
      placeholder="Age"
      autocomplete="age"
      class="input input-bordered w-full max-w-xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
    />
    <div class="w-full">
      <select v-model="user.languagePreference" class="select select-bordered w-full max-w-xs">
        <option disabled selected>Language</option>
        <option>Arabic</option>
        <option>English</option>
        <option>Other</option>
      </select>
    </div>
    <input
      required
      v-model="user.password"
      @keypress="passwordBorderColor = 'ring-0'"
      type="password"
      placeholder="password"
      minlength="6"
      autocomplete="current-password"
      :class="[passwordBorderColor, 'input', 'input-bordered', 'w-full', 'max-w-xs']"
    />
    <input
      required
      v-model="user.passwordRepeated"
      @keypress="passwordBorderColor = 'ring-0'"
      type="password"
      placeholder="repeat password"
      minlength="6"
      autocomplete="current-password"
      :class="[passwordBorderColor, 'input', 'input-bordered', 'w-full', 'max-w-xs']"
    />
    <button class="btn" @click="passwordBorderColor = 'ring-0'">Register</button>
  </form>
</template>

<script setup lang="ts">
import SessionFeedbackForm from '@/components/SessionFeedbackForm.vue'
import SessionForm from '@/components/SessionForm.vue'
// import { jwtDecode } from 'jwt-decode'
import { ref } from 'vue'

// const { payload } = jwtDecode(document.cookie)
const userData = ref({})
</script>
<template>
  <div class="mt-16 flex h-full w-full flex-col items-center justify-center">
    <!-- <SessionForm v-if="userData.status === 'active'" />
    <SessionFeedbackForm v-else /> -->
    <SessionForm />
    <!-- <SessionFeedbackForm /> -->
  </div>
</template>

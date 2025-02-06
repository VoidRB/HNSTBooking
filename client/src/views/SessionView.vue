<script setup lang="ts">
import SessionFeedbackForm from '@/components/SessionFeedbackForm.vue'
import SessionForm from '@/components/SessionForm.vue'
// import axios from 'axios'
// import { decode } from 'hono/jwt'
// import { onMounted, ref } from 'vue'

// const { payload } = decode(document.cookie)
// const userData = ref({})

// onMounted(async () => {
//   try {
//     const response = await axios.get('/api/user', {
//       params: {
//         userId: payload.id,
//       },
//     })

//     userData.value = response.data
//   } catch (error) {
//     console.log(error)
//   }
// })
</script>
<template>
  <div class="mt-16 flex h-full w-full flex-col justify-between">
    <!-- <SessionForm v-if="userData.status === 'active'" />
    <SessionFeedbackForm v-else /> -->
    <SessionForm />
    <!-- <SessionFeedbackForm /> -->
  </div>
</template>

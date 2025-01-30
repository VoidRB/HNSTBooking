<script setup lang="ts">
import axios from 'axios'

const submitFeedbackForm = async () => {
  try {
    const response = await axios.postForm('')
  } catch (error) {}
}
</script>
<template>
  <div class="mt-16 flex h-full w-full flex-col gap-5">
    <section class="px-5">
      <h1 class="text-3xl font-bold">hello</h1>
      <p>
        After each session, its recommended to fill in this form and submit it so we can improve the
        experience!
      </p>
    </section>
    <form @submit.prevent="submitFeedbackForm" class="flex h-full w-full flex-col gap-5 p-5">
      <input type="text" class="input input-bordered" />
      <textarea type="text" class="textarea textarea-bordered h-full resize-none" />
      <button class="btn place-self-end">submit</button>
    </form>
  </div>
</template>

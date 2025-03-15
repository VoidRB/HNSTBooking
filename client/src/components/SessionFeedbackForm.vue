<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const toast = useToast()
const SessionFeedbackRating = ref(1)
const SessionFeedbackDescription = ref('')

const submitFeedbackForm = async () => {
  console.log(SessionFeedbackRating.value)
  console.log(SessionFeedbackDescription.value)
  try {
    const response = await axios.postForm('/api/session/feedback', {
      SessionFeedbackRating: SessionFeedbackRating.value,
      SessionFeedbackDescription: SessionFeedbackDescription.value,
    })
    toast.success('Successfully submitted your feedback!')
  } catch (error) {
    toast.error(`${error}`)
  }
}
</script>
<template>
  <div class="m-10 mt-16 flex h-full w-full flex-col gap-5">
    <section class="px-5">
      <h1 class="text-3xl font-bold">hello</h1>
      <p>
        After each session, its recommended to fill in this form and submit it so we can improve the
        experience!
      </p>
    </section>

    <form @submit.prevent="submitFeedbackForm" class="flex h-full w-full flex-col gap-2 px-5">
      <hr class="divider border-0" />
      <p>A Rating out of 5 would help us understand your experience with the platform</p>
      <div class="rating self-center py-2">
        <input
          type="radio"
          name="rating-1"
          class="mask mask-star"
          value="1"
          v-model="SessionFeedbackRating"
          :checked="true"
          required
        />
        <input
          type="radio"
          name="rating-1"
          class="mask mask-star"
          value="2"
          v-model="SessionFeedbackRating"
        />
        <input
          type="radio"
          name="rating-1"
          class="mask mask-star"
          value="3"
          v-model="SessionFeedbackRating"
        />
        <input
          type="radio"
          name="rating-1"
          class="mask mask-star"
          value="4"
          v-model="SessionFeedbackRating"
        />
        <input
          type="radio"
          name="rating-1"
          class="mask mask-star"
          value="5"
          v-model="SessionFeedbackRating"
        />
      </div>

      <p>And a brief description of your experience so far would be much appreciated!</p>
      <textarea
        type="text"
        class="textarea textarea-bordered h-1/2 w-full resize-none"
        v-model="SessionFeedbackDescription"
        required
      />
      <button class="btn place-self-end">submit</button>
    </form>
  </div>
</template>

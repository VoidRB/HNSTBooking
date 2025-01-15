<script setup lang="ts">
import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()
const props = defineProps({
  beneficiary: String,
  chosenAssessmentDate: String,
  sessionNumber: Number,
})

const submitAssessment = async () => {
  try {
    const response = axios.post('/api/submit-assessment', {})
    toast.success('Successfully submitted the Assessment')
  } catch (error) {}
}
</script>
<template>
  <h1 class="ml-2">Beneficiary : {{ props.beneficiary }}</h1>
  <div class="flex h-full w-full flex-col py-5">
    <!-- Questions -->
    <section class="ml-5 h-96 overflow-y-scroll">
      <article class="mb-5">
        <h1>Question 1</h1>
        <textarea class="textarea textarea-bordered w-full" placeholder="Answer"></textarea>
      </article>
      <article class="mb-5">
        <h1>Question 2</h1>
        <textarea class="textarea textarea-bordered w-full" placeholder="Answer"></textarea>
      </article>

      <article class="mb-5">
        <h1 class="mb-5">Question 3 ( Likert )</h1>
        <section class="flex gap-5">
          <div class="flex flex-col items-center">
            <label for="">1</label
            ><input type="radio" name="radio-1" class="radio" checked="true" value="1" />
          </div>
          <div class="flex flex-col items-center">
            <label for="">2</label><input type="radio" name="radio-1" class="radio" value="2" />
          </div>
          <div class="flex flex-col items-center">
            <label for="">3</label><input type="radio" name="radio-1" class="radio" value="3" />
          </div>
          <div class="flex flex-col items-center">
            <label for="">4</label><input type="radio" name="radio-1" class="radio" value="4" />
          </div>
          <div class="flex flex-col items-center">
            <label for="">5</label><input type="radio" name="radio-1" class="radio" value="5" />
          </div>
        </section>
      </article>
      <article class="mb-5">
        <h1>Question 4</h1>
        <textarea class="textarea textarea-bordered w-full" placeholder="Answer"></textarea>
      </article>
    </section>
    <!-- Button -->
    <section class="mr-5 place-self-end">
      <button class="btn" @click="submitAssessment()">Submit</button>
    </section>
  </div>
</template>

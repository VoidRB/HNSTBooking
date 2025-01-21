<script setup lang="ts">
import axios from 'axios'
import { decode } from 'hono/jwt'
import { useToast } from 'vue-toastification'

const toast = useToast()
const { payload } = decode(document.cookie)
const props = defineProps({
  beneficiary: Object,
  chosenAssessmentDate: String,
})

const questions = [
  { id: '1', type: 'scale', question: 'Question 1', answer: '' },
  { id: '2', type: 'scale', question: 'Question 2', answer: '' },
  { id: '3', type: 'text', question: 'Question 3', answer: '' },
  { id: '4', type: 'text', question: 'Question 4', answer: '' },
  { id: '5', type: 'text', question: 'Question 5', answer: '' },
]

const textBasedQuestions = questions.filter((question) => {
  if (question.type === 'text') {
    return question
  }
})

const scaleBasedQuestions = questions.filter((question) => {
  if (question.type === 'text') {
    return question
  }
})

const submitAssessment = async () => {
  try {
    const response = axios.post('/api/PreAssessment', {
      beneficiaryId: props.beneficiary?.id,
      peerSupporterId: payload.id,
      textBasedQuestions: textBasedQuestions,
      scaleBasedQuestions: scaleBasedQuestions,
    })
    toast.success('Successfully submitted the Assessment')
  } catch (error) {}
}
</script>
<template>
  <h1 class="ml-2">Beneficiary : {{ props.beneficiary?.name }}</h1>
  <div class="flex h-full w-full flex-col py-5">
    <!-- Questions -->
    <section class="ml-5 h-96 overflow-y-scroll">
      <div v-for="question in questions" :key="question.id">
        <article v-if="question.type === 'text'">
          <h1>{{ question.question }}</h1>

          <textarea
            placeholder="Answer"
            v-model="question.answer"
            class="textarea textarea-bordered w-full"
          ></textarea>
        </article>
        <article v-else>
          <h1>{{ question.question }}</h1>
          {{ question.answer }}

          <section class="flex gap-5">
            <div class="flex flex-col items-center">
              <label for="">1</label
              ><input
                v-model="question.answer"
                type="radio"
                :name="question.id"
                class="radio"
                value="1"
              />
            </div>
            <div class="flex flex-col items-center">
              <label for="">2</label
              ><input
                v-model="question.answer"
                type="radio"
                :name="question.id"
                class="radio"
                value="2"
              />
            </div>
            <div class="flex flex-col items-center">
              <label for="">3</label
              ><input
                v-model="question.answer"
                type="radio"
                :name="question.id"
                class="radio"
                value="3"
              />
            </div>
            <div class="flex flex-col items-center">
              <label for="">4</label
              ><input
                v-model="question.answer"
                type="radio"
                :name="question.id"
                class="radio"
                value="4"
              />
            </div>
            <div class="flex flex-col items-center">
              <label for="">5</label
              ><input
                v-model="question.answer"
                type="radio"
                :name="question.id"
                class="radio"
                value="5"
              />
            </div>
          </section>
        </article>
      </div>
    </section>
    <!-- Button -->
    <section class="mr-5 place-self-end">
      <button class="btn" @click="submitAssessment()">Submit</button>
    </section>
  </div>
</template>

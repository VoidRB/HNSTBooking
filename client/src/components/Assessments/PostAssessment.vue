<script setup lang="ts">
import { postTherapyPsychlopsQuestions } from '../../../../shared/assessmentQuestions'
import { psychlopsAnswerOptions } from '../../../../shared/assessmentAnswers'
import axios from 'axios'
// import { jwtDecode } from 'jwt-decode'
import { useToast } from 'vue-toastification'
const toast = useToast()
// const { payload } = jwtDecode(document.cookie)
const props = defineProps({
  beneficiary: Object,
  chosenAssessmentDate: String,
})

const submitAssessment = async () => {
  const psychlopsAnswers: Array<string> = []

  postTherapyPsychlopsQuestions.forEach((question) => {
    psychlopsAnswers.push(question.answer)
  })

  try {
    const response = axios.post('/api/PostAssessment', {
      beneficiaryId: props.beneficiary?.id,
      // peerSupporterId: payload.id,
      psychlopsAnswers: psychlopsAnswers,
      assessmentDate: props.chosenAssessmentDate,
    })
    toast.success('Successfully submitted the Assessment')
  } catch (error) {}
}
</script>
<template>
  <h1 class="ml-2 font-bold underline">Beneficiary : {{ props.beneficiary?.name }}</h1>
  <form class="flex h-full w-full flex-col py-5" @submit.prevent="submitAssessment()">
    <div class="mx-5 h-96 overflow-y-scroll scroll-smooth">
      <!-- PSYCHLOPS QUESTIONS -->
      <section>
        <div v-for="question in postTherapyPsychlopsQuestions" :key="question.id">
          <article v-if="question.type === 'text'">
            <h1 class="font-bold">{{ question.question }}</h1>
            <textarea
              required
              placeholder="Answer"
              v-model="question.answer"
              class="textarea textarea-bordered w-full resize-none"
            ></textarea>
          </article>
          <article v-else>
            <h1 class="font-bold">{{ question.question }}</h1>
            <section class="flex gap-5">
              <div
                v-for="option in psychlopsAnswerOptions"
                :key="option.id"
                class="flex flex-col items-center"
              >
                <label>{{ option.option }}</label
                ><input
                  required
                  v-model="question.answer"
                  type="radio"
                  :name="question.id"
                  class="radio"
                  :value="option.option"
                />
              </div>
            </section>
          </article>
          <hr class="divider border-0" />
        </div>
      </section>
    </div>
    <!-- Button -->
    <section class="mr-5 place-self-end">
      <button class="btn">Submit</button>
    </section>
  </form>
</template>

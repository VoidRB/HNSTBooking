<script setup lang="ts">
import {
  mentalHealthContinuumQuestions,
  preTherapyPsychlopsQuestions,
  GRiSTQuestions,
} from '../../../../shared/assessmentQuestions'
import {
  mentalHealthContinuumAnswerOptions,
  psychlopsAnswerOptions,
  GRiSTAnswerMCQOptions,
  GRiSTAnswerScaleOptions,
  GRiSTAnswerYorNOptions,
} from '../../../../shared/assessmentAnswers'
import axios from 'axios'
import { decode } from 'hono/jwt'
import { useToast } from 'vue-toastification'

const toast = useToast()
const { payload } = decode(document.cookie)
const props = defineProps({
  beneficiary: Object,
  chosenAssessmentDate: String,
})

const submitAssessment = async () => {
  const MHCAnswers: Array<string> = []
  const psychlopsAnswers: Array<string> = []
  const GRiSTAnswers: Array<string> = []
  mentalHealthContinuumQuestions.forEach((question) => {
    MHCAnswers.push(question.answer)
  })
  preTherapyPsychlopsQuestions.forEach((question) => {
    psychlopsAnswers.push(question.answer)
  })
  GRiSTQuestions.forEach((question) => {
    GRiSTAnswers.push(question.answer)
  })

  try {
    const response = axios.post('/api/ScreeningAssessment', {
      beneficiaryId: props.beneficiary?.id,
      peerSupporterId: payload.id,
      MHCAnswers: MHCAnswers,
      psychlopsAnswers: psychlopsAnswers,
      GRiSTAnswers: GRiSTAnswers,
    })
    toast.success('Successfully submitted the Assessment')
  } catch (error) {}
}
</script>
<template>
  <h1 class="ml-2">Beneficiary : {{ props.beneficiary?.name }}</h1>
  <div class="flex h-full w-full flex-col py-5">
    <div class="ml-5 h-96 overflow-y-scroll scroll-smooth pr-5">
      <h1 class="mb-10 text-3xl font-bold underline">MHC-SF Questions</h1>

      <!-- MHC-SF Questions -->
      <section>
        <div v-for="question in mentalHealthContinuumQuestions" :key="question.id">
          <article v-if="question.type === 'text'">
            <h1 class="font-bold">{{ question.question }}</h1>
            <textarea
              placeholder="Answer"
              v-model="question.answer"
              class="textarea textarea-bordered w-full resize-none"
            ></textarea>
          </article>
          <article v-else>
            <h1 class="font-bold">{{ question.question }}</h1>

            <section class="flex gap-5">
              <div
                v-for="option in mentalHealthContinuumAnswerOptions"
                :key="option.id"
                class="flex flex-col items-center"
              >
                <label for="">{{ option.option }}</label
                ><input
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
      <hr class="divider divider-primary border-0" />
      <h1 class="mb-10 text-3xl font-bold underline">PSYCHLOPS QUESTIONS</h1>

      <!-- PSYCHLOPS QUESTIONS -->
      <section>
        <div v-for="question in preTherapyPsychlopsQuestions" :key="question.id">
          <article v-if="question.type === 'text'">
            <h1 class="font-bold">{{ question.question }}</h1>
            <textarea
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
                <label for="">{{ option.option }}</label
                ><input
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
      <hr class="divider divider-primary border-0" />
      <h1 class="mb-10 text-3xl font-bold underline">GRiST Questions</h1>
      <!-- GRiST QUESTIONS -->
      <section>
        <div v-for="question in GRiSTQuestions" :key="question.id">
          <article v-if="question.type === 'MCQ'">
            <h1 class="font-bold">{{ question.question }}</h1>
            <div
              v-for="option in GRiSTAnswerMCQOptions"
              :key="option.id"
              class="flex items-center justify-start gap-5 py-2"
            >
              <input type="checkbox" class="checkbox" />
              <label class="">{{ option.option }}</label>
            </div>
          </article>
          <article v-else-if="question.type === 'scale'">
            <h1 class="font-bold">{{ question.question }}</h1>
            <section class="flex gap-5">
              <div
                v-for="option in GRiSTAnswerScaleOptions"
                :key="option.id"
                class="flex flex-col items-center"
              >
                <label for="">{{ option.option }}</label
                ><input
                  v-model="question.answer"
                  type="radio"
                  :name="question.id"
                  class="radio"
                  :value="option.option"
                />
              </div>
            </section>
          </article>
          <article v-else>
            <h1 class="font-bold">{{ question.question }}</h1>
            <section class="flex gap-5">
              <div
                v-for="option in GRiSTAnswerYorNOptions"
                :key="option.id"
                class="flex flex-col items-center"
              >
                <label for="">{{ option.option }}</label
                ><input
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
      <button class="btn" @click="submitAssessment()">Submit</button>
    </section>
  </div>
</template>

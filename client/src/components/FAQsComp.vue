<script setup lang="ts">
const questionsAndAnswers = [
  { id: 0, question: 'Question 0', answer: 'answer 0' },
  { id: 1, question: 'Question 1', answer: 'answer 1' },
  { id: 2, question: 'Question 2', answer: 'answer 2' },
  { id: 3, question: 'Question 3', answer: 'answer 3' },
  { id: 4, question: 'Question 4', answer: 'answer 4' },
  { id: 5, question: 'Question 5', answer: 'answer 5' },
]
</script>
<template>
  <section class="flex w-full flex-col gap-5 px-10 py-10 lg:w-1/2">
    <h1 class="text-5xl">Frequently Asked Questions</h1>
    <div v-for="question in questionsAndAnswers" :key="question.id">
      <section tabindex="0" class="collapse collapse-arrow bg-base-200">
        <div class="collapse-title text-xl font-medium">{{ question.question }}</div>
        <div class="collapse-content">
          <p>{{ question.answer }}</p>
        </div>
      </section>
    </div>
  </section>
</template>

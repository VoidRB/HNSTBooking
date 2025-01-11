<script setup lang="ts">
const props = defineProps({
  beneficiary: String,
})
</script>
<template>
  <h1 class="ml-2">{{ props.beneficiary }}</h1>
  <div class="flex h-full w-full flex-col py-10">
    <!-- Questions -->
    <section class="ml-5 h-96 overflow-y-scroll">
      <article class="mb-5">
        <h1>Question 1</h1>
        <textarea class="textarea textarea-bordered w-full" placeholder="Answer"></textarea>
      </article>
      <article class="mb-5">
        <h1 class="mb-5">Question 2 ( Likert )</h1>
        <section class="flex gap-5">
          <input type="radio" name="radio-1" class="radio" checked="true" value="1" />
          <input type="radio" name="radio-1" class="radio" value="2" />
          <input type="radio" name="radio-1" class="radio" value="3" />
          <input type="radio" name="radio-1" class="radio" value="4" />
          <input type="radio" name="radio-1" class="radio" value="5" />
        </section>
      </article>
      <article class="mb-5">
        <h1>Question 3</h1>
        <textarea class="textarea textarea-bordered w-full" placeholder="Answer"></textarea>
      </article>

      <article class="mb-5">
        <h1>Question 4</h1>
        <textarea class="textarea textarea-bordered w-full" placeholder="Answer"></textarea>
      </article>
    </section>
    <!-- Button -->
    <section class="mr-5 place-self-end"><button class="btn">Submit</button></section>
  </div>
</template>

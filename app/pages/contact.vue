<template>
  <div class="my-32 flex justify-center mx-auto h-full max-w-[800px]">
    <UForm :schema="schema" :state="state" @submit="onSubmit" class="flex mx-auto" validate-on="submit">
      <div class="grid grid-cols-4 gap-4">

        <UFormField label="Name" name="name" class="col-span-2">
          <UInput v-model="state.name" class="flex text-text-primary"/>
        </UFormField>

        <UFormField label="Phone" name="phone" class="col-span-2">
          <UInput v-model="state.phone" class="flex"/>
        </UFormField>
        
        <UFormField label="Email" name="email" class="col-span-4">
          <UInput v-model="state.email"  class="flex"/>
        </UFormField>

        <UFormField label="Subject" name="subject" class="col-span-4">
          <UInput v-model="state.subject" class="flex"/>
        </UFormField>

        <UFormField label="Message" name="message" class="col-span-4">
          <UTextarea v-model="state.message" class="flex" rows="5"/>
        </UFormField>


        <div class="col-span-4">
          <UButton 
            type="submit"
            icon="i-lucide-rocket"
            loading-auto
            loading-icon="i-lucide-loader"
            class="cursor-pointer w-full justify-center"
            variants="primary"
          >
          Submit
        </UButton>
        </div>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  name: z.string()
  .min(2, { error: "Must be at least 2 characters" }),

  email: z.string()
    .email({ error: "Must be a valid email format" }),

  phone: z.string()
    .regex(
      /^(?:\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
      { error: "Invalid UK phone number" }
    )
    .optional()
    .or(z.literal("")),

  subject: z.string()
    .min(5, { error: "Must be at least 5 characters" }),

  message: z.string()
    .min(10, { error: "Must be at least 10 characters" }),
  
  lastName: z.string().optional()
});



type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name    : '',
  email   : '',
  lastName: "",
  phone   : '',
  subject : '',
  message : ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (state.lastName) {
    toast.add({
      title      : 'Error',
      description: 'Invalid Form Submission',
      color      : 'error',
      icon       : 'subway:error'
    })
    return
  }

  setTimeout(() => {
    toast.add({ title: 'Success', description: 'Your form has been submitted successfuly.', color: 'success' })
    console.log(event.data)
  }, 250);
}
</script>

<style scoped>



</style>
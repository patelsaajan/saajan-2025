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

        <UFormField label="Subject" name="subject" class="col-span-4">
          <UTextarea v-model="state.subject" class="flex" rows="5"/>
        </UFormField>


        <div class="col-span-4">
          <UButton type="submit">Submit</UButton>
        </div>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { UTextarea } from '#components';

const schema = z.object({
  name: z.string().min(2, 'Must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string()
    .regex(
      /^(?:\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
      'Invalid UK phone number'
    ).optional(),
  subject: z.string().min(5, 'Must be at least 5 characters'),
  message: z.string().min(15, 'Must be at least 15 characters')
});


type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email  : undefined,
  phone  : undefined,
  subject: undefined,
  message: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<style scoped>



</style>
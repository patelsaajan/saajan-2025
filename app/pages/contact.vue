<template>
  <div class="my-32 flex justify-center mx-auto h-full max-w-[800px]">
    <UForm :schema="contactFormSchema" :state="state" @submit="onSubmit" class="flex mx-auto" validate-on="submit">
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
import { contactFormSchema, type ContactForm } from '~/schemas/contactForm'
import type { FormSubmitEvent } from '@nuxt/ui'

const state = reactive<Partial<ContactForm>>({
  name    : '',
  email   : '',
  lastName: "",
  phone   : '',
  subject : '',
  message : ''
})

// Assign schema for UForm
const schema = contactFormSchema

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<ContactForm>) {
  if (state.lastName) {
    toast.add({
      title      : 'Error',
      description: 'Invalid Form Submission',
      color      : 'error',
      icon       : 'subway:error'
    })
    return
  }

  try {
    const { data, error } = await useFetch('/api/send', {
      method: 'POST',
      body: state
    })

    if (data.value && !error.value) {
      toast.add({ title: 'Success', description: 'Your form has been submitted successfully.', color: 'success' })
      // Reset form
      Object.keys(state).forEach(key => state[key] = '')
    } else {
      toast.add({ title: 'Error', description: 'Form submission failed', color: 'error', icon: 'subway:error' })
      console.error(error.value)
    }
  } catch (err) {
    toast.add({ title: 'Error', description: 'Unexpected error', color: 'error', icon: 'subway:error' })
    console.error(err)
  }
}
</script>

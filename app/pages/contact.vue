<template>
  <div class="my-32 flex justify-center mx-auto h-full max-w-[800px]">
    <div class="flex flex-col items-center gap-8">
      <h1 class="w-full">Contact</h1>
      <!-- Contact Form -->
      <UForm
        v-if="showForm"
        :schema="contactFormSchema"
        :state="state"
        @submit="onSubmit"
        class="flex mx-auto"
        validate-on="submit"
      >
        <div class="grid grid-cols-4 gap-4">

          <UFormField label="Name" name="name" class="col-span-2">
            <UInput
              v-model="state.name"
              class="flex text-text-primary"
              placeholder="Saajan Patel"
            />
          </UFormField>

          <UFormField label="Phone" name="phone" class="col-span-2">
            <UInput
              v-model="state.phone"
              class="flex"
              placeholder="07794260570"
            />
          </UFormField>
          
          <UFormField label="Email" name="email" class="col-span-4">
            <UInput
              v-model="state.email"
              class="flex"
              placeholder="hello@contact.saajanpatel.co.uk"
            />
          </UFormField>

          <UFormField label="Subject" name="subject" class="col-span-4">
            <UInput
              v-model="state.subject"
              class="flex"
              placeholder="Subject"
            />
          </UFormField>

          <UFormField label="Message" name="message" class="col-span-4">
            <UTextarea
              v-model="state.message"
              class="flex"
              rows="5"
              placeholder="Enter text here..."
            />
          </UFormField>

          <div class="col-span-4">
            <UButton 
              type="submit"
              icon="i-lucide-rocket"
              loading-auto
              loading-icon="i-lucide-loader"
              class="cursor-pointer w-full justify-center text-background"
              variants="primary"
            >
              Submit
            </UButton>
          </div>
        </div>
      </UForm>

      <!-- Thank You State -->
      <div
        v-else
        class="flex flex-col border-2 p-8 gap-4 rounded-lg border-primary text-center"
      >
        <h2 class="text-xl font-semibold">Thank you, {{ submittedName }}!</h2>
        <p class="text-base">Your message has been sent my way 🚀</p>
        <p class="text-sm text-gray-600">
          I’ll reach out to you at <strong>{{ submittedEmail }}</strong> as soon as I can.
        </p>

        <UButton
          class="mt-6 w-fit mx-auto cursor-pointer text-background"
          icon="i-lucide-home"
          variant="solid"
          color="primary"
          @click="goHome"
        >
          Back to Home
        </UButton>
      </div>

      <LandingMarquee />
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactFormSchema, type ContactForm } from '~/schemas/contactForm'
import type { FormSubmitEvent } from '@nuxt/ui'

const showForm = ref(true)
const submittedName = ref('')
const submittedEmail = ref('')

const state = reactive<Partial<ContactForm>>({
  name    : '',
  email   : '',
  lastName: "",
  phone   : '',
  subject : '',
  message : ''
})

const toast = useToast()
const router = useRouter()

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
      toast.add({
        title      : 'Success',
        description: 'Your form has been submitted successfully.',
        color      : 'success'
      })

      // Store submitted name/email for thank-you view
      submittedName.value = state.name || ''
      submittedEmail.value = state.email || ''

      // Hide the form and show thank-you message
      showForm.value = false

      // Reset form fields (optional)
      Object.keys(state).forEach(key => state[key] = '')

    } else {
      toast.add({
        title      : 'Error',
        description: 'Form submission failed',
        color      : 'error',
        icon       : 'subway:error'
      })
      console.error(error.value)
    }
  } catch (err) {
    toast.add({
      title      : 'Error',
      description: 'Unexpected error',
      color      : 'error',
      icon       : 'subway:error'
    })
    console.error(err)
  }
}

function goHome() {
  showForm.value = true
  submittedName.value = ''
  submittedEmail.value = ''
  router.push("/")
}
</script>

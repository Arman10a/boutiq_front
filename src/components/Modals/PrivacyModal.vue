<template>
  <button class="pt-5" @click="open = true">Privacy Policy</button>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-screen-md">
              <div class="bg-transparent px-1 py-1 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="open = false" ref="cancelButtonRef">X</button>
              </div>
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                    <DialogTitle as="h3" class="text-base font-semibold text-gray-900">Privacy Policy</DialogTitle>
                    <div class="mt-2">
                      <div class="flex flex-col mb-3 gap-2">
                        <p class="text-sm text-gray-500">PRIVACY NOTICE</p>
                        <p class="text-sm text-gray-500">As an operator of luxury vacation rentals, Boutiq, Inc. and our affiliates (collectively, “Boutiq,” “we,” or “us”) respect your privacy and are committed to protecting your Personal Information. This Privacy Notice describes the types of Personal Information we collect and our practices for using, maintaining, sharing, and protecting it. It also describes the rights and choices you may have with respect to your Personal Information and how you may contact us about our privacy practices.</p>
                        <p class="text-sm text-gray-500">This  Privacy Notice applies to any and all websites, products, services, and mobile applications owned or operated by Boutiq (the “Services”). It does not apply to the collection and use of certain employment-related information. If you are a current or former Boutiq job applicant, employee, owner, director, officer, or contractor, please Contact Us for the appropriate policy.</p>
                        <p class="text-sm text-gray-500">When using our websites, you may choose to interact with features from third parties that operate independently from Boutiq, such as social media widgets and links to third-party websites. Boutiq has no control over and is not responsible for the privacy practices of such third parties. This Privacy Notice does not apply to the extent Boutiq does not own or control any linked websites or features you visit or use. We recommend that you familiarize yourself with the privacy practices of these third parties.</p>
                        <p class="text-sm text-gray-500">1. Types of Personal Information “Personal Information” means any information relating to an identified or identifiable individual. Examples of Personal Information Boutiq may collect include:</p>
                        <p class="text-sm text-gray-500">Payment information (credit card and other payment card information)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(false)
</script>
<style scoped>

</style>
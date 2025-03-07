<template>
  <button class="pt-5" @click="open = true">Terms & Conditions</button>
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
                    <DialogTitle as="h3" class="text-base font-semibold text-gray-900">Terms & Conditions</DialogTitle>
                    <div class="mt-2">
                      <div class="flex flex-col mb-3 gap-2">
                        <p class="text-sm text-gray-500">Boutiq’s Terms of Use</p>
                        <p class="text-sm text-gray-500">*** Agreement ***</p>
                        <p class="text-sm text-gray-500">Welcome to the Boutiq Homes & Properties website, operated by Boutiq, Inc. and our affiliates (collectively, “Boutiq,” “we,” or “us”). </p>
                        <p class="text-sm text-gray-500">The following terms and conditions ("Terms of Use") govern your use of the Boutiq website. The accessing and continued use of the Boutiq website by you ("User") constitutes your binding and conclusive acceptance and agreement of all such terms, conditions, and notices contained herein. If at any time the terms and conditions of this agreement are no longer acceptable to you, you should immediately cease all use of the Boutiq website and its ancillary products and services (the "Service"). This page states the terms and conditions under which you may use the Boutiq website and any other products or services offered by Boutiq through the Boutiq website. The right to use products or services by Boutiq is personal to you only and is not transferable to any other person or company. Boutiq has the right to refuse service to any User that refuses to abide by the terms and conditions herein or abuses their rights related to the Boutiq website.</p>
                        <p class="text-sm text-gray-500">*** Restrictions on Use ***</p>
                        <p class="text-sm text-gray-500">The Boutiq website, Service, or listings on third party platforms contains, or may contain, including but not limited to, products, services, images, information, illustrations, logos, email newsletters, software, photographs, audio and video clips, graphics, links and other material (collectively the "Content") that are protected by copyright, trademark or other proprietary rights, owned or controlled by Boutiq, third parties or their respective owners or licensees. All Content contained in the Boutiq website is copyrighted as a collective work of Boutiq pursuant to applicable copyright law. This material is for personal use only and you agree to comply with any use and other restrictions contained in any Content available on or accessed through the Boutiq website. Special rules may apply to the use of certain software and other items provided on the Boutiq website. You must access the information manually by request and not programmatically by macro or other automated means. You may not redistribute, sell, decompile, reverse engineer or disassemble any software or any other products on the Boutiq website in any manner unless prior written authorization is given. You may not use the contents for any unlawful or commercial purpose.</p>
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
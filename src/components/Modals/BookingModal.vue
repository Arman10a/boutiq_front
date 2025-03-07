<template>
    <button class="mt-5 border-2 border-black ml-28 mr-28 py-1 font-bold" @click="open = true">BOOK NOW</button>
    <TransitionRoot as="template" :show="open">
        <Dialog class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen  overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-w-2xl">
                            <div class="flex flex-col bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mt-3 text-center sm:mt-0 sm:text-left ">
                                        <DialogTitle as="h3" class="text-base font-semibold text-gray-900">Bookings</DialogTitle>
                                        <div class="mt-2">
                                            <div class="mb-3 gap-2">
                                                <div class="flex flex-col">
                                                    <div>
                                                        <div class="flex gap-5">
                                                            <input class=" bg-gray-200 rounded-3xl p-3" v-model="start" type="datetime-local" required />
                                                            <input class=" bg-gray-200 rounded-3xl p-3" v-model="end" type="datetime-local" required />
                                                        </div>
                                                        <div>
                                                            <div class="flex pt-5 justify-between">
                                                                <button type="button" class=" justify-center rounded-3xl bg-cyan-800 p-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-cyan-600 sm:mt-0 sm:w-auto" @click="open = false" ref="cancelButtonRef">Back</button>
                                                                <StripeCheckout  class="StripeCheckout"  :disabled="!start || !end" v-if="user" :start="start" :end="end" :productId="props.productId"></StripeCheckout>
                                                                <button @click="router.push('/login-page')" v-else class=" justify-center rounded-3xl bg-cyan-800 p-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-cyan-600 sm:mt-0 sm:w-auto">Log in</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
import {ref, defineProps} from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import '@vuepic/vue-datepicker/dist/main.css'
import StripeCheckout from "@/components/Stripe/StripeCheckout.vue";
import {store} from "@/store";
import router from "@/router";

const open = ref(false)
const start = ref("");
const end = ref("");
const user = store.state.user;
const props = defineProps(['productId']);

</script>

<style scoped>
.StripeCheckout:disabled {
    background-color: gray;
    cursor: not-allowed;
}
</style>
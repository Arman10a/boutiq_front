<template>
    <button class=" justify-center rounded-3xl bg-cyan-800 p-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-cyan-600 sm:mt-0 sm:w-auto" @click="checkout">💳 Pay with Stripe</button>
</template>

<script setup>
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { defineProps } from 'vue';

const stripePromise = loadStripe("pk_test_51QpsT5KbJmeKnpps0vrvyA0Cf86sPsvFrmUa6OkisfGl0JmN8KGdINgFzsYJWBPv6i1UDosTUwPQAVtHDAfUYrUb00OaVDf8hX");

const props = defineProps(['productId', 'start', 'end']);
const checkout = async () => {
    const stripe = await stripePromise;

    const { data } = await axios.post("http://127.0.0.1:8000/api/create-payment-intent", {
            product_id: props.productId,
            start: props.start,
            end: props.end,
        }, {
            headers: {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        });
             await stripe.redirectToCheckout({ sessionId: data.session });
}
</script>

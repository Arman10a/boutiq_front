<template>
    <div class=" flex flex-col justify-center items-center pb-14 gap-14">
            <div
                class="guest flex justify-center items-center max-w-screen-xl  gap-5"
                v-for="(product, index) in products" :key="product.id"
                :class="[index % 2 === 0 ? even : odd, { 'flex-row-reverse': index % 2 === 1 }]"
            >
                <div>
                    <img class="cursor-pointer scalable-img" :src="'http://127.0.0.1:8000/' + product.image_url"/>
                </div>
                <div  class="flex flex-col max-w-sm text-right gap-5">
                    <h1 class="text-2xl font-bold ">{{ product.name }}</h1>
                    <h1 class="text-lg text-cyan-600">{{product.address}}</h1>
                    <h3>{{ product.description }}</h3>
                    <BookingModal :productId="product.id"></BookingModal>
                </div>
    </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import { defineProps } from "vue";
import BookingModal from "@/components/Modals/BookingModal.vue";

const products = ref([]);

defineProps({
    index: Number,
    odd: Number,
    even: Number,
});

onMounted(async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});
</script>

<style scoped>

.scalable-img {
    transition: all .3s
}
.scalable-img:hover {
    transform: scale(1.03);
}
@media screen and (max-width: 1000px) {
    .guest {
        display: flex;
        flex-direction: column;
    }
    img {
        width: 390px;
    }
}
</style>
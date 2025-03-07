<template>
    <PaymentSuccessModal :show="showModal" @close="showModal = false" />
    <div id="portfolio" class="portfolio_bg flex justify-center items-center">
    <button class="bg-cyan-600 text-white px-14 py-6 text-xl font-bold mt-64">
      SEE ALL HOMES 🪶
    </button>
  </div>
  <GuestPage></GuestPage>
  <PaymentSuccessModal />
</template>

<script setup>
import GuestPage from "@/components/Portfolio/GuestPage.vue";
import {onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import PaymentSuccessModal from "../Modals/PaymentSuccessModal.vue"

const showModal = ref(false);
const route = useRoute();

onMounted( ()  => {
    const bookingId = route.query.bookingId
    const token = localStorage.getItem('token')
    if(bookingId){
         axios.post(`http://127.0.0.1:8000/api/bookings/${bookingId}/update` ,{
            success: route.query.success
        },{
            headers: {
                Authorization : `Bearer ${token}`
            }
        }).then((response) => {
            if(response.data.success === true){
                showModal.value = true;
                setTimeout(() => {
                    showModal.value = false;
                    window.location.replace('http://localhost:8080/portfolio');
                }, 3000);

            } else {
                console.log(response.data)
            }
        })
    }
    const code = route.query.code;
    if(code){
        axios
            .get(`http://127.0.0.1:8000/api/google/callback?code=${code}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log('Tokens:', response.data);
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
})
</script>

<style scoped>
  .portfolio_bg {
    background-image: url('@/assets/images/portfolio.png');
    background-attachment: fixed;
    height: 100vh;
  }
  @media screen and (max-width: 600px) {
    .portfolio_bg {
      height: 60vh;
    }
    button {
      margin-top: 130px ;
    }
  }
</style>
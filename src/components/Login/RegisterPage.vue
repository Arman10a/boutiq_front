<template>
  <div class="register" >
    <div class="registerDiv bg-transparent py-12 px-36">
      <div class="flex justify-center ">
        <img class="max-w-36 " src="../../assets/images/logo1.jpg" alt=""/>
      </div>
      <div style="margin-top:10px;">
        <input class="bg-gray-800" style="border: black 1px solid ; border-radius: 2px; padding: 10px 20px; color: white" v-model="password" type="password" placeholder="Password">
      </div>
      <div style="margin-top:10px;">
        <input class="bg-gray-800" style="border: black 1px solid ; border-radius: 2px; padding: 10px 20px; color: white" v-model="email" type="email" placeholder="Email">
      </div>
      <div style="margin-top:10px;">
        <input class="bg-gray-800" style="border: black 1px solid ; border-radius: 2px; padding: 10px 20px; color: white" v-model="name" type="text" placeholder="First Name">
      </div>
      <div style="margin-top:10px;">
        <input class="bg-gray-800" style="border: black 1px solid ; border-radius: 2px; padding: 10px 20px; color: white" v-model="last_name" type="text" placeholder="Last Name">
      </div>
      <div style="display:flex; flex-direction:column">
        <button class="bg-gray-800" @click="submit()" style="border:black 1px solid;  border-radius: 0; margin-top: 10px; padding: 10px 30px">
          Create New Account
        </button>
      </div>
        <p class="pt-2 text-center font-bold text-md text-gray-900" v-if="responseMessage">{{ responseMessage }}</p>
    </div>
  </div>
</template>

<script setup>

import axios from 'axios'
import { ref } from "vue"
import router from "@/router";

const email = ref('');
const password = ref('');
const name = ref('');
const last_name = ref('');
const responseMessage = ref('');
function submit() {

  axios.post('http://127.0.0.1:8000/api/register', {
    password: password.value,
    email: email.value,
    name: name.value,
    last_name: last_name.value,
  }).then((response) => {
    if(response.data.success)
    {
      responseMessage.value = 'Account Created'
        setTimeout(() => {
            router.push('/login-page')
        },3000)
    }else
    {
        responseMessage.value = 'Incorrect information. Try again.'
    }
  }).catch((error) => {
    console.log(error,'error')
  });
}
</script>

<style scoped>
  .register {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center ;
    align-items: center;
    color: white;
    flex-direction: column;
    background-size: cover;
    background-image: url('@/assets/images/logo.jpg');
    background-attachment: fixed;
  }
  input:focus {
    outline:none;
  }
  @media screen and (max-width: 1000px) and (min-width: 200px) {
    .register {
      width: 100%;
    }
    .registerDiv {
      padding: 0;
    }
  }
</style>
<template>
  <div class="login" >
    <div class="loginDiv bg-transparent py-12 px-36">
      <div class="flex justify-center ">
        <img class="max-w-36 " src="../../assets/images/logo1.jpg" alt=""/>
      </div>
      <div>
        <input class="bg-gray-800" style="border: black 1px solid ; border-radius: 1px; padding: 10px 20px; color: white" v-model="email" type="text" placeholder="Email"/>
      </div>
      <div style="margin-top:10px;">
        <input class="bg-gray-800" style="border: black 1px solid ; border-radius: 1px; padding: 10px 20px; color: white" v-model="password" type="password" placeholder="Password"/>
      </div>
      <div style="display:flex; flex-direction:column">
        <button class="bg-gray-800" @click="submit()" @submit.prevent="login" style="border:black 1px solid;   border-radius: 0; margin-top: 10px; padding: 10px 30px">
          Log in
        </button>
        <button class="bg-gray-800" @click="router.push({name: 'register-page'})" style="border:black 1px solid;  border-radius: 0; margin-top: 10px; padding: 10px 30px">
          Create account
        </button>
          <div class="flex pt-2 items-center justify-center">
            <GoogleSignInButton></GoogleSignInButton>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { ref} from "vue";
import axios from '@/axios';
import {store} from "@/store";
import GoogleSignInButton from "@/components/Login/GoogleSignInButton.vue";


const email = ref('')
const password = ref('')

function submit() {
    axios.post('http://127.0.0.1:8000/api/login',
      {
       email: email.value,
       password: password.value,
    }).then((response)=>{
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            store.commit('setUser', response.data.user);
            router.push('/portfolio');
        } else {
            router.push('/register-page');
        }
    }).catch(()=> {
        router.push('/home');
    })
}

</script>

<style scoped>
  .login {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center ;
    align-items: center;
    background-size: cover;
    color: white;
    flex-direction: column;
    background-image: url('@/assets/images/logo.jpg');
    background-attachment: fixed;
  }
  input:focus {
    outline: none;
  }
  @media screen and (max-width: 1000px) {
    .login {
      width: 100%;
    }
    .loginDiv {
      padding: 0;

    }
  }
</style>

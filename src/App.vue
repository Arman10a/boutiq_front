<template>
  <div>
    <HomeHeader/>
    <RouterView/>
    <FormFooter/>
    <HomeFooter/>
  </div>
</template>

<script setup>
import HomeHeader from "@/components/HeaderFooter/HomeHeader.vue";
import FormFooter from "@/components/HeaderFooter/FormFooter.vue";
import HomeFooter from "@/components/HeaderFooter/HomeFooter.vue";
import {onMounted} from 'vue';
import axios from "axios";
import {store} from "@/store";

onMounted(() => {
    const token = localStorage.getItem('token')
    if(token){
         axios.post('http://127.0.0.1:8000/api/user', {},{
            headers: {
                Authorization: `Bearer ${token}`
            }
         }).then((response) => {
             store.commit('setUser', response.data)
         }).catch(error => {
             console.log(error)
         })

    }

})
</script>

<style></style>

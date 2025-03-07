<template>
  <div id="why-boutiq" class="mt-12 ">
    <div class="work1 flex flex-col justify-center items-center ">
      <h1 class="work1H1 text-black font-bold text-5xl mb-12">Boutiq works with ...</h1>
      <h3 class="work1H3 text-cyan-600 text-xl font-bold">Home Buyers | Vacation Rental Owners | Real Estate Investors | Agents & Brokerages</h3>
      <h3 class="work1H3 text-lg max-w-4xl text-center mt-8">Boutiq Homes is your white-glove, full-service luxury vacation rental home concierge. We optimize rental investment ROI by combining the forward-looking insights of our proprietary AI-driven forecasting and pricing tools with exceptional guest hospitality, professional design, and meticulous home care. From the home search and buying process to daily hospitality and rental operations delivering market-leading vacation rental returns, the Boutiq Homes team has you covered.</h3>
      <button @click="router.push({name: 'agent-page'})" class=" mt-8 py-4 px-16 mb-12 text-2xl text-white bg-cyan-600">LEARN MORE ABOUT WHO WE SERVE</button>
    </div>
    <div class=" flex justify-center items-center ">
      <div class="work2 flex justify-center items-center  max-w-4xl mb-12">
        <div class="work2Div text-center flex flex-col justify-center items-center mr-4">
          <img src="../../assets/images/1.png"/>
          <h1 class="text-lg font-bold">AI-Driven Rental Revenue Forecasting & Pricing</h1>
          <h3>Boutiq's proprietary machine learning (ML) algorithms are best-in-class for forecasting future rental income potential for homes, and for setting nightly rates for each home to maximize annual rental revenue.</h3>
        </div>
        <div class="work2Div text-center flex flex-col justify-center items-center mr-4">
          <img src="../../assets/images/2.png"/>
          <h1 class="text-lg font-bold">Focus on Luxury Homes in Leisure Destinations</h1>
          <h3>Boutiq is singularly focused on larger, upscale homes. This tier of luxury vacation rentals consistently earns exceptional cap rates for home owners and investors. And our focus strengthens our expertise.</h3>
        </div>
        <div class="work2Div text-center flex flex-col justify-center items-center mr-4">
          <img src="../../assets/images/3.png"/>
          <h1 class="text-lg font-bold">Exceptional Hospitality & Guest Experiences</h1>
          <h3>While most home owners and operators focus on investing as little as possible into homes and doing as little as possible for guests, Boutiq knows that 5-star stays and delighted guests deliver more ROI. </h3>
        </div>
        <div class="work2Div text-center flex flex-col justify-center items-center ">
          <img src="../../assets/images/4.png"/>
          <h1 class="text-lg font-bold">Meticulous Home Care & Quality Management</h1>
          <h3>Protecting your home is just as important as optimizing your rental returns. Boutiq's white-glove management is obsessive. We coordinate housekeeping and home servicing - protecting your home is our top priority.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import router from "@/router";
import {onMounted} from "vue";

onMounted(() => {
  let location = window.location.hash;
  if (location)
  {
    location = location.replace("#", '')
  }
  const element = document.getElementById(location);
  if(element)
  {
    element.scrollIntoView({behavior: "smooth"})
  }
})
</script>
<style scoped>
  @media screen and (max-width: 600px) {
    .work1 {
      padding: 20px;
      align-items: center;
    }
    .work1H1 {
      font-size: 30px;
    }
    .work1H3 {
      font-size: 13px;
      text-align: center;
    }
    .work2 {
      display: flex;
      flex-direction: column;
    }
    .work2Div {
      max-width: 300px;
      padding: 20px;
      gap: 10px;
    }
    button {
      padding: 30px;
      font-size: 15px;
    }
  }
</style>
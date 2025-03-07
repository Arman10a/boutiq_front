<template>
<div class="overview flex bg-black items-center justify-center p-12 pt-52">
  <div class="flex flex-col items-center max-w-xl gap-5">
    <h1 class="text-5xl text-white font-bold">Our proprietary AI</h1>
    <h1 class="text-5xl text-cyan-600 mb-5">optimizes rental yields.</h1>
    <h3 class="text-center text-white max-w-md mb-12">White-glove, AI-driven luxury home buying & rental management concierge for buyers, owners & real estate investors, as well as real estate agents and brokerages seeking optimum yields on upscale vacation rental homes.</h3>
    <button @click="submit('contact')" class="py-3 px-3 font-bold bg-cyan-600 text-white">GET IN TOUCH TO LEARN MORE</button>
  </div>
  <div class="max-w-xl">
    <img src="@/assets/images/AgentPage/overview.png" alt="overview" />
  </div>
</div>
</template>

<script setup>
import router from "@/router";
const submit = (name = 'home') => {

  router.push(
  {
    hash: '#' + name
  })

  const element = document.getElementById(name);
  if(element)
  {
    element.scrollIntoView({behavior: "smooth"});
  }
}
</script>

<style scoped>
  @media  screen and (max-width: 600px) {
    .overview {
      display: flex;
      flex-direction: column;
    }
    img {
      padding-top: 50px;
    }
  }
</style>
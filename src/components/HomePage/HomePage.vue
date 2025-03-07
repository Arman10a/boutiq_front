<template>
  <div id="home" class="home">
    <div class="homeDiv pl-40 pt-72" >
      <div class="homeDiv1 flex-col ml-25">
        <h1 class="homeDiv1H1 font-bold text-6xl">
          Maximum ROI.
        </h1>
        <h1 class="text-6xl mt-7">
          Zero effort.
        </h1>
        <h3 class="text-xl leading-relaxed mt-7 max-w-md text-white">
          Boutiq Homes puts the vacation back in owning a luxury vacation rental home, and passive back in passive income investing. Enjoy all of the benefits of buying and owning a short-term rental property, without the headaches. Opportunity knocks.
        </h3>
        <button @click="submit('contact')" class="bg-cyan-500 px-16 py-3 text-xl mt-7 text-white">
          CONNECT WITH BOUTIQ
        </button>
      </div>
      <div class="homeDiv2 flex mt-20 text-white mr-20">
        <div class="mr-20">
          <h1 class="text-5xl font-bold">
            >$80M
          </h1>
          <h3 class="max-w-56 text-lg">
            Combined AUM value of Boutiq's luxury vacation rental portfolio
          </h3>
        </div>
        <div class="mr-20">
          <h1 class="text-5xl font-bold">
            >10 Yrs
          </h1>
          <h3 class="max-w-56 text-lg">
            Experience as Vrbo Premier & Airbnb Superhosts of luxury rental homes
          </h3>
        </div>
        <div class="mr-20">
          <h1 class="text-5xl font-bold">
            >4.9★
          </h1>
          <h3 class="max-w-56 text-lg">
            Host ratings across all platforms, including Airbnb, Vrbo, Kid & Coe, etc.
          </h3>
        </div>
        <div class="mr-20">
          <h1 class="text-5xl font-bold">
            >20,000
          </h1>
          <h3 class="max-w-56 text-lg">
            Delighted guests who've stayed at Boutiq's luxury vacation rental homes
          </h3>
        </div>
      </div>
    </div>
    <div class="home2 bg-white flex align-center justify-center mt-16 mb-16">
      <div class="homeImg mt-16 mr-12">
        <img src="../../assets/images/home2.png" alt=""/>
      </div>
      <div class="home2Div1 flex flex-col mt-16 ml-12 items-center gap-5">
        <h1 class="font-bold text-5xl">
          Buy smarter,
        </h1>
        <h1 class="text-cyan-600 text-5xl">
          with confidence.
        </h1>
        <h3 class="text-black text-lg max-w-lg">
          The Boutiq Homes team delivers bespoke, industry-best real estate and vacation rental management services to luxury vacation home buyers, owners, and investors, end-to-end. Buy with confidence leveraging the power of Boutiq's proprietary machine learning (ML) algorithms for forecasting rental returns and dynamically pricing luxury vacation rental homes to optimize ROI, as well as our team's extensive vacation rental industry experience and expertise.
        </h3>
        <button class="px-8 py-2 bg-cyan-600 text-white">
          GET IN TOUCH
        </button>
      </div>
    </div>
  </div>
  <SponsorPage></SponsorPage>
  <WorkPage id="why-boutiq"></WorkPage>
</template>

<script setup>

import SponsorPage from "@/components/HomePage/SponsorPage.vue";
import WorkPage from "@/components/HomePage/WorkPage.vue";
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
  .home {
    background-image: url('@/assets/images/logo.jpg');
    background-size: cover;
    background-attachment: fixed;
  }
  @media screen and (max-width: 1000px){
    .home {
      background-size: 100% 100vh;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
    }
  .homeDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-left: 0;
    padding-right: 0;
    margin: 0;
  }
  .homeDiv1 {
    align-items: center;
  }
  h1{
    font-size: 40px;
  }
  h3{
    font-size: 15px;
    max-width: 300px;
  }
  button{
    padding: 10px;
  }
  .homeDiv2{
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    justify-content: center;
    padding-top: 50px ;
    margin: 0;
    gap: 20px;
  }
  .home2{
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 30px;
  }
  .homeImg{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 30px;
  }
  .home2Div1{
    padding: 20px;
    margin: 0;
  }
  }
</style>
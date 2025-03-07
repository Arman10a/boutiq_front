<template>
  <div id="vacation" class="vacation bg-slate-100 flex items-center justify-center gap-12 p-16">
    <div class="flex flex-col text-left justify-center max-w-xl gap-5">
      <h1 class="text-2xl font-bold">Second Home & Vacation Rental Buyers</h1>
      <h3 class="text-lg">Vacation rental home buyers and real estate investors trust Boutiq Homes to guide their second home and vacation rental investment purchases in order to unlock superior rental returns while meeting their personal use goals.</h3>
      <h3 class="text-lg">The Boutiq Homes team possesses extensive expertise and experience working across the real estate technology ("proptech"), vacation rental / short-term rental ("STR"), online travel, and data science sectors. </h3>
      <h3 class="text-lg">We pair our uncommon industry backgrounds and skillsets with Boutiq's proprietary machine learning (ML) tools not only to forecast the rental potential of luxury vacation homes across the United States, but also to furnish the homes and manage their hospitality operations so that our AI pricing tools can dynamically set nightly rates that will deliver maximum ROI.</h3>
      <h3 class="text-lg">Best of all, this Boutiq Homes home-buying consulting service is free to buyers who partner with Boutiq for pricing, marketing, and ongoing vacation rental management support!</h3>
      <h3 class="text-lg">Want to learn more? <a href="">Let's connect!</a></h3>
    </div>
    <div>
      <img src="@/assets/images/AgentPage/rental2.png" alt=""/>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  @media screen and (max-width: 600px) {
    .vacation {
      display: flex;
      flex-direction: column;
    }
    img {
      width: 340px;
    }
  }
  img {
    max-width: 570px;
    max-height: 800px;
  }
</style>
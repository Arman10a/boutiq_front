<template>
  <div class="flex flex-col items-center justify-center p-32 gap-12">
  <div>
    <h1 class="text-5xl text-black font-bold">Boutiq Homes is for ...</h1>
  </div>
    <div class="overview2 flex  items-center justify-center gap-5">
      <div class="flex flex-col items-center justify-center gap-3 text-center">
        <img class="img_transform" src="@/assets/images/AgentPage/rental.png" alt="Rental"/>
        <h1 class="font-bold text-lg max-w-40 ">Vacation Rental Home Buyers</h1>
        <h3 class="text-lg max-w-lg">Boutiq Homes guides your purchase of the best vacation home for your goals & needs</h3>
      </div>
      <div class="flex flex-col items-center justify-center gap-3 text-center">
        <img class="img_transform" src="@/assets/images/AgentPage/luxury.png" alt="Rental"/>
        <h1 class="font-bold text-lg max-w-40 ">Luxury Vacation Home Owners</h1>
        <h3 class="text-lg max-w-lg">Boutiq's team optimizes your home's rental revenue & protects its integrity</h3>
      </div>
      <div class="flex flex-col items-center justify-center gap-3 text-center">
        <img class="img_transform" src="@/assets/images/AgentPage/estate.png" alt="Rental"/>
        <h1 class="font-bold text-lg max-w-40 ">Real Estate Investors</h1>
        <h3 class="text-lg max-w-lg">Get the best cap rates by investing in short-term rentals recommended by Boutiq</h3>
      </div>
      <div class="flex flex-col items-center justify-center gap-3 text-center">
        <img class="img_transform" src="@/assets/images/AgentPage/agent.png" alt="Rental"/>
        <h1 class="font-bold text-lg max-w-40 ">Agents & Brokerages</h1>
        <h3 class="text-lg max-w-lg">Offer clients industry-best sophistication for spotting homes that earn the best ROI</h3>
      </div>
    </div>

</div>
</template>

<script setup>

</script>

<style scoped>
  .img_transform {
    cursor: pointer;
    transition: all .3s;
  }
  .img_transform:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 600px) {
    .overview2 {
      display: flex;
      flex-direction: column;
    }
  }
</style>
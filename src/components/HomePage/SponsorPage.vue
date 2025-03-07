<template>
  <div class="bg-black flex flex-col items-center">
    <div>
      <h1 class="sponsorH1 text-white flex items-center font-bold text-5xl mt-12 mb-2">Recognized by</h1>
    </div>
    <div class="sponsor1 bg-black  flex items-center justify-center">
      <div class="sponsor1Div flex flex-col items-center mt-12 mb-20 gap-2">
        <img class="cursor-pointer" src="../../assets/images/sponsor1.png"/>
        <h1 class="text-white text-lg font-bold">
          Airbnb Superhost
        </h1>
        <h3 class="max-w-60 text-center text-cyan-600 text-base">
          Boutiq is an Airbnb Superhost in recognition of our world-class homes & hospitality
        </h3>
      </div>
      <div class="sponsor1Div flex flex-col items-center mt-12 mb-20 gap-2">
        <img class="cursor-pointer" src="../../assets/images/sponsor2.png"/>
        <h1 class="text-white text-lg font-bold">
          Vrbo Premier Host
        </h1>
        <h3 class="max-w-60 text-center text-cyan-600 text-base">
          Vrbo recognizes Boutiq for consistently exceptional guest experiences and reviews
        </h3>
      </div>
      <div class="sponsor1Div flex flex-col items-center mt-12 mb-20 gap-2">
        <img class="cursor-pointer" src="../../assets/images/sponsor3.png"/>
        <h1 class="text-white text-lg font-bold">
          Moment Makers - Episode 1
        </h1>
        <h3 class="max-w-60 text-center text-cyan-600 text-base">
          Boutiq's co-founders were featured in Vrbo's first episode of the "Moment Makers" series
        </h3>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
  @media screen and (max-width: 600px) {
    .sponsor1 {
      display: flex;
      flex-direction: column;
    }
    .sponsor1Div {
      padding: 20px;
      margin: 0;
    }
    .sponsorH1 {
      font-size: 40px;
      padding: 15px;
    }
  }
</style>
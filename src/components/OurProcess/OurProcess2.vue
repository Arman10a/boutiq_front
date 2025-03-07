<template>
<div class="our-process text-white">
  <div class=" text-5xl text-center ">
    <h1 class="p-12 font-bold">
      Our Process
    </h1>
  </div>
  <div class="our1 flex justify-center">
    <div class="our2 our2Span flex flex-col items-center  p-6 max-w-xs text-center gap-2 ">
        <span class="text-2xl border-solid border-2 border-white px-5 py-3 font-semibold ">1</span>
      <h1 class="font-xl font-bold">
        Talk to Boutiq Homes about your rental home purchase goals
      </h1>
      <h3>
        Schedule a call with one of Boutiq Homes' expert team members to learn more about our process, ask questions, and share your vacation rental goals.
      </h3>
    </div>
    <div>
      <div class="our2 flex flex-col items-center  p-6 max-w-xs text-center gap-2 ">
        <span class="text-2xl border-solid border-2 border-white px-5 py-3 font-semibold ">2</span>
        <h1 class="font-xl font-bold">
          Boutiq analyzes markets and recommends homes that fit your search
        </h1>
        <h3>
          Boutiq Homes recommends markets and homes based on your search criteria (budget, usage and rental goals, geographic preferences, etc.).
        </h3>
      </div>
    </div>
    <div>
      <div class="our2 flex flex-col items-center  p-6 max-w-xs text-center gap-2 ">
        <span class="text-2xl border-solid border-2 border-white px-5 py-3 font-semibold ">3</span>
        <h1 class="font-xl font-bold">
          Purchase Boutiq-recommended vacation rental with referral agent
        </h1>
        <h3>
          Boutiq Homes and our partner buyer's agents guide you through every step of the buying process, from making an offer to understanding financing options.
        </h3>
      </div>
    </div>
    <div>
      <div class="our2 flex flex-col items-center justify-center p-6 max-w-xs text-center gap-2 ">
        <span class="text-2xl border-solid border-2 border-white px-5 py-3 font-semibold ">4</span>
        <h1 class="font-xl font-bold">
          Work with Boutiq and pro design partners to setup and furnish home
        </h1>
        <h3>
          Once your home is under contract, Boutiq's vacation rental experts and design partners guide the set up and furnishing of your home for max ROI.
        </h3>
      </div>
    </div>
  </div>
  <div class="our1 flex justify-center">
    <div class="our2 flex flex-col items-center  p-6 max-w-xs text-center gap-2 ">
      <span class="text-2xl border-solid border-2 border-white px-5 py-3 font-semibold ">5</span>
      <h1 class="font-xl font-bold">
        Boutiq lists and manages your home as a rental
      </h1>
      <h3>
        Once your home is ready to rent, we manage all aspects of your rental, from listing optimization to hospitality.
      </h3>
    </div>

      <div class="our2 flex flex-col items-center  p-6 max-w-xs text-center gap-2 ">
        <span class="text-2xl border-solid border-2 border-white px-5 py-3 font-semibold ">6</span>
        <h1 class="font-xl font-bold">
          Stay at your vacation home anytime
        </h1>
        <h3>
          It's your home. If you want to block dates to use your vacation home, just let us know and enjoy your stay! No stress necessary.
        </h3>
      </div>


      <div class="our2 flex flex-col items-center  p-6 max-w-xs text-center gap-2 ">
        <span class="text-2xl border-solid border-2 border-white px-5 py-3 font-semibold ">7</span>
        <h1 class="font-xl font-bold">
          Boutiq manages guests and protects your home
        </h1>
        <h3>
          Boutiq manages your rental listings, guests, and optimizes rental revenue while safeguarding your home.
        </h3>
      </div>


      <div class="our2 flex flex-col items-center  p-6 max-w-xs text-center gap-2 ">
        <span class="text-2xl border-solid border-2 border-white px-5 py-3 font-semibold ">8</span>
        <h1 class="font-xl font-bold">
          Enjoy optimal vacation rental ROI, effortlessly :-)
        </h1>
        <h3>
          Kick back and relax knowing Boutiq is optimizing your investment and keeping your home safe and secure.
        </h3>
      </div>

  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
  .our-process {
    background-image: url('@/assets/images/Ourprocess2.png');
    background-attachment: fixed;
    background-size: cover;
  }
  @media screen and (max-width: 600px) {
   .our1 {
     display: flex;
     flex-direction: column ;
     align-items: center;
   }
    span {
      padding: 0;
    }
    .our2 {
      padding: 15px;
      gap: 5px;
      justify-content: start;
    }
  }
  @media screen and (max-width: 1000px) {
    .our2Span {
      max-width: 200px;
    }
  }
</style>
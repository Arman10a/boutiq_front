<template>
  <div id="agents" class="agents bg-white flex items-center justify-center gap-12 p-16">
    <div>
      <img src="@/assets/images/AgentPage/agent2.png"/>
    </div>
    <div class="flex flex-col text-left justify-center max-w-xl gap-5">
      <h1 class="text-2xl font-bold">Real Estate Agents & Brokerages</h1>
      <h3 class="text-lg">There's never been a more exciting time to invest in luxury vacation rental properties. Their high yields offer real estate agents and their brokerages opportunities to activate inactive buyer leads, to increase the frequency with which a home buyer client purchases homes, and to raise buyers' budget ceilings by virtue of the exceptional cap rates that high-performing luxury vacation rental properties can deliver. But the short-term rental market landscape is complex and often poorly-understood. Boutiq Homes offers a wealth of industry experience and know-how backed by our proprietary data science tools to support you and your clients with industry-best market intelligence.</h3>
      <h3 class="text-lg">By partnering with Boutiq, real estate agents and brokerages can confidently advise luxury vacation rental home buyers to purchase the best properties for their investment and personal use goals. Even more, once a home goes under contract, Boutiq's operations team and professional designer partners will guide the setup and furnishing of the home, as well as manage its rental operations and care to maximize rental ROI while protecting against wear and tear.</h3>
      <h3 class="text-lg">When you partner with Boutiq, you are offering your home buyer and investor clients one-of-a-kind vacation rental industry expertise and investment intelligence, as well as hassle-free home and rental management. And that's an enticing value proposition to motivate home buyers.</h3>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  @media screen and (max-width: 600px) {
    .agents {
      display: flex;
      flex-direction: column-reverse;
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
<template>
<div id="partners" class="flex flex-col pt-12 items-center">
  <div class="flex flex-col gap-5 items-center pb-12">
    <h1 class="text-6xl font-bold">Our Partners</h1>
    <h3 class="max-w-screen-lg text-center text-lg">Boutiq is proud to partner with these and other leading brands and we feature their premium products and services at our portfolio of luxury vacation rental properties across the United States</h3>
  </div>
  <div class="partners1 flex max-w-screen-lg gap-5 items-end pb-12">
    <div class="flex flex-col gap-3 w-3/12 items-center ">
      <img src="@/assets/images/Partners/milton.png"/>
      <h1>
        Milton Sleep Co.
      </h1>
    </div>
    <div class="flex flex-col gap-5 w-3/12 items-center ">
      <img src="@/assets/images/Partners/arrived.png"/>
      <h1>
        Arrived Homes
      </h1>
    </div>
    <div class="flex flex-col gap-5 w-3/12 items-center ">
      <img src="@/assets/images/Partners/yeti.png"/>
      <h1>
        Yeti
      </h1>
    </div>
    <div class="flex flex-col gap-3 w-3/12 items-center ">
      <img src="@/assets/images/Partners/safely.png"/>
      <h1>
        Safely Insurance
      </h1>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
  img {
      transition: all .3s;
      cursor: pointer;
    }
  img:hover {
      transform: scale(1.05);
    }
@media screen and (max-width: 600px) {
    .partners1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-left: 15px;
      }
  }
</style>
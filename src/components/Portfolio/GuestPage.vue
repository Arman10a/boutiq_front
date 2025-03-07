<template>
<div class=" flex flex-col justify-center items-center gap-14">
  <div class="guest3 flex justify-center items-center max-w-screen-md gap-5">
    <div class="flex flex-col gap-5 text-center items-center">
      <h1 class="text-5xl font-bold">Be our guest!</h1>
      <h3 class="max-w-5xl">There's no better way to appreciate what makes Boutiq unique than to experience our white-glove hospitality firsthand at one of our portfolio luxury vacation rental homes.</h3>
      <button class="bg-cyan-600 font-bold text-xl text-white px-10 py-5">BOOK NOW 🪶</button>
    </div>
    <div>
      <img class="scalable-img cursor-pointer" src="@/assets/images/GuestPage/boutiq.png" alt="Boutiq" />
    </div>
  </div>
    <ProductList></ProductList>
</div>
</template>

<script setup>

import ProductList from "@/components/Product/ProductList.vue";
</script>

<style scoped>
  .scalable-img {
    transition: all .3s
  }
  .scalable-img:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 600px) {
    img {
      width: 390px;
    }
    .guest3 {
      display: flex;
      flex-direction: column-reverse;
      max-width: 300px;
      padding-top: 30px;
    }
  }
</style>
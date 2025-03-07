<template>
<div id="story" class="story1 flex justify-center items-center bg-black pt-52 pb-20">
  <div class="flex flex-col  text-white  max-w-xl gap-5 ">
    <div class="text-center">
      <h1 class="font-bold text-6xl">Our Story</h1>
    </div>
    <h3 class="text-lg">Boutiq evolved from the passion project of married co-founders Rena Pacheco-Theard and Dan Driscoll, who are longtime Airbnb Plus Superhosts and Vrbo Premier Partners and veterans of the technology, travel, and "PropTech" sectors.</h3>
    <h3 class="text-lg">Convinced that first-class hospitality could be combined with data science to deliver exceptional guest experiences and market-leading returns to vacation rental homeowners, they created algorithms that allowed them to dynamically price vacation homes for short-term rental purposes, as well as to forecast the rental earning potential of homes listed as STRs across the country.</h3>
    <h3 class="text-lg">We call it "The Boutiq Method" 🪶</h3>
  </div>
  <div class="max-w-sm">
    <img src="@/assets/images/AboutPage/1story.png" alt="" />
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
@media screen and (max-width: 600px) {
    .story1 {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    h3 {
      padding-right: 10px;
      padding-left: 10px;
    }
}
  @media screen and (max-width: 1000px) {
    .story1 {
      display: flex;
      flex-direction: column;
    }
  }
</style>
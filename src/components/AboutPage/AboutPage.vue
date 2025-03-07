<template>
  <div class="about-page">
    <StoryPage></StoryPage>
    <TeamPage></TeamPage>
    <PartnersPage></PartnersPage>
  </div>

</template>

<script setup>

import StoryPage from "@/components/AboutPage/StoryPage.vue";
import TeamPage from "@/components/AboutPage/TeamPage.vue";
import PartnersPage from "@/components/AboutPage/PartnersPage.vue";
import {onMounted} from "vue";

onMounted(() => {
  let location = window.location.hash;
  if (location)
  {
    location = location.replace("#", '')
  }
  const element = document.getElementById(location);
  if(element)
  {
    element.scrollIntoView({behavior: "smooth"})
  }
})
</script>

<style scoped>

</style>
<template>
<div id="agent-home">
  <OverviewPage></OverviewPage>
  <OverviewPageTwo></OverviewPageTwo>
  <VacationPage></VacationPage>
  <LuxuryPage></LuxuryPage>
  <RealEstatePage></RealEstatePage>
  <AgentPage2></AgentPage2>
</div>
</template>

<script setup>

import OverviewPage from "@/components/AgentPage/OverviewPage.vue";
import OverviewPageTwo from "@/components/AgentPage/OverviewPageTwo.vue";
import VacationPage from "@/components/AgentPage/Vacation/VacationPage.vue";
import LuxuryPage from "@/components/AgentPage/Vacation/LuxuryPage.vue";
import RealEstatePage from "@/components/AgentPage/Vacation/RealEstatePage.vue";
import AgentPage2 from "@/components/AgentPage/Vacation/AgentPage2.vue";
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
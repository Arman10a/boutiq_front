<template>
<div class=" flex flex-col justify-center items-center text-center ">
  <div class=" flex justify-center items-center max-w-44 mt-12 mb-12 gap-5 ">
    <a class="bg-cyan-600" href="https://x.com" target="_blank">
      <img src="../../assets/images/x.png" alt="Instagram" />
    </a>
    <a class="bg-cyan-600" href="https://www.linkedin.com/" target="_blank">
      <img src="../../assets/images/linkedin.png" alt="Instagram" />
    </a>
    <a class="bg-cyan-600" href="https://www.instagram.com" target="_blank">
      <img src="../../assets/images/instagram.png" alt="Instagram" />
    </a>
    <a class="bg-cyan-600" href="https://www.facebook.com" target="_blank">
      <img src="../../assets/images/facebook.png" alt="Instagram" />
    </a>
    <a class="bg-cyan-600" href="https://www.pinterest.com/" target="_blank">
      <img src="../../assets/images/pinterest.png" alt="Instagram" />
    </a>
  </div>
  <div class=" flex flex-col items-center text-center mb-12">
    <h1 class="mb-12 font-bold ">
      About Boutiq Homes & Properties, LLC.
    </h1>
    <h3 class="mb-2 max-w-lg">
      Boutiq Homes & Properties, LLC. TX License Number: 9011072.
      Licensed Real Estate Broker Sean Rose TX License Number: 507657.
    </h3>
    <h3>
      Boutiq Homes & Properties -- a subsidiary of Boutiq, Inc. -- offers diversified real estate services to clients of Boutiq and its affiliates.
    </h3>
    <h1 class="mt-10 font-bold ">
      © 2024 Boutiq, Inc. 🪶
    </h1>
    <div class="flex gap-5">
      <TermsModal></TermsModal>
      <PrivacyModal></PrivacyModal>
    </div>
  </div>
  <div>
  </div>
</div>
</template>

<script setup>

import TermsModal from "@/components/Modals/TermsModal.vue";
import PrivacyModal from "@/components/Modals/PrivacyModal.vue";
</script>

<style scoped>

</style>
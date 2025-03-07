<template>
<div id="our_process" class="OurProcessHome flex justify-center items-center">
  <img class="" src="@/assets/images/OurProcess.png" alt="logo"/>
</div>
  <BoutiqMethod></BoutiqMethod>
  <OurProcessSecond />
</template>

<script setup>
import BoutiqMethod from './BoutiqMethod'
import OurProcessSecond from './OurProcess2';

</script>

<style scoped>
  .OurProcessHome {
    background-image: url('@/assets/images/process.jpg');
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 300px;
    }
    .OurProcessHome {
      height: 60vh;
    }
  }
</style>
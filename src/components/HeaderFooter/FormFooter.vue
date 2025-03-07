<template>
<div id="contact" class="footer1 bg-black flex items-center justify-center">
  <div class="img mt-12 mb-12 mr-12">
    <img src="../../assets/images/footer1.png" />
  </div>
  <div class="div1 ml-12 gap-5 text-center">
    <h1 class="text-white text-5xl mb-5">
      Want to get in touch?
    </h1>
    <h3 class="text-cyan-700 text-xl mb-5">
      Share your email, Boutiq Homes will reply promptly!
    </h3>
    <form class="">
      <input class="px-.0.75 py-3 bg-gray-800 pl-2 text-white" type="text" placeholder="NAME" />
      <input class="px-.0.75 py-3 ml-3 bg-gray-800 pl-2 text-white" type="text" placeholder="EMAIL" />
      <button type="submit" class="bg-cyan-600 text-white ml-3 px-3 py-3">Submit</button>
    </form>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
  input:focus {
    outline: none;
  }
  @media  screen and (max-width: 1200px) {
    .footer1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .img {
      margin-right: 0;
      margin-bottom: 20px;
    }
    .div1 {
      margin-left: 0;
    }
    input {
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 5px;
      margin: 0;
    }
    button {
      padding: 5px;
      margin: 0;
    }
    form {
      display: flex;
      flex-direction: column;
      padding: 12px;
      gap:7px;
    }
  }
</style>
<template>
  <HomeDropdown :class="['header', { 'scrolled': isScrolled, }]" v-if="media"></HomeDropdown>
  <header v-else :class="['header', { 'scrolled': isScrolled, }]"  class=" flex  items-center justify-between text-base font-medium text-white p-5">
    <div @click="router.push('/')" class="logo">
      <img src="../../assets/images/logo1.jpg" alt="logo" class="logo w-1/5 cursor-pointer"/>
    </div>
    <div class="headerDiv flex gap-2">
      <button @click="changeLocation('home')" class="mx-1">Home</button>
      <button @click="changeLocation('home', 'why-boutiq')" class="mx-1">Why Boutiq?</button>
      <ServeDropdown></ServeDropdown>
      <button @click="changeLocation('our-process')" class="mx-1" >Our Process</button>
      <button @click="changeLocation('portfolio')" class="mx-1">The Boutiq Portfolio</button>
      <AboutDropdown></AboutDropdown>
      <UserDropdown v-if="user && Object.keys(user).length"></UserDropdown>
      <button v-else @click="changeLocation('login-page')">Log in</button>
    </div>
    <div class="headerButton">
      <button :class="{'scrolled': isScrolled}" @click="submit('contact')" class="px-3 py-1 border-solid border-2 ">CONTACT BOUTIQ HOMES</button>
    </div>
  </header>
</template>

<script setup>
import router from "@/router";
import ServeDropdown from "@/components/DropDowns/ServeDropdown.vue";
import AboutDropdown from "@/components/DropDowns/AboutDropdown.vue";
import {ref, onMounted, onBeforeUnmount, computed} from "vue";
import { useStore } from 'vuex';
import UserDropdown from "@/components/DropDowns/UserDropdown.vue";
import HomeDropdown from "@/components/DropDowns/HomeDropdown.vue";

const store = useStore();
const user  = computed(() => store.state.user);
const media = computed(() => window.innerWidth < 1100)

const changeLocation = (name, hash = null) => {
    const routeObject = {
      name: name
    }
    if (hash) routeObject.hash = `#${hash}`;
    router.push(routeObject)
}
const submit = (name = '') => {

  router.push(
  {
    hash: '#' + name
  })

  const element = document.getElementById(name);
  if(element)
  {
    element.scrollIntoView({behavior: "smooth"});
  }
  };

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    text-align: center;
    transition: background-color 0.3s ease;
    z-index: 1000;
  }
  header.scrolled {
    background-color: white;
    color: black;
    border-bottom: 1px solid gray;
  }
  button.scrolled {
    border: black solid 2px;
  }

  @media screen and (max-width: 1100px) {
    header {
      height: 70px;
    }
    .headerDiv {
      font-size: 10px;
      gap: 0;
    }
    .logo {
      display: none;
    }
    .headerButton {
      font-size: 5px;
      padding: 0;
    }
    header.scrolled {
      background-color: white;
      color: black;
      border-bottom: 1px solid gray;
      background-image: url("@/assets/images/logo1.jpg");
      background-size: 50px;
      background-repeat: no-repeat;
      background-position: center;

    }
  }
  @media screen and (max-width: 1400px) {
    .logo {
      display: none;
    }
  }
</style>
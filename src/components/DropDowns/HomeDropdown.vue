<template>
  <header :class="['header', { 'scrolled': isScrolled, }]">
    <Menu  as="div" class="fixed  text-left">
      <div>
        <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-inherit 	 px-3 py-2">
          <img src="@/assets/images/icon.png">
          <ChevronDownIcon class="-mr-1 size-5 " aria-hidden="true" />
        </MenuButton>
      </div>
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute  left-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
          <div class="py-1">
            <MenuItem v-if="user && Object.keys(user).length" v-slot="{ active }">
              <UserDropdown  :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block pl-1 text-sm']"></UserDropdown>
            </MenuItem>
            <MenuItem v-else v-slot="{ active }">
              <button @click="router.push({name: 'login-page'})" :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Log in</button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button @click="router.push({name: 'home'})" :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Home</button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button @click="changeLocation('home', 'why-boutiq')" :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Why Boutiq?</button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <ServeDropdown :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block pl-1  text-sm']"></ServeDropdown>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button @click="router.push({name: 'our-process'})" :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Our Process</button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button @click="router.push({name: 'portfolio'})" :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">The Boutiq Porfoilo</button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <AboutDropdown :class="[active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block pl-1  text-sm']"></AboutDropdown>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button  @click="submit('contact')" class="ml-3 mr-3 border-solid border-2 border-black" :class="[{'scrolled': isScrolled} , active ? 'bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">CONTACT BOUTIQ HOMES</button>
            </MenuItem>
          </div>
          <div class="py-1">
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </header>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import router from "@/router";
import ServeDropdown from "@/components/DropDowns/ServeDropdown.vue";
import AboutDropdown from "@/components/DropDowns/AboutDropdown.vue";
import UserDropdown from "@/components/DropDowns/UserDropdown.vue";
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import { useStore } from 'vuex';

const store = useStore();
const user  = computed(() => store.state.user);
const isScrolled = ref(false);
const submit = (name = 'home') => {

  router.push(
  {
    hash: '#' + name
  })


    const element = document.getElementById(name);
    if(element)
    {
      element.scrollIntoView({behavior: "smooth"});
    }

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  };
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
};
const changeLocation = (name, hash = null) => {
  const routeObject = {
    name: name
  }
  if (hash) routeObject.hash = `#${hash}`;
  router.push(routeObject)
}
</script>

<style scoped>
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
  img {
    width: 25px;
    height: 25px;
  }
  Menu {
    max-width: fit-content;
  }
</style>
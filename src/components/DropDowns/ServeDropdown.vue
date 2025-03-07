<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-inherit 	 px-3 py-2">
        Who We Serve
        <ChevronDownIcon class="-mr-1 size-5 " aria-hidden="true" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute  left-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <button @click="submit('agent-home')" :class="[active ? 'w-48 bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Overview</button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button @click="submit('vacation')" :class="[active ? 'w-48 bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Vacation Rental Buyers</button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button @click="submit('luxury')" :class="[active ? 'w-48 bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Luxury Home Owners</button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button @click="submit('estate')" :class="[active ? 'w-48 bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Real Estate Investors</button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button @click="submit('agents')" :class="[active ? 'w-48 bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Agents & Brokerages</button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import router from "@/router";

import { useRoute } from 'vue-router';
const route = useRoute();

const submit = (name = 'home') => {

  router.push(
  {
    name: 'agent-page',
    hash: '#' + name
  })
  if (route.name === 'agent-page')
  {
    const element = document.getElementById(name);
    if(element)
    {
      element.scrollIntoView({behavior: "smooth"});
    }
  }
};
</script>

<style scoped>

</style>
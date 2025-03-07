<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-inherit px-3 py-2 ">
        About Us
        <ChevronDownIcon class="-mr-1 size-5 " aria-hidden="true" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute  left-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <button @click="submit('story')" :class="[active ? 'w-32 bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Our Story</button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button @click="submit('team')" :class="[active ? 'w-32 bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Our Team</button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button @click="submit('partners')" :class="[active ? 'w-32 bg-gray-100 text-gray-900 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">Our Partners</button>
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
    name: 'about-page',
    hash: '#' + name
  })
  if (route.name === 'about-page')
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
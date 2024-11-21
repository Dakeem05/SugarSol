<template>
  <div class="fixed top-4 left-0 right-0 text-black z-50 flex justify-center">
    <nav class="w-full md:w-[70%] mx-4 md:mx-auto bg-white/55 md:rounded-full rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9px] border text-black border-white/[0.36]">
      <div class="px-6 py-5">
        <div class="flex items-center justify-between md:justify-center relative">
          <div class="flex items-center md:absolute md:left-4">
            <div class="flex items-center gap-2">
              <img src="/assets/images/dog-removebg.png" alt="SugarDog Logo" class="h-8 w-8 object-contain" />
              <span class="text-2xl font-bold">SugarDog</span>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="isOpen = !isOpen" class="text-black hover:text-sugar-200 focus:outline-none">
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Desktop menu -->
          <div class="hidden text-black md:flex space-x-12">
            <a v-for="item in menuItems" 
               :key="item.name" 
               :href="item.href" 
               class="text-black text-lg font-medium hover:text-sugar-500 transition-colors duration-200"
               @click.prevent="scrollToSection(item.href)">
              {{ item.name }}
            </a>
          </div>

          <!-- Desktop Telegram Button -->
          <div class="hidden md:block md:absolute md:right-4">
            <a href="https://t.me/SugarSolPortal" target="_blank" class="bg-sugar-500 text-white px-6 py-2 text-lg rounded-full hover:bg-sugar-600 transition-colors duration-200">
              Join Telegram
            </a>
          </div>

        </div>

        <!-- Mobile menu -->
        <div :class="isOpen ? 'block' : 'hidden'" class="md:hidden text-black mt-6">
          <div class="flex flex-col space-y-4">
            <a v-for="item in menuItems" 
               :key="item.name" 
               :href="item.href" 
               class="text-black text-lg font-medium hover:text-sugar-500 transition-colors duration-200"
               @click.prevent="scrollToSection(item.href)">
              {{ item.name }}
            </a>
            <a href="https://t.me/sugardog" target="_blank" class="bg-sugar-500 text-white px-6 py-2 text-lg rounded-full hover:bg-sugar-600 transition-colors duration-200 text-center">
              Join Telegram
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Community', href: '#community' }
]

const scrollToSection = (href) => {
  isOpen.value = false
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}
</script>

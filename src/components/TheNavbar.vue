<script setup lang="ts">
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 ">
      <div class="flex justify-between items-center h-16">
        <!-- Logotipo -->
        <div class="flex items-center">
          <img 
            src="../assets/logo_lttech.png" 
            alt="LT Tech Logo" 
            class="h-12 md:h-24"
          />
        </div>
        
        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="#services" class="text-gray-700 hover:text-primary">Serviços</a>
          <a href="#about" class="text-gray-700 hover:text-primary">Sobre</a>
          <a href="#contact" class="text-gray-700 hover:text-primary">Contato</a>
        </div>

        <!-- Botão Menu Mobile -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-700">
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-4 pt-2 pb-3 space-y-2">
        <a href="#services" class="block px-3 py-2 text-gray-700 hover:text-primary">Serviços</a>
        <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-primary">Sobre</a>
        <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-primary">Contato</a>
      </div>
    </div>
  </nav>
</template>

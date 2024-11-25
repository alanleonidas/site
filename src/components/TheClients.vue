<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Client {
  name: string;
  logo: string;
  url: string;
}

const clients: Client[] = [
  {
    name: 'Inforbyte',
    logo: 'http://www.inforbyte.io/images/logoinforbyte-dark.png',
    url: 'http://www.inforbyte.io/'
  },
  {
    name: 'NatCorp',
    logo: 'https://www.natcorp.com.br/wp-content/uploads/2020/03/cropped-sistema-rh-favicon-natcorp-1.png',
    url: 'https://www.natcorp.com.br'
  },
  {
    name: 'TactoNuvem',
    logo: 'https://accounts.tactonuvem.com.br/images/logo-tacto.png',
    url: 'https://accounts.tactonuvem.com.br'
  }
];

const currentIndex = ref(0);
const autoPlayInterval = ref<number | null>(null);

// Função para avançar automaticamente ao próximo cliente
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % clients.length;
};

// Função para iniciar o autoplay com intervalo de 2 segundos
const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(next, 2000) as unknown as number;
};

onMounted(() => {
  startAutoPlay();
});
</script>

<template>
  <section class="py-20 bg-white" data-aos="fade-up">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">
        <span class="gradient-text">Empresas</span> que contam conosco
      </h2>
      
      <div class="relative overflow-hidden">
        <div class="flex transition-transform duration-500 ease-in-out" 
             :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div 
            v-for="client in clients" 
            :key="client.name"
            class="w-full flex-shrink-0 flex items-center justify-center px-4"
          >
            <a 
              :href="client.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="block transform transition-transform duration-300 hover:scale-105"
            >
              <img 
                :src="client.logo" 
                :alt="client.name"
                class="max-w-[200px] h-auto mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        <!-- Indicador com Dots -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(_, index) in clients"
            :key="index"
            @click="currentIndex = index"
            class="w-3 h-3 rounded-full transition-colors duration-300"
            :class="index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo do gradiente para o texto "Empresas" */
.gradient-text {
  background: linear-gradient(90deg, #08212f, #FFC107);
  -webkit-background-clip: text;
  color: transparent;
}

/* Estilo dos logos para efeito de escala ao passar o mouse */
.client-logo {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.client-logo:hover {
  filter: grayscale(0%);
}
.overflow-hidden {
  overflow: hidden;
}
h1, h2, p, label {
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
</style>

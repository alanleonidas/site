<script setup lang="ts">
interface Service {
  title: string;
  description: string;
  emoji: string;
  animation: string;
}

const services: Service[] = [
  {
    title: 'Desenvolvimento Web',
    description: 'Criamos aplicações web modernas e responsivas, utilizando as mais recentes tecnologias do mercado.',
    emoji: '🌐',
    animation: 'fade-right'
  },
  {
    title: 'Desenvolvimento Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android, focados em performance e experiência do usuário.',
    emoji: '📱',
    animation: 'fade-up'
  },
  {
    title: 'Desenvolvimento Desktop',
    description: 'Soluções desktop robustas e eficientes para otimizar processos internos da sua empresa.',
    emoji: '💻',
    animation: 'fade-left'
  }
];
</script>

<template>
  <section id="services" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 
        class="text-3xl font-bold text-center mb-12"
        data-aos="fade-down"
      >
        Nossos Serviços
      </h2>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
          :data-aos="service.animation"
          :data-aos-delay="index * 100"
        >
          <div class="text-4xl mb-4">{{ service.emoji }}</div>
          <h3 class="text-xl font-semibold mb-4">{{ service.title }}</h3>
          <p class="text-gray-600">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hover\:scale-105:hover {
  transform: scale(1.05);
}

h1,h2,h3,label {
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
</style>
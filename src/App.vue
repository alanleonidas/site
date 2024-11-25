<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import TheHero from './components/TheHero.vue'
import TheServices from './components/TheServices.vue'
import TheClients from './components/TheClients.vue'
import TheTecnologias from './components/TheTecnologias.vue'
import TheAbout from './components/TheAbout.vue'
import TheContact from './components/TheContact.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <main>
    <TheHero />
    <TheServices />
    <TheClients />
    <TheTecnologias />
    <TheAbout />
    <TheContact />
  </main>
  <TheFooter />
</template>
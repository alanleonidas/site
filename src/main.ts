import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Vuetify
import 'vuetify/styles'; // Importa os estilos do Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


const vuetify = createVuetify({
  components,
  directives,
});


// Initialize AOS
AOS.init({
  offset: 120, // Distância em pixels do elemento à viewport
  duration: 800, // Duração da animação
  easing: 'ease-in-out', // Efeito de suavização
  once: true, // Executar animação apenas uma vez
})
// Criar e montar a aplicação
const app = createApp(App);

app.use(vuetify); // Adiciona Vuetify à aplicação
app.mount('#app');
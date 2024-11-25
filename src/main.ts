import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'vuetify/styles'; 
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


const vuetify = createVuetify({
  components,
  directives,
});

AOS.init({
  offset: 120, 
  duration: 800, 
  easing: 'ease-in-out', 
  once: true, 
})
const app = createApp(App);

app.use(vuetify); 
app.mount('#app');
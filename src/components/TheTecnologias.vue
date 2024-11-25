<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Tecnologia {
  nome: string;
  icone: string;
  url: string;
}

const tecnologias: Tecnologia[] = [
  { nome: 'Delphi', icone: 'https://www.bverhue.nl/delphisvg/wp-content/uploads/2017/04/Embarcadero_Delphi_Logo.png', url: 'https://www.embarcadero.com/br/' },
  { nome: 'Java', icone: 'https://icon.icepanel.io/Technology/svg/Java.svg', url: 'https://www.java.com' },
  { nome: 'Kotlin', icone: 'https://icon.icepanel.io/Technology/svg/Kotlin.svg', url: 'https://kotlinlang.org' },
  { nome: 'React', icone: 'https://icon.icepanel.io/Technology/svg/React.svg', url: 'https://reactjs.org' },
  { nome: 'React-Native', icone: 'https://cdn.prod.website-files.com/65d3967bfc599fea766f3984/664f7f14c164397518e9c317_react_native.png', url: 'https://reactjs.org' },
  { nome: 'Node.js', icone: 'https://icon.icepanel.io/Technology/svg/Node.js.svg', url: 'https://nodejs.org' },
  { nome: 'Nuxt', icone: 'https://icon.icepanel.io/Technology/svg/Nuxt-JS.svg', url: 'https://nuxtjs.org' },
  { nome: 'Vue.js', icone: 'https://icon.icepanel.io/Technology/svg/Vue.js.svg', url: 'https://vuejs.org' },
  { nome: 'JavaScript', icone: 'https://icon.icepanel.io/Technology/svg/JavaScript.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { nome: 'Html5', icone: 'https://icon.icepanel.io/Technology/svg/HTML5.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { nome: 'C#', icone: 'https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg', url: 'https://dotnet.microsoft.com/pt-br/languages/csharp' },  
  { nome: 'Vite', icone: 'https://icon.icepanel.io/Technology/svg/Vite.js.svg', url: 'https://vitejs.dev' },
  { nome: 'TailwindCSS', icone: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg', url: 'https://tailwindcss.com' },
  { nome: 'Capacitor', icone: 'https://icon.icepanel.io/Technology/svg/Capacitor.svg', url: 'https://capacitorjs.com' },
  { nome: 'Material-UI', icone: 'https://icon.icepanel.io/Technology/svg/Material-UI.svg', url: 'https://mui.com' },
  { nome: 'Sprint', icone: 'https://icon.icepanel.io/Technology/svg/Spring.svg', url: 'https://spring.io/' },  
  { nome: 'Firebase', icone: 'https://icon.icepanel.io/Technology/svg/Firebase.svg', url: 'https://firebase.google.com/' },
  { nome: 'PostgreSQL', icone: 'https://icon.icepanel.io/Technology/svg/PostgresSQL.svg', url: 'https://www.postgresql.org/' },
  { nome: 'SQL Server', icone: 'https://icon.icepanel.io/Technology/png-shadow-512/Microsoft-SQL-Server.png', url: '' },
  { nome: 'MySQL', icone: 'https://icon.icepanel.io/Technology/svg/MySQL.svg', url: 'https://www.mysql.com/' },
  { nome: 'Firebird', icone: 'https://firebirdsql.org/img/site/logo-firebird-black.png', url: 'https://firebirdsql.org/' },
  { nome: 'AWS', icone: 'https://cdn.prod.website-files.com/65d3967bfc599fea766f3984/664f7f134dfe2b8d3b32a5e8_aws.png', url: 'https://aws.amazon.com/' }
];

const duplicatedTechnologies = ref<Tecnologia[]>([...tecnologias, ...tecnologias]);

onMounted(() => {
  const scrollContainer = document.getElementById('tech-scroll');
  if (scrollContainer) {
    let scrollAmount = 0;
    const scrollStep = 1; 
    setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; 
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    }, 20); 
  }
});
</script>

<template>
  <section class="py-20 bg-white" data-aos="fade-up">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">
        Tecnologias que utilizamos
      </h2>
      
      <div
        id="tech-scroll"
        class="flex overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        <div
          v-for="(tecnologia, index) in duplicatedTechnologies"
          :key="index"
          class="flex flex-col items-center justify-center space-y-2 mx-4"
        >
          <a :href="tecnologia.url" target="_blank" rel="noopener noreferrer">
            <img 
              :src="tecnologia.icone" 
              :alt="tecnologia.nome" 
              class="w-24 h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </a>
          <p class="text-center font-medium text-sm">{{ tecnologia.nome }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; 
}

#tech-scroll {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
}

#tech-scroll > div {
  flex-shrink: 0;
}

img {
  width: 46px; 
  height: 46px; 
  object-fit: contain; 
  transition: all 0.3s ease; 
}

img:hover {
  filter: grayscale(0%);
  transform: scale(1.05); 
}
</style>

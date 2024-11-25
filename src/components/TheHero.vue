<style scoped>
h1, p {
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.section-bg {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #08212f, #1976D2);
  background-size: 400% 400%;
  color: white;
  animation: gradientShift 15s ease infinite;
  z-index: 0; 
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.section-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.747) 2px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.6;
  animation: moveParticles 15s linear infinite;
  z-index: 1; 
  pointer-events: none; 
}

@keyframes moveParticles {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-50px, -50px);
  }
}

.section-bg > div {
  position: relative;
  z-index: 10; 
}

.overflow-hidden {
  overflow: hidden;
}

.wave-shape {
  z-index: 0; 
  pointer-events: none;
}

img {
  width: 400px;
  height: 400px;
}

@media (max-width: 768px) {
  img {
    width: 200px; 
    height: 200px;
  }
}

</style>

<template>
  <section class="section-bg pt-20 text-white ">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col-reverse md:flex-row items-center">

       
      <!-- Imagem -->
      <div
        class="md:w-1/2 flex justify-center mt-8"
        data-aos="fade-left"
        data-aos-delay="200"
        marg
      >
        <img
          src="../assets/theHeroN.png"
          alt="Ilustração representativa de desenvolvimento de software"
          class="w-full max-w-md md:max-w-lg"
        />
      </div>

      <!-- Texto -->
      <div
        class="md:w-1/2 text-center md:text-left "
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-center">
          Soluções Sob Medida para Suas Ideias
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-justify">
          Transformamos ideias em soluções de software personalizadas, feitas para impulsionar o sucesso do seu negócio. Na LT Tech, inovação e expertise andam lado a lado para levar você além.
        </p>
        
        <a
          href="#contact"
          class="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-center"
        >
          Fale Conosco
        </a>
      </div>

    </div>
    <div class="wave-shape">
    <div class="wave-shape">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
        class="absolute bottom-0 w-full wave-shape"
        preserveAspectRatio="none"
        style="pointer-events: none;"
      >
        <path
          fill="#f9fafb"
          d="M0,192L60,208C120,224,240,256,360,256C480,256,600,224,720,213.3C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>
  </section>
</template>

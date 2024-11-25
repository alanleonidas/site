<style scoped>
/* Classe principal para o fundo animado com gradiente e partículas */
h1, p {
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
</style>

<template>
  <footer class="bg-primary text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-2xl font-bold mb-4">LT Tech</h3>
                    
          <p class="text-white text-opacity-80">
            Soluções em tecnologia sob medida para sua empresa.
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Contato</h4>
          <a href="mailto:contato@lttech.com.br" class="text-white text-opacity-80" aria-label="Link para e-mail da LT Tech">📧 contato@lttech.com.br</a>
          <br>
          <br>
          <a href="tel:+5514982141275" aria-label="Link para ligação para o telefone comercial da LT Tech"
                class="text-white hover:text-secondary transition-colors"
              >
              📲 (14) 9 8214-1275
          </a>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Links Rápidos</h4>
          <ul class="space-y-2">
            <li>
              <a href="#services" class="text-white text-opacity-80 hover:text-white">Serviços</a>
            </li>
            <li>
              <a href="#about" class="text-white text-opacity-80 hover:text-white">Sobre</a>
            </li>
            <li>
              <a href="#contact" class="text-white text-opacity-80 hover:text-white">Contato</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-white text-opacity-80">
        <p>&copy; {{ new Date().getFullYear() }} LT Tech. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>
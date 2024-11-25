<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h2 class="text-3xl font-bold text-center mb-12">Comece a transformação digital do seu negócio conosco</h2>
        <p class="text-gray-600 mb-4 text-center">Será um prazer te atender e falar sobre o seu projeto</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <form class="space-y-6">
            <div class="relative">
              <input
                v-model="nome"
                type="text"
                id="nome"
                placeholder=" "
                class="floating-input peer mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
              <label
                for="nome"
                class="floating-label absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-primary peer-focus:text-sm"
              >
                Nome*
              </label>
            </div>

            <div class="flex space-x-4">
              <div class="relative flex-1">
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  placeholder=" "
                  class="floating-input peer mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
                <label
                  for="email"
                  class="floating-label absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-primary peer-focus:text-sm"
                >
                  Email*
                </label>
              </div>

              <div class="relative flex-1">
                <input
                  v-model="telefone"
                  type="text"
                  id="telefone"
                  placeholder=" "
                  class="floating-input peer mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  @input="formatTelefone"
                />
                <label
                  for="telefone"
                  class="floating-label absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-primary peer-focus:text-sm"
                >
                  Telefone Celular*
                </label>
              </div>
            </div>

            <div class="relative">
              <textarea
                v-model="mensagem"
                id="mensagem"
                placeholder=" "
                rows="4"
                class="floating-input peer mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              ></textarea>
              <label
                for="mensagem"
                class="floating-label absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-primary peer-focus:text-sm"
              >
                Mensagem*
              </label>
            </div>

            <button
              type="button"
              :disabled=false
              @click="handleFormSubmit"
              class="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Conversar no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>

    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.color"
      timeout="3000"
      top
      right
      class="snackbar"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      snackbar: {
        visible: false,
        text: "",
        color: "error",
      },
    };
  },
  computed: {
    isFormValid() {
      return this.nome && this.email && this.telefone && this.mensagem;
    },
  },
  methods: {
    handleFormSubmit() {
      if (!this.isFormValid) {
        this.showSnackbar("Por favor, preencha todos os campos antes de continuar.", "error");
        return;
      }
      this.sendWhatsAppMessage();
    },
    sendWhatsAppMessage() {
      const formattedMessage = `Olá, meu nome é *${this.nome}*.\n\n**Informações de Contato:**\n- E-mail: ${this.email}\n- Telefone: ${this.telefone}\n\n**Mensagem:**\n${this.mensagem}`;
      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappLink = `https://wa.me/5514982141275?text=${encodedMessage}`;
      window.open(whatsappLink, "_blank");
    },
    showSnackbar(message, color = "info") {
      this.snackbar.text = message;
      this.snackbar.color = color;
      this.snackbar.visible = true;
    },
    formatTelefone() {
      let rawValue = this.telefone.replace(/\D/g, "");
      rawValue = rawValue.substring(0, 11);
      if (rawValue.length <= 10) {
        this.telefone = rawValue.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      } else {
        this.telefone = rawValue.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      }
    },
  },
};
</script>


<style scoped>
.floating-label {
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  font-size: 0.875rem;
  padding: 0 4px;
}

.floating-input {
  padding: 10px 12px;
}

.peer-placeholder-shown + .floating-label {
  top: 50%;
  font-size: 1rem;
  transform: translateY(-50%);
  color: #9ca3af;
}

.peer:focus + .floating-label,
.peer:not(:placeholder-shown) + .floating-label {
  top: -10px;
  font-size: 0.75rem;
  color: #08212f;
}

.peer:focus {
  border-color: var(--color-secondary, #08212f); 
  outline: none;
  box-shadow: 0 0 0 2px #08212f; 
}

.snackbar {
  position: fixed !important;
  top: 20px;
  right: 20px;
  z-index: 9999;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
}

.snackbar.v-snackbar--active {
  transform: translateX(0);
}

h1 {
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
</style>

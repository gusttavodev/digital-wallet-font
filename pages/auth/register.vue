<template>
  <NuxtLayout :name="layout">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" @submit.prevent="submit">
        <v-input
          id="name"
          v-model="form.name"
          :value="form.name"
          :error="errors?.name"
          class="mt-10"
          label="Nome"
          type="text"
        />
        <v-input
          id="email"
          v-model="form.email"
          :value="form.email"
          :error="errors?.email"
          class="mt-10"
          label="Email"
          type="email"
        />
        <v-input
          id="password"
          v-model="form.password"
          :value="form.password"
          :error="errors?.password"
          class="mt-10"
          label="Senha"
          type="password"
        />
        <v-input
          id="password_confirmation"
          v-model="form.password_confirmation"
          :value="form.password_confirmation"
          :error="errors?.password_confirmation"
          class="mt-10"
          label="Confirmar senha"
          type="password"
        />
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Lembrar</label
            >
          </div>
          <div class="text-sm">
            <v-a> Esqueceu sua senha? </v-a>
          </div>
        </div>

        <div>
          <v-button type="submit">Entrar</v-button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
              Ainda não possui uma conta ?
              <v-a href="/auth/register">Cria uma conta</v-a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const { register } = useAuth();
const router = useRouter();

definePageMeta({ middleware: ["guest"] });
const layout = "guest";

const errors = ref<Record<string, string[]>>({});
const form = reactive({
  email: "",
  password: "",
  password_confirmation: "",
});

const submit = async () => {
  errors.value = {};
  await submitRequest(
    register(form),
    () => {
      router.push("/dashboard");
    },
    (validationErrors) => {
      errors.value = validationErrors;
    }
  );
};
</script>

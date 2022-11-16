<template>
  <NuxtLayout :name="layout">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="wallet in wallets"
        :key="wallet.email"
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">
                {{ wallet.name }}
              </h3>
              <span
                class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
                >Up 10%</span
              >
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">R$ 10,00</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a
                shref="#"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <BanknotesIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-3">Transaction</span>
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href="#"
                class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <TrashIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="ml-3">Remove</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import {
  BanknotesIcon,
  EnvelopeIcon,
  PhoneIcon,
  TrashIcon,
} from "@heroicons/vue/20/solid";
definePageMeta({ middleware: ["auth"] });
const layout = "auth";
const { fetchCategories, wallets } = useWallet();

onMounted(() => {
  fetchCategories();
});
</script>

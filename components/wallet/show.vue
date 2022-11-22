<template>
  <div>
    <div class="flex w-full items-center justify-between space-x-6 p-6">
      <div class="flex-1 truncate">
        <div class="flex items-center space-x-3">
          <h3 class="truncate text-sm font-medium text-gray-900">
            {{ props.wallet.name }}
          </h3>
          <span
            v-if="wallet.total_amount >= 0"
            class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
            >Up</span
          >
          <span
            v-else
            class="inline-block flex-shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800"
            >Down</span
          >
        </div>
        <p class="mt-1 truncate text-xl text-bold">
          R$ {{ wallet.total_amount }}
        </p>
      </div>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="flex w-0 flex-1">
          <a
            href="#"
            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            @click="emit('clickTransaction', props.wallet)"
          >
            <BanknotesIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
            <span class="ml-3">Transaction</span>
          </a>
        </div>
        <div class="-ml-px flex w-0 flex-1">
          <a
            href="#"
            class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            @click="emit('clickRemove', props.wallet)"
          >
            <TrashIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
            <span class="ml-3">Remove</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BanknotesIcon, TrashIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  wallet: { type: Object, required: true },
});
const emit = defineEmits(["clickTransaction", "clickRemove"]);
</script>

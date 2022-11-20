<template>
  <NuxtLayout :name="layout">
    <div class="flex justify-between py-5">
      <div>
        <h1 class="text-3xl text-bold">Wallets</h1>
      </div>
      <div>
        <v-button @click="showWalletCreate = true">Create wallet</v-button>
      </div>
    </div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li
        v-for="wallet in wallets"
        :key="wallet.id"
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <wallet-show
          :wallet="wallet"
          @clickTransaction="openTransaction(wallet)"
          @clickRemove="openDelete(wallet)"
        />
      </li>
    </ul>

    <v-modal
      title="Create a new wallet"
      :open="showWalletCreate"
      @onClose="showWalletCreate = false"
    >
      <wallet-form
        @onCreate="showWalletCreate = false"
        @onCancel="showWalletCreate = false"
      />
    </v-modal>

    <v-modal
      title="Remove Wallet"
      :open="showWalletDelete"
      @onClose="showWalletDelete = false"
    >
      <wallet-delete
        :wallet="selectedWallet"
        @onDelete="showWalletDelete = false"
        @onCancel="showWalletDelete = false"
      />
    </v-modal>

    <v-modal
      title="Make new transaction"
      :open="showTransaction"
      @onClose="showTransaction = false"
    >
      <wallet-transaction-form
        :wallet="selectedWallet"
        @onStore="onStoreTransaction"
      />
    </v-modal>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from "vue";
definePageMeta({ middleware: ["auth"] });

const layout = "auth";

const showWalletCreate = ref(false);
const showWalletDelete = ref(false);
const showTransaction = ref(false);

const selectedWallet = ref();

const { fetchWallets, wallets } = useWallet();

onMounted(async () => {
  await fetchWallets();
});

const openTransaction = (wallet) => {
  showTransaction.value = true;
  selectedWallet.value = wallet;
};

const openDelete = (wallet) => {
  showWalletDelete.value = true;
  selectedWallet.value = wallet;
};

const onStoreTransaction = async () => {
  showTransaction.value = false;
  await fetchWallets();
};
</script>

<template>
  <div class="flex flex-col">
    <div class="py-3">
      <v-input
        id="amount"
        v-model="transaction.form.amount"
        :value="transaction.form.amount"
        :error="errors?.amount"
        label="Amount R$"
        type="number"
        step="0.01"
      />
    </div>
    <div class="py-3">
      <v-select
        id="type"
        v-model="transaction.form.type"
        :value="transaction.form.type"
        :error="errors?.type"
        label="Type"
        type="text"
      >
        <option value="withdraw">Withdraw</option>
        <option value="deposit">Deposit</option>
        <option value="between_wallets">Between Wallets</option>
      </v-select>
    </div>
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <button
        type="button"
        class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        @click="submit"
      >
        Confirm
      </button>
      <button
        ref="cancelButtonRef"
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  wallet: { type: Object, required: true },
});
const emit = defineEmits(["onStore"]);
const transaction = useTransaction();
const errors = ref(null);

async function submit() {
  await submitRequest(
    transaction.storeTransaction(props.wallet),
    () => {
      emit("onStore");
    },
    (validationErrors) => {
      errors.value = validationErrors;
    }
  );
}
</script>

<template>
  <div class="flex flex-col">
    <div class="py-3">
      <v-input
        id="name"
        v-model="form.name"
        :value="form.name"
        :error="errors?.name"
        label="Name"
        type="text"
      />
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
        @click="emit('onCancel')"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const emit = defineEmits(["onCreate", "onCancel"]);
const errors = ref({});
const form = reactive({
  name: "",
});

const { storeWallet } = useWallet();

const submit = async () => {
  errors.value = {};
  await submitRequest(
    storeWallet(form),
    () => {
      emit("onCreate");
    },
    (validationErrors) => {
      errors.value = validationErrors;
    }
  );
};
</script>

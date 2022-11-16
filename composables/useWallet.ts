import { ref, reactive } from "vue";
import type { Ref } from "vue";

type Wallet = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export const useWallet = () => {
  const wallets: Ref<Array<Wallet>> = ref(null);

  async function fetchCategories() {
    const response: Array<Wallet> = await $larafetch("/api/wallet", {
      method: "get",
    });
    wallets.value = response;
  }

  return {
    wallets,
    fetchCategories,
  };
};

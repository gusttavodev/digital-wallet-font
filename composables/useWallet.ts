import { ref, reactive } from "vue";
import type { Ref } from "vue";

type Wallet = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

type WalletForm = {
  name: string;
};

export const useWallets = () => {
  return useState("wallets");
};

export const useWallet = () => {
  const wallets = useWallets();

  async function fetchWallets() {
    const response: Array<Wallet> = await $larafetch("/api/wallet", {
      method: "get",
    });
    wallets.value = response;
  }

  async function storeWallet(form: WalletForm) {
    await $larafetch("/api/wallet", { method: "post", body: form });
    await fetchWallets();
  }

  async function deleteWallet(wallet: Wallet) {
    await $larafetch(`/api/wallet/${wallet.id}`, {
      method: "delete",
    });
    await fetchWallets();
  }

  return {
    wallets,
    fetchWallets,
    storeWallet,
    deleteWallet,
  };
};

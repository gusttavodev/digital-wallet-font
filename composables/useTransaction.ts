import type {} from "vue";

type Transaction = {
  amount: number;
  type: string;
};
type Wallet = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export const useTransaction = () => {
  const form = reactive({
    amount: "",
    type: "",
  });

  async function storeTransaction(wallet: Wallet) {
    console.log("wallet ", wallet);
    await $larafetch("/api/transaction", {
      method: "post",
      body: { ...form, wallet_id: wallet.id },
    });
  }

  return {
    form,
    storeTransaction,
  };
};

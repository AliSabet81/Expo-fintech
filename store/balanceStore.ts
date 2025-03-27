import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export interface BalanceState {
  transactions: Array<Transaction>;
  runTransaction: (transaction: Transaction) => void;
  balance: () => number;
  clearTransactions: () => void;
}

export const useBalanceStore = create<BalanceState>()(
  persist(
    (set, get) => ({
      transactions: [],
      runTransaction: (transaction: Transaction) => {
        set((state) => ({
          transactions: [...state.transactions, transaction],
        }));
      },
      balance: () =>
        get().transactions.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        ),
      clearTransactions: () => {
        set({ transactions: [] });
      },
    }),
    {
      name: "balance",
      // only in build app
      // storage: createJSONStorage(() => zustandStorage),
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

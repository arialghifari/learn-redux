const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: "Ari",
  balance: 500000,
  transactions: [
    { type: "withdraw", amount: 100000 },
    { type: "deposit", amount: 300000 },
  ],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialState,
  reducers: {
    deposit: (state, action) => {
      if (isNaN(action.payload.amount) || action.payload.amount < 0) return;

      state.balance += action.payload.amount;
      state.transactions.push({
        type: "deposit",
        amount: action.payload.amount,
      });
    },
    withdraw: (state, action) => {
      if (
        isNaN(action.payload.amount) ||
        action.payload.amount < 0 ||
        state.balance < action.payload.amount
      )
        return;

      state.balance -= action.payload.amount;
      state.transactions.push({
        type: "withdraw",
        amount: action.payload.amount,
      });
    },
  },
});

// in making of object action
// action = {type: 'deposit', payload: {amount:100000}}
export const { deposit, withdraw } = walletSlice.actions;

// create slector to get state
const selectUser = (state) => state.wallet.user;
const selectBalance = (state) => state.wallet.balance;
const selectTransactions = (state) => state.wallet.transactions;
export { selectUser, selectBalance, selectTransactions };

export default walletSlice.reducer;

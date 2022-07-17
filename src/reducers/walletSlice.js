const { createSlice } = require("@reduxjs/toolkit");

const initialState = { user: "Ari", balance: 200000 };

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialState,
  reducers: {
    deposit: (state, action) => {
      if (isNaN(action.payload.amount) || action.payload.amount < 0) return;

      state.balance += action.payload.amount;
    },
    withdraw: (state, action) => {
      if (
        isNaN(action.payload.amount) ||
        action.payload.amount < 0 ||
        state.balance < action.payload.amount
      )
        return;

      state.balance -= action.payload.amount;
    },
  },
});

// in making of object action
// action = {type: 'deposit', payload: {amount:100000}}
export const { deposit, withdraw } = walletSlice.actions;

// create slector to get state
export const selectUser = (state) => state.wallet.user;
export const selectBalance = (state) => state.wallet.balance;

export default walletSlice.reducer;

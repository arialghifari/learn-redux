import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  user: {
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  },
  balance: 500000,
  transactions: [
    { type: "withdraw", amount: 100000 },
    { type: "deposit", amount: 300000 },
  ],
};

const userAsync = createAsyncThunk(
  // this is action type
  "wallet/fetchUser",
  async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);

    // return will be payload
    return response.data.data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(userAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log("Success");
      })
      .addCase(userAsync.pending, () => {
        console.log("Loading");
      })
      .addCase(userAsync.rejected, () => {
        console.log("Fail to get user");
      });
  },
});

// in making of object action
// action = {type: 'wallet/deposit', payload: {amount:100000}}
export const { deposit, withdraw } = walletSlice.actions;

// create slector to get state
const selectUser = (state) => state.wallet.user;
const selectBalance = (state) => state.wallet.balance;
const selectTransactions = (state) => state.wallet.transactions;

export { selectUser, selectBalance, selectTransactions, userAsync };

export default walletSlice.reducer;

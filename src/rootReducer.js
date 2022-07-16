const rootReducer = (state, action) => {
  switch (action.type) {
    case "withdraw":
      if (state.balance < action.amount) return state;

      const withdrawBalance = state.balance - action.amount;
      return { ...state, balance: withdrawBalance };
    case "deposit":
      const depositBalance = state.balance + action.amount;
      return { ...state, balance: depositBalance };
    default:
      return state;
  }
};

const selectUser = (state) => state.user;
const selectBalance = (state) => state.balance;

export { rootReducer, selectUser, selectBalance };

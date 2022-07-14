import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectBalance } from "../rootReducer";

const Wallet = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const balance = useSelector(selectBalance);

  const handleClick = (type) => {
    dispatch({ type: type, amount: 100000 });
  };

  return (
    <div>
      <h1>{user ?? "My"} Wallet</h1>
      <h2>Balance: Rp {balance?.toLocaleString("ID") ?? "0"}</h2>
      <button onClick={() => handleClick("deposit")}>Deposit Rp 100.000</button>
      &nbsp;
      <button onClick={() => handleClick("withdraw")}>
        Withdraw Rp 100.000
      </button>
    </div>
  );
};

export default Wallet;

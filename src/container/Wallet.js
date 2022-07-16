import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectBalance } from "../rootReducer";

const Wallet = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const balance = useSelector(selectBalance);
  const [inputAmount, setInputAmount] = useState();

  const handleClick = (type, amount) => {
    if (isNaN(amount) || amount < 0) return;

    dispatch({ type: type, amount: amount });
  };

  return (
    <div>
      <h1>{user ?? "My"} Wallet</h1>
      <h2>Balance: Rp {balance?.toLocaleString("ID") ?? "0"}</h2>
      <section className="d-flex gap-2 content-center">
        <button onClick={() => handleClick("deposit", 100000)}>
          Deposit Rp 100.000
        </button>
        <button onClick={() => handleClick("withdraw", 100000)}>
          Withdraw Rp 100.000
        </button>
      </section>
      <br />
      <section className="d-flex gap-1 content-center">
        <input
          type="number"
          onChange={(e) => setInputAmount(parseInt(e.target.value))}
        />
        <button onClick={() => handleClick("deposit", inputAmount)}>
          Deposit
        </button>
        <button onClick={() => handleClick("withdraw", inputAmount)}>
          Withdraw
        </button>
      </section>
    </div>
  );
};

export default Wallet;

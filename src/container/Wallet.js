import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBalance,
  selectUser,
  deposit,
  withdraw,
  selectTransactions,
  userAsync,
} from "../reducers/walletSlice";

const Wallet = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const balance = useSelector(selectBalance);
  const transactions = useSelector(selectTransactions);

  const [inputAmount, setInputAmount] = useState();

  useEffect(() => {
    dispatch(userAsync(3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <img style={{ marginTop: "20px" }} src={user.avatar} alt="" />
      <h1>{user.first_name ?? "My"} Wallet</h1>
      <h2>Balance: Rp {balance?.toLocaleString("ID") ?? "0"}</h2>
      <section className="d-flex gap-2 content-center">
        <button onClick={() => dispatch(deposit({ amount: 100000 }))}>
          Deposit Rp 100.000
        </button>
        <button onClick={() => dispatch(withdraw({ amount: 100000 }))}>
          Withdraw Rp 100.000
        </button>
      </section>

      <br />

      <section className="d-flex gap-1 content-center">
        <input
          type="number"
          onChange={(e) => setInputAmount(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(deposit({ amount: inputAmount }))}>
          Deposit
        </button>
        <button onClick={() => dispatch(withdraw({ amount: inputAmount }))}>
          Withdraw
        </button>
      </section>

      <br />

      <section>
        {transactions.map(({ type, amount }) => (
          <p className={type}>
            {type === "deposit" ? "+" : "-"} {type}: Rp{" "}
            {amount.toLocaleString("ID")}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Wallet;

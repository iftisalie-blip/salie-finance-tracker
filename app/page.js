"use client";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");

  async function addExpense() {
    await fetch("/api/expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        description: "Test",
        spender: "Ifti"
      })
    });
    alert("Saved to Google Sheets");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Salie Finance Tracker</h1>
      <input
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={addExpense}>Add</button>
    </div>
  );
}

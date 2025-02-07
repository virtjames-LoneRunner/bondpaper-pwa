import { useState } from "react";
import FormattedCurrency from "../../../shared/components/formatted-currency";

export default function Start() {
  const [amount, setAmount] = useState(0);
  return (
    <div className="flex flex-1 space-y-10 flex-col items-center h-full">
      <div>
        <h1 className="text-3xl">Start Transaction</h1>
      </div>
      <div>
        <h1 className="text-[8em] font-semibold">
          <FormattedCurrency amount={amount} />
        </h1>
      </div>
    </div>
  );
}

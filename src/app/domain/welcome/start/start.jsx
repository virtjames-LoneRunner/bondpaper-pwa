import { useEffect, useState } from "react";
import FormattedCurrency from "../../../shared/components/formatted-currency";
import axios from "axios";
import { useMainContext } from "../main.context";

export default function Start() {
  const { buyData, navigate } = useMainContext();
  const [amount, setAmount] = useState(0);
  const handleGetCoinCount = async () => {
    const res = await axios
      .get(`http://localhost:8000/coins`)
      .then((res) => {
        if (res.status === 200) {
          setAmount(res.data?.coins);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setInterval(handleGetCoinCount, 1000);
  }, []);

  useEffect(() => {
    if (amount >= buyData.quantity);
    {
      console.log(`done`);
    }
  }, [amount]);
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

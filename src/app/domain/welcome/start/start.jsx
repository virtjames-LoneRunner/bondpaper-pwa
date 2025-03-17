import { useEffect, useState } from "react";
import FormattedCurrency from "../../../shared/components/formatted-currency";
import axios from "axios";
import { useMainContext } from "../main.context";
import { Button } from "primereact/button";
import { BASE_URL } from "../../../shared/config";

export default function Start() {
  const { buyData, setBuyData, navigate } = useMainContext();
  const [amount, setAmount] = useState(0);
  const handleGetCoinCount = async () => {
    const res = await axios
      .get(`${BASE_URL}/coins`)
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
    const intervalId = setInterval(handleGetCoinCount, 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="flex flex-1 space-y-5 flex-col items-center h-full">
      <div>
        <h1 className="text-2xl">Insert Coins</h1>
      </div>
      <div>
        <h1 className="text-[8em] font-semibold">
          <FormattedCurrency amount={amount} />
        </h1>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate(`/system/done`);
          }}
          className="bg-blue-600 text-white font-bold px-5 py-5 text-4xl rounded-md"
        >
          Done
        </Button>
      </div>
    </div>
  );
}

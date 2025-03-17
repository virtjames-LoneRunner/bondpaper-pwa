import { useEffect, useState } from "react";
import { useMainContext } from "../main.context";
import axios from "axios";
import { BASE_URL } from "../../../shared/config";
import { Button } from "primereact/button";

export default function Done() {
  const { buyData, setBuyData, navigate } = useMainContext();
  const [done, setDone] = useState(false);
  const [dataSent, setDataSent] = useState(false);

  const handleSendBuyData = async () => {
    const res = await axios
      .post(`${BASE_URL}/buy`, buyData)
      .then((res) => {
        if (res.status === 200) {
          setDone(true);
        }
      })
      .catch((err) => {
        navigate(`/system/paper`);
      });
  };

  useEffect(() => {
    if (done) {
      setBuyData({ paper: "", quantity: 0 });
      navigate(`/system/paper`);
    }
  }, [done]);

  return (
    <div className="flex justify-center items-center h-screen">
      {!dataSent && (
        <div>
          <Button
            onClick={() => {
              handleSendBuyData();
              setDataSent(true);
            }}
            className="bg-blue-600 text-white font-bold px-5 py-5 text-4xl rounded-md"
          >
            Done
          </Button>
        </div>
      )}
      {dataSent && <h1 className="text-4xl font-bold">Please Wait...</h1>}
    </div>
  );
}

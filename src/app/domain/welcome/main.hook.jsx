import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useMain() {
  // LOCAL DECLARATION
  const navigate = useNavigate();
  const [buyData, setBuyData] = useState({
    paper: "",
    quantity: 0,
  });

  return {
    buyData,
    setBuyData,
    navigate,
  };
}

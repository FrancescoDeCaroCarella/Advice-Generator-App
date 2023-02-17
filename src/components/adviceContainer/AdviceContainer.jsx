import { useState, useCallback } from "react";
import axios from "axios";
import BASE_URL from "../../utils/api"

import AdviceCard from "../adviceCard";

const AdviceContainer = () => {
  const [data, setData] = useState({
    slip: {
      id: 89,
      advice: "Don't be afraid to ask questions.",
    },
  });
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    const { data } = await axios.get(BASE_URL);
    setData(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AdviceCard
      id={`ADVICE #${data?.slip?.id}`}
      advice={`${data?.slip?.advice}`}
      loading={loading}
      onClick={getData}
    />
  );
};

export default AdviceContainer;

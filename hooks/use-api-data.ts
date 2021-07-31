import axios from "axios";
import { useEffect, useState } from "react";

export const useApiData = <T>(path: string, defaultValue: any): T => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    axios
      .get<T>(path)
      .catch((err) => err.response)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return data;
};

export default useApiData;

import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../lib/constants.js";




export const useApi = (endPoint, params) => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();


  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(`${baseUrl}/${endPoint}`, {
        params
      });

      setData(response.data);
      setLoad(false);

    } catch (err) {
      setErr(err.message);
      setLoad(false);

    }
  }


  useEffect(() => {
    getData();

  }, []);




  return [data, load, err];




}
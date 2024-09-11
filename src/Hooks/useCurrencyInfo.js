import { useEffect, useState } from "react";

//bu custom hook. bunu direk appjsde de yazabilirdik. custom hooklar bize sadelik ve
//temiz kod sağlıyor

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    //apiden gelen verinin içerisinde date olduğu için vereceğimiz crrencyi
    //çekmemiz gerekiyor. key olarak currenc veriyoruz
  }, [currency]);
  console.log("Hello");
  console.log(data["aave"]);
  return data;
}

export default useCurrencyInfo;

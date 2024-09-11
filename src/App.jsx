import React, { useState, useEffect } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyinfo";

function App() {
  //toplam 3 tane state tutmak lazım.
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [currencyLeft, setCurrencyLeft] = useState("try"); //yukarıdaki componentin curerncy statei
  const [currencyRight, setCurrencyRight] = useState("usd"); //aşağıdaki componentin currency statei
  const [swap, setSwap] = useState(false); //swap butonu için state

  const currencyInfo = useCurrencyInfo(currencyLeft);
  // seçilen curreny tipini useCurrencyInfo ya gönderip, data çekim işlemi yapıldı

  const currencyOptions = Object.keys(currencyInfo);
  //dönen datadaki key value larını object.key methodu ile çekiyoruz.
  //bu sayede option olarak sunulan değerlere ulaşmış olduk

  useEffect(() => {
    const prevLeftState = currencyLeft;
    const prevRightStare = currencyRight;
    setCurrencyLeft(prevRightStare);
    setCurrencyRight(prevLeftState);
  }, [swap]); //swap butonuna basıldığında bu kod çalışacak.
  //eski statelerin referansını tutuyorum. set fonk. ile current stateleri tutmuş old.
  //referanslarla eşitleyip current typeları çalıştırmış oldum

  function onCurrencyChangeLeft(event) {
    setCurrencyLeft(event.target.value);
  }
  function onCurrencyChangeRight(event) {
    setCurrencyRight(event.target.value);
  }
  function onAmountChange(event) {
    setAmount(event.target.value);
  }
  function handleSwap() {
    setSwap((prevState) => !prevState);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
    //swap statede tutuluyor. her bir state değişiminde false sa true true ise false oluyor
    //herbir swap değişiminde ukarıdaki useeffect kodu çalışıyor
  }
  function handleConvert() {
    setConvertedAmount(amount * currencyInfo[currencyRight]);
  }

  return (
    <div className="container">
      <InputBox
        amount={amount}
        label={swap ? "To" : "From"}
        currencyOptions={currencyOptions}
        selectedCurrency={currencyLeft}
        onCurrencyChange={onCurrencyChangeLeft}
        onAmountChange={onAmountChange}
        amoundDisabled={false}
      />
      <button className="btn-swap" onClick={handleSwap}>
        Swap
      </button>
      <InputBox
        amount={convertedAmount}
        label={swap ? "From" : "To"}
        currencyOptions={currencyOptions}
        selectedCurrency={currencyRight}
        onCurrencyChange={onCurrencyChangeRight}
        amoundDisabled={true}
      />
      <button className="btn-convert" onClick={handleConvert}>
        Convert {currencyLeft} to {currencyRight}
      </button>
    </div>
  );
}

export default App;

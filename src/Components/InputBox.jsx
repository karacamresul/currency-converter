import React, { useId } from "react";
import PropTypes from "prop-types";

function InputBox({
  //taking props here
  //ınputBox componenti default olarak bu değerleri alıyor.
  //Bu şekilde kullanımda prop. gibi kullanım eyerine böyle kullanabiliriz
  //bracket notation deniyor adına
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency,
  amoundDisabled,
}) {
  const id = useId();
  return (
    <div className="input-box">
      <div className="left-part">
        <label htmlFor={id} className="left-label">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="left-input"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
          readOnly={amoundDisabled} //conditionally read-only
        />
      </div>
      <div className="right-part">
        <p>Curreny Type</p>
        <select
          name=""
          id=""
          className="money-type-select"
          value={selectedCurrency}
          onChange={onCurrencyChange}
        >
          {currencyOptions.map((currency) => (
            //arraydeki veriyi map le looplayıp select opsiyonu olarak veriyoruz
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
InputBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.array,
  selectedCurrency: PropTypes.string,
  amoundDisabled: PropTypes.bool,
};

export default InputBox;

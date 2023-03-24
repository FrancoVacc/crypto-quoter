import { useEffect, useState } from "react";

const Form = ({
  setFetch,
  url,
  setUrl,
  consultaApi,
  currency,
  setCurrency,
}) => {
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (currency) {
      setUrl(
        `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`
      );
    }
  }, [currency]);

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency) {
      consultaApi(url);
      setFetch(true);
    } else {
      setValidationError("Required Currency");
      setFetch(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-5 bg-indigo-500 mx-auto mt-5 rounded-md grid grid-cols-2 gap-2"
    >
      <label htmlFor="CryptoSelect" className="text-xl text-white">
        Select a Currency:
      </label>
      <select
        name="select"
        id="CryptoSelect"
        value={currency}
        onChange={handleChange}
        className="w-[100%] rounded-md bg-slate-100"
      >
        <option value="">Example USD</option>
        <option value="USD">USD</option>
        <option value="GBP">Pawns</option>
        <option value="EUR">Euro</option>
        <option value="ARS">ARS</option>
        <option value="MEX">MEX</option>
      </select>
      <input
        type="submit"
        value="Search"
        className="w-[100%] rounded text-white text-xl bg-indigo-800 hover:bg-indigo-600 col-span-2 py-2 mt-5"
      />
      {validationError && (
        <p className="bg-red-700 py-2 text-center text-white col-span-2">
          {validationError}
        </p>
      )}
    </form>
  );
};

export default Form;

const Form = () => {
  return (
    <form className=" p-5 bg-indigo-500 mx-auto mt-5 rounded-md grid grid-cols-2 gap-2">
      <label htmlFor="CryptoSelect" className="text-xl text-white">
        Select a Currency:
      </label>
      <select
        name=""
        id="CryptoSelect"
        className="w-[100%] rounded-md bg-slate-100"
      >
        <option value="">Example USD</option>
        <option value="">USD $</option>
        <option value="">Pawns</option>
        <option value="">Euro</option>
        <option value="">ARS $</option>
        <option value="">UY $</option>
        <option value="">MEX $</option>
      </select>
    </form>
  );
};

export default Form;

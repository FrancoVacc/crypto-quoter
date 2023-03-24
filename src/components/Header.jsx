import LogoCrypto from "../img/LogoCrypto.png";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center md:w-2/6 mx-10 md:mx-auto pt-4">
        <img src={LogoCrypto} alt="Logo" className=" w-20 h-20" />
        <div>
          <h1 className="text-4xl text-white ml-10">Crypto Quoter</h1>
          <div className=" ml-10 mt-3 w-6/7 h-[0.05rem] bg-cyan-400"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

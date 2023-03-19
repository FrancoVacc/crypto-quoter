import { useState, useEffect } from "react";

const CryproShow = () => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!show) {
      setHidden("block");
    } else {
      setHidden("hidden");
    }
  }, [show]);

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className=" bg-indigo-500 rounded-md overflow-hidden">
      <div className="p-5">
        <div className="flex gap-3 items-center">
          <img src="" alt="logo" />
          <div>
            <h2 className="text-3xl text-white font-bold">name</h2>
            <p className="text-xl text-white font-semibold">Price: $0.00</p>
          </div>
        </div>

        <div>
          <ul>
            <li className="grid grid-cols-2">
              <p className={`text-white ${hidden}`}>
                Highest price of the day:
              </p>
              <p className={`text-white ${hidden}`}>0.00</p>
            </li>
            <li className="grid grid-cols-2">
              <p className={`text-white ${hidden}`}>Lowest price of the day:</p>
              <p className={`text-white ${hidden}`}>0.00</p>
            </li>
            <li className="grid grid-cols-2">
              <p className={`text-white ${hidden}`}>Variation:</p>
              <p className={`text-white ${hidden}`}>0.00</p>
            </li>
            <li className="grid grid-cols-2">
              <p className={`text-white ${hidden}`}>Last update:</p>
              <p className={`text-white ${hidden}`}>now</p>
            </li>
          </ul>
        </div>
      </div>
      <div
        className=" bg-cyan-500 h-5 flex justify-center"
        onClick={handleShow}
      >
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default CryproShow;

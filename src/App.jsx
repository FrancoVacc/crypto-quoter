import Form from "./components/Form";
import Header from "./components/Header";
import CryptoShow from "./components/CryproShow";
import Loader from "./components/Loader";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [fetch, setFetch] = useState(false);
  const [url, setUrl] = useState("");
  const [currency, setCurrency] = useState("");

  const { consultaApi, data, loading, error } = useFetch({ currency });

  return (
    <div className="bg-indigo-900 h-auto pb-2">
      <Header />
      <main className="mx-2 md:w-2/6 md:mx-auto">
        <Form
          setFetch={setFetch}
          url={url}
          setUrl={setUrl}
          currency={currency}
          setCurrency={setCurrency}
          consultaApi={consultaApi}
        />

        <div className=" mt-3 h-1 bg-cyan-400"></div>
        {!fetch ? (
          <h2 className=" text-white text-4xl text-center">
            Choose a currency
          </h2>
        ) : loading ? (
          <div className="flex justify-center py-10">
            <Loader />
          </div>
        ) : data ? (
          data.map((item) => (
            <section className="mt-4" key={item.id}>
              <CryptoShow item={item} />
            </section>
          ))
        ) : (
          error && (
            <p className="text-white text-4xl font-bold text-center py-10">
              Error:{error.status}
              {error.statusText}
            </p>
          )
        )}
      </main>
    </div>
  );
}

export default App;

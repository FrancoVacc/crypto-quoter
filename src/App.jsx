import Form from "./components/Form";
import Header from "./components/Header";
import CryptoShow from "./components/CryproShow";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [fetch, setFetch] = useState(false);
  const [url, setUrl] = useState("");
  const [currency, setCurrency] = useState("");

  const { consultaApi, data, loading, error } = useFetch({ currency });

  return (
    <div className=" bg-indigo-900 h-screen">
      <Header />
      <main className="mx-10 md:w-2/6 md:mx-auto">
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
          <p>cargando</p>
        ) : data ? (
          data.map((item) => (
            <section className="mt-4" key={item.id}>
              <CryptoShow item={item} />
            </section>
          ))
        ) : (
          error && <p>error</p>
        )}
      </main>
    </div>
  );
}

export default App;

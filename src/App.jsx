import Form from "./components/Form";
import Header from "./components/Header";
import CryptoShow from "./components/CryproShow";

function App() {
  const initialData = [
    {
      id: "1",
      logo: "logo",
      name: "name",
      price: "0.00",
      hpd: "0.00",
      lpd: "0.00",
      variation: "0",
      update: "now",
    },
  ];

  return (
    <div className=" bg-indigo-900 h-screen">
      <Header />
      <main className="w-2/6 mx-auto">
        <Form />
        <div className=" mt-3 h-1 bg-cyan-400"></div>
        <section className="mt-4">
          <CryptoShow />
        </section>
      </main>
    </div>
  );
}

export default App;

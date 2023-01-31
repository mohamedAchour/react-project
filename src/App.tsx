import React from "react";
import { Movies } from "./components/movies";
import { Navbar } from "./components/navbar";
// import { Counters } from "./components/counters";
// import { Navbar } from "./components/navbar";

function App() {
  // const [counters, setCounters] = useState([
  //   { id: 1, value: 1 },
  //   { id: 2, value: 0 },
  //   { id: 3, value: 0 },
  //   { id: 4, value: 0 },
  // ]);

  // const handleIncrement = (id) => {
  //   setCounters(
  //     counters.map((counter) => {
  //       counter.id === id && counter.value++;
  //       return counter;
  //     })
  //   );
  // };
  // const handleDecrement = (id) => {
  //   setCounters(
  //     counters.map((counter) => {
  //       counter.id === id && counter.value > 0 && counter.value--;
  //       return counter;
  //     })
  //   );
  // };
  // const handleDelete = (id) => {
  //   setCounters(counters.filter((counter) => counter.id !== id));
  // };

  // const handleReset = () => {
  //   setCounters(
  //     counters.map((counter) => {
  //       counter.value = 0;
  //       return counter;
  //     })
  //   );
  // };

  return (
    <>
      {/* <Navbar value={counters.filter((counter) => counter.value > 0).length} /> */}
      <Navbar />
      <main className="container py-5">
        {/* <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        /> */}
        <Movies />
      </main>
    </>
  );
}

export default App;

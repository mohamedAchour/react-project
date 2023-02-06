import React from "react";
import { Movies } from "./components/movies";
import { Navbar } from "./components/navbar";


function App() {

  return (
    <>
      <Navbar />
      <main className="container py-5">
        <Movies/>
      </main>
    </>
  );
}

export default App;

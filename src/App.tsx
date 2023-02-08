import React from "react";
import { Movies } from "./components/movies";
import { Navbar } from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import { About } from "./routes/about";
import { Contact } from "./routes/contact";
import { Profile } from "./routes/profile";

function App() {
  return (
    <>
      <Navbar />
      <div className="content container py-5">
        {/* switch will enable to render links from most specific ones to most generics or use exact on "/" !!*/}
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Movies} />
        </Switch>
      </div>
      {/* <main className="container py-5">
        <Movies />
      </main> */}
    </>
  );
}

export default App;

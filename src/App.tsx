import React from "react";
import { Movies } from "./components/movies";
import { Navbar } from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { About } from "./routes/about";
import { Contact } from "./routes/contact";
import { Profile } from "./routes/profile";
import { Profiles } from "./routes/profiles";
import { Posts } from "./routes/posts";
import { NotFound } from "./routes/not-found";

function App() {
  return (
    <>
      <Navbar />
      <main className="content container py-5">
        {/* switch will enable to render links from most specific ones to most generics or use exact on "/" !!*/}
        <Switch>
          {/* to pass props to a component use render instead */}
          {/* pass down all other propos */}

          <Route path="/profiles/:id" component={Profile} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* sometimes we may redirect resources to another url, to not lose users redirect them to a new route */}
          <Redirect from="/messages" to="/posts" />
          {/* if optional params make no sense, include them in query string */}
          <Route
            path="/posts/:year?/:month?"
            render={(props) => <Posts sortBy="newest" {...props} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={Movies} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;

import React from "react";
import { Movies } from "./components/movies";
import { Navbar } from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { About } from "./routes/about";
import { Profile } from "./routes/profile";
import { Products } from "./routes/products";
import { Posts } from "./routes/posts";
import { NotFound } from "./routes/not-found";
import { Admin } from "./routes/admin/admin";
import { Home } from "./routes/home";
import { LoginForm } from "./components/loginForm";
import { RegistrForm } from "./components/registerForm";

import { MovieForm } from "./components/movieForm";

function App() {
  return (
    <>
      <Navbar />
      <main className="content container py-5">
        {/* switch will enable to render links from most specific ones to most generics or use exact on "/" !!*/}
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/movies/new" component={MovieForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrForm} />
          <Route path="/profile" component={Profile} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          {/* sometimes we may redirect resources to another url, to not lose users redirect them to a new route */}
          <Redirect from="/messages" exact to="/posts" />
          {/* to pass props to a component use render instead */}
          {/* pass down all other props */}
          {/* if optional params make no sense, include them in query string */}
          <Route
            path="/posts/:year?/:month?"
            render={(props) => <Posts sortBy="newest" {...props} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;

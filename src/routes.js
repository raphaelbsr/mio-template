import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "~/components/Autenticacao/services/auth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const PrivateRoute = ({ component: Component, title, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Layout title={title}>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/registrar" component={() => <h1>Cadastrar</h1>} />
      <Route path="/esqueci-senha" component={() => <h1>Esqueci Senha</h1>} />

      <PrivateRoute path="/home" title="Home" component={Home} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </HashRouter>
);

export default Routes;

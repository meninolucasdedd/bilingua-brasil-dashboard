import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import NovaTurma from "./pages/NovaTurma";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/turmas/nova" component={NovaTurma} />
      </Switch>
    </BrowserRouter>
  );
}

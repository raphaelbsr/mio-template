import React, { useState } from "react";
import { Slide as TransitionComponent } from "@material-ui/core";
import Login from "./Login";
import EsqueciSenha from "./EsqueciSenha";

const Autenticacao = props => {
  const [isShowingLogin, setShowingLogin] = useState(true);

  const esqueciSenha = () => {
    setShowingLogin(false);
  };

  const login = () => {
    setShowingLogin(true);
  };

  return (
    <div>
      {isShowingLogin && (
        <TransitionComponent in={isShowingLogin} timeout={500} direction="down">
          <div>
            <Login handleClickEsqueciSenha={esqueciSenha} />
          </div>
        </TransitionComponent>
      )}

      {!isShowingLogin && (
        <TransitionComponent
          in={!isShowingLogin}
          timeout={500}
          direction="right"
        >
          <div>
            <EsqueciSenha handleClickLogin={login} />
          </div>
        </TransitionComponent>
      )}
    </div>
  );
};

export default Autenticacao;

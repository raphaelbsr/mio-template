import React from "react";
// import { Autenticacao } from "~/components/index";
import { Container, Top, Bottom, LogoContent, LoginContent } from "./styles";
import Logo from "~/assets/images/Logo.png";
import Logo2x from "~/assets/images/Logo@2x.png";

import { Autenticacao } from "mio-library-autenticacao";

const Login = props => {
  return (
    <Container>
      <Top>
        <LogoContent>
          <img src={Logo} srcSet={`${Logo} 1x, ${Logo2x} 2x`} alt="MIO" />
        </LogoContent>
      </Top>
      <Bottom>
        <LoginContent>
          <Autenticacao
            beforeSubmit={() => {}}
            afterSubmit={status => {
              console.log(status);
              if (status.status) {
                props.history.push("/home");
              }
            }}
          />
        </LoginContent>
      </Bottom>
    </Container>
  );
};

export default Login;

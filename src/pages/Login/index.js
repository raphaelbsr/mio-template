import React, { useState } from "react";
import {
  CardHeader,
  CardContent,
  TextField,
  Button,
  Grid,
  CircularProgress
} from "@material-ui/core";
import { ErrorMessage, Autenticacao } from "~/components/index";
import {
  Container,
  Top,
  Bottom,
  LogoContent,
  LoginCard,
  LoginContent,
  Form
} from "./styles";
import Logo from "~/assets/images/Logo.png";
import Logo2x from "~/assets/images/Logo@2x.png";

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
            antesDeEntrar={() => {}}
            depoisDeEntrar={status => {
              console.log(status);
              //props.history.push("/home");
            }}
          />
        </LoginContent>
      </Bottom>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import {
  CardHeader,
  CardContent,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Box
} from "@material-ui/core";
import { ErrorMessage } from "~/components/index";
import { LoginCard, Form } from "./styles";
import api from "../services/api-mio-auth";
import { login } from "../services/auth";
import PropTypes from "prop-types";

const Login = props => {
  const { antesDeEntrar, depoisDeEntrar, handleClickEsqueciSenha } = props;
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fazerLogin = async e => {
    e.preventDefault();
    setLoading(true);
    antesDeEntrar();
    try {
      const response = await api.post(
        "/sessions",
        JSON.stringify({ email, password }),
        {
          headers: {
            "content-type": "application/json",
            "DC-SISTEMA": process.env.REACT_APP_ID
          }
        }
      );
      login(response.data.token);
      const status = {
        status: true,
        msg: "Login realizado com sucesso"
      };
      setLoading(false);
      depoisDeEntrar(status);
    } catch (err) {
      const status = {
        status: false,
        error: "Não foi possível realizar o acesso ao sistema"
      };
      setError("Não foi possível realizar o acesso ao sistema");
      setLoading(false);
      depoisDeEntrar(status);
    }
  };

  return (
    <Box>
      <LoginCard raised>
        <CardHeader
          title="Credenciais"
          subheader="Informe suas credenciais para acessar o sistema"
        />
        <CardContent>
          <Form onSubmit={fazerLogin} method="post">
            <Grid
              container
              spacing={0}
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid xs={12} lg={12} md={12} sm={12} xl={12} item>
                <TextField
                  onChange={e => setEmail(e.target.value)}
                  margin="none"
                  variant="outlined"
                  fullWidth
                  label="E-mail"
                  placeholder="Informe seu e-mail de cadastro"
                />
              </Grid>
              <Grid xs={12} lg={12} md={12} sm={12} xl={12} item>
                <TextField
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  label="Senha"
                  placeholder="Informe sua senha"
                />
              </Grid>

              {error && <ErrorMessage error={error} />}

              <Grid
                xs={6}
                lg={6}
                md={6}
                sm={6}
                xl={6}
                item
                style={{ paddingTop: 8 }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {isLoading ? (
                    <CircularProgress size={24} color="secondary" />
                  ) : (
                    "Entrar"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Form>
        </CardContent>
      </LoginCard>
      <Grid container spacing={0} justify="flex-end">
        <Grid
          xs={4}
          lg={4}
          xl={3}
          md={4}
          sm={6}
          item
          style={{ paddingTop: 10, paddingRight: 22 }}
        >
          <Button
            fullWidth
            variant="text"
            color="primary"
            onClick={handleClickEsqueciSenha}
          >
            Esqueci a senha
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

Login.propTypes = {
  antesDeEntrar: PropTypes.func,
  depoisDeEntrar: PropTypes.func,
  handleClickEsqueciSenha: PropTypes.func
};

Login.defaultProps = {
  antesDeEntrar: () => {},
  depoisDeEntrar: () => {},
  handleClickEsqueciSenha: () => {}
};

export default Login;

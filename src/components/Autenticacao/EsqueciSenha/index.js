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

const EsqueciSenha = props => {
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { handleClickLogin } = props;
  return (
    <Box>
      <LoginCard raised>
        <CardHeader
          title="Recuperação de Senha"
          subheader="Informe o e-mail que você utiliza para acessar no sistema"
        />
        <CardContent>
          <Form onSubmit={() => {}} method="post">
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
                    "Recuperar Senha"
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
            onClick={handleClickLogin}
          >
            Ir para o Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EsqueciSenha;

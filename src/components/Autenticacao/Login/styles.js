import styled from "styled-components";

import Card from "@material-ui/core/Card";

export const LoginContent = styled.div`
  @media (max-width: 601px) {
    position: relative;
    top: -40px;
  }
  width: 100%;
  max-width: 600px;
`;

export const LoginCard = styled(Card)`
  margin-left: 22px;
  margin-right: 22px;
`;

export const Form = styled.form``;

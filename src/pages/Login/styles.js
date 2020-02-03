import styled from "styled-components";

import Card from "@material-ui/core/Card";
import BackgroundImage from "../../assets/images/background@2x.png";

export const Container = styled.div`
  display: flex;
  min-height: 100%;

  @media (min-width: 601px) {
    flex-direction: row;
  }
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  @media (min-width: 601px) {
    justify-content: center;
    justify-content: center;
    align-items: center;
  }
`;

export const LogoContent = styled.div``;

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

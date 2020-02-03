import styled from 'styled-components';
import { styled as muiStyled } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
// import { relative } from 'path';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  /* height: 100%; */
`;

export const MuiPaper = muiStyled(Paper)({
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
});

export const MuiCircularProgress = muiStyled(CircularProgress)({});

export const MuiAppBar = muiStyled(AppBar)({
  position: 'relative',
});

export const MuiTitle = muiStyled(Typography)({
  flex: 1,
});

export const ButtonBox = muiStyled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

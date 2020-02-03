import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DefaultIcon from '@material-ui/icons/ViewList';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import { Container } from './styles';

const drawerWidth = 120;

const useStyles = makeStyles(theme => ({
  box: {
    // display: 'flex',
  },
  typography: {
    fontSize: 15,
    backgroundColor: theme.palette.primary.light,
    color: 'white',
    padding: theme.spacing(1),
  },
  root: {
    flexDirection: 'column',
  },
  body1: {
    fontSize: 14,
  },
  listItemIcon: {
    // width: drawerWidth,
    justifyContent: 'center',
  },
}));

const itens = [
  {
    onClick: () => {
      alert('item cadastro');
    },
    icon: <DefaultIcon color="primary" />,
    title: 'Produtos',
  },
];

const Layout = withRouter(({ history }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography
        align="center"
        variant="subtitle2"
        color="primary"
        className={classes.typography}
      >
        Cadastros
      </Typography>
      {itens.map(({ onClick, icon, title }) => (
        <ListItem key={title} onClick={onClick} button className={classes.root}>
          <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
          <ListItemText
            disableTypography
            primary={(
              <Typography
                className={classes.body1}
                variant="body1"
                color="primary"
              >
                {title}
              </Typography>
            )}
          />
        </ListItem>
      ))}
    </Box>
  );
});

export default Layout;

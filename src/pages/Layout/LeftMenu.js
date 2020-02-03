import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AllInbox from '@material-ui/icons/AllInbox';
import Typography from '@material-ui/core/Typography';
import { Creators as AppCreators } from '../../store/ducks/app';

const drawerWidth = 120;

const LeftMenu = withRouter(
  ({ history, switchSecundaryLeftMenu, secundaryLeftMenu }) => {
    const useStyles = makeStyles(theme => ({
      root: {
        flexDirection: 'column',
        width: drawerWidth,
        // [theme.breakpoints.up('sm')]: {
        //   width: 100,
        // },
      },
    }));

    const useStylesItem = makeStyles(theme => ({
      root: {
        justifyContent: 'center',
      },
    }));

    const useStylesText = makeStyles(theme => ({
      body1: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        fontSize: 12,
        [theme.breakpoints.up('sm')]: {
          fontSize: 14,
        },
        // color: theme.palette.background.paper,
      },
      icon: {
        // color: theme.palette.background.paper,
      },
    }));

    const classes = useStyles();
    const classesItem = useStylesItem();
    const classesText = useStylesText();

    const itens = [
      {
        onClick: () => {
          switchSecundaryLeftMenu(!secundaryLeftMenu);
        },
        icon: <AllInbox color="secondary" className={classesText.icon} />,
        title: 'Cadastros',
      },
    ];

    return (
      <div>
        {itens.map(({ onClick, icon, title }) => (
          <ListItem
            key={title}
            onClick={onClick}
            button
            className={classes.root}
          >
            <ListItemIcon className={classesItem.root}>{icon}</ListItemIcon>
            <ListItemText
              disableTypography
              primary={(
                <Typography
                  className={classesText.body1}
                  variant="body1"
                  color="secondary"
                >
                  {title}
                </Typography>
              )}
            />
          </ListItem>
        ))}
      </div>
    );
  },
);

const mapStateToProps = state => ({
  secundaryLeftMenu: state.app.secundaryLeftMenu,
});

const mapDispatchToProps = dispatch => bindActionCreators(AppCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftMenu);

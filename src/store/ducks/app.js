import Immutable from 'seamless-immutable';

export const Types = {
  SWITCH_SECUNDARY_LEFT_MENU: 'APP/SWITCH_SECUNDARY_LEFT_MENU',
};

const initialState = Immutable({
  secundaryLeftMenu: false,
  loading: false,
  error: null,
});

export default function app(state = initialState, action) {
  switch (action.type) {
    case Types.SWITCH_SECUNDARY_LEFT_MENU:
      return {
        ...state,
        secundaryLeftMenu: action.payload.isOpen,
      };
    default:
      return state;
  }
}

export const Creators = {
  switchSecundaryLeftMenu: isOpen => ({
    type: Types.SWITCH_SECUNDARY_LEFT_MENU,
    payload: {
      isOpen,
    },
  }),
};

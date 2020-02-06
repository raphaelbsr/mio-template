import Immutable from "seamless-immutable";

export const Types = {
  SET_LOADING: "APP/SET_LOADING"
};

const initialState = Immutable({
  loading: false,
  error: null
});

export default function app(state = initialState, action) {
  switch (action.type) {
    case Types.SET_LOADING:
      return {
        ...state,
        loading: action.payload.isLoading
      };
    default:
      return state;
  }
}

export const Creators = {
  seLoading: isLoading => ({
    type: Types.isLoading,
    payload: {
      isLoading
    }
  })
};

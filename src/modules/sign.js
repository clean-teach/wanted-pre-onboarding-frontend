const SIGNUP = 'SIGNUP';
const SIGNIN = 'SIGNIN';

const signUp = () => ({ type: SIGNUP });
const signIn = () => ({ type: SIGNIN });

const initialState = {};

export default function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return {};
    case SIGNIN:
      return {};
    default:
      return state;
  }
}

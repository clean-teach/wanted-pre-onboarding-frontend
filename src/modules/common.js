const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export const loadingAction = () => ({ type: LOADING });
export const successAction = () => ({ type: SUCCESS });
export const errorAction = (error) => ({ type: ERROR, error });

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export default function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        success: false,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        success: true,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
}

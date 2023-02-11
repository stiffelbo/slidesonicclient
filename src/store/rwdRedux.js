/* SELECTORS */

export const getRwd = ({rwd}) => rwd;

/* ACTIONS */

// action name creator
const reducerName = 'rwd';
const createActionName = name => `app/${reducerName}/${name}`;
export const SET_RWD_MODE = createActionName('SET_RWD_MODE');

export const setRwdMode = payload => ({ payload, type: SET_RWD_MODE });

/*Initial state*/

const initialState = {  
  rwd: {},
};

// reducer

export function rwdReducer(statePart = initialState, action = {}) {
  switch (action.type) {

    case SET_RWD_MODE:
        return {
            ...action.payload,
        }

    default:
      return statePart;
  }
}
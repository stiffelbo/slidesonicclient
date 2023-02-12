import { toast } from 'react-toastify';

/* SELECTORS */
export const getVisual = ({ visuals }) => visuals.current;
export const getBpm = ({ visuals }) => visuals.bpm;
export const getMultiplier = ({ visuals }) => visuals.multiplier;

/* ACTIONS */

// action name creatorconst 
const reducerName = 'visuals';
const createActionName = name => `app/${reducerName}/${name}`;

const SET_CURRENT = createActionName('SET_CURRENT');
const SET_BPM = createActionName('SET_BPM');
const SET_MULTIPLIER = createActionName('SET_MULTIPLIER');

export const setCurrent = payload => ({ payload, type: SET_CURRENT });
export const setBpm = payload => ({ payload, type: SET_BPM });
export const setMultiplier = payload => ({ payload, type: SET_MULTIPLIER });

/* THUNKS */

export const setCurrentRequest = (name) => {
    return dispatch => {
      try {
        dispatch(setCurrent(name));
      } catch(e) {
        toast.error('Could notset current collection');
      }  
    };
};
export const setBpmRequest = (val) => {
    return dispatch => {
      try {
        dispatch(setBpm(val));
      } catch(e) {
        toast.error('Could notset idx for image set');
      }  
    };
};
export const setMultiplierRequest = (val) => {
    return dispatch => {
      try {
        dispatch(setMultiplier(val));
      } catch(e) {
        toast.error('Could notset idx for image set');
      }  
    };
};


/* INITIAL STATE */

const initialState = {
    current : '',
    bpm : 115,
    multiplier : 1,
};

/* REDUCER */

export default function visualsReducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case SET_CURRENT: 
            return { ...statePart, current: action.payload};
        case SET_BPM: 
            return { ...statePart, bpm: action.payload};
        case SET_MULTIPLIER: 
            return { ...statePart, multiplier: action.payload};
        default:
            return statePart;
    }
}
import { toast } from 'react-toastify';
import {ls} from '../utils/ls';

/* SELECTORS */
export const getCollectionNames = ({ collections }) => {
    const keys = Object.keys(collections.data);
    return keys;
};

export const getCollection = ({ collections }, name) => {
    return collections.data[name];
};

export const getCollections = ({ collections }) => collections.data;
export const getCurrent = ({ collections }) => collections.current;

/* ACTIONS */

// action name creatorconst 
const reducerName = 'collections';
const createActionName = name => `app/${reducerName}/${name}`;

const LOAD_COLLECTIONS = createActionName('LOAD_COLLECTIONS');
const ADD_COLLECTION = createActionName('ADD_COLLECTION');
const UPDATE_COLLECTION = createActionName('UPDATE_COLLECTION');
const SET_CURRENT = createActionName('SET_CURRENT');


export const loadCollections = payload => ({ payload, type: LOAD_COLLECTIONS });
export const addCollection = payload => ({ payload, type: ADD_COLLECTION });
export const updateCollection = payload => ({ payload, type: UPDATE_COLLECTION });
export const setCurrent = payload => ({ payload, type: SET_CURRENT });

/* THUNKS */

export const loadCollectionsRequest = () => {
    return dispatch => {
      try {
        let res = ls.getCollections();   
        dispatch(loadCollections(res));
      } catch(e) {
        toast.error('Could not load collections');
      }  
    };
};

export const addCollectionRequest = (name) => {
    return dispatch => {
      try {
        let res = ls.addCollection(name);   
        dispatch(addCollection(res));
      } catch(e) {
        toast.error('Could not add collection');
      }  
    };

};
export const updateCollectionRequest = (name, data) => {
    return dispatch => {
      try {
        let res = ls.updateCollection(name, data);   
        dispatch(updateCollection(res));
      } catch(e) {
        toast.error('Could not add collection');
      }  
    };

};
export const deleteCollectionRequest = (name) => {
    return dispatch => {
      try {
        ls.deleteCollection(name);
        let res = ls.getCollections();   
        dispatch(loadCollections(res)); 
      } catch(e) {
        toast.error('Could not delete collection');
      }  
    };
};
export const setCurrentRequest = (name) => {
    return dispatch => {
      try {
        dispatch(setCurrent(name));
      } catch(e) {
        toast.error('Could notset current collection');
      }  
    };
};


/* INITIAL STATE */

const initialState = {
    data: {},
    current : '',
};

/* REDUCER */

export default function collectionsReducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_COLLECTIONS: 
            return { ...statePart, data: action.payload, current: '' };
        case ADD_COLLECTION: 
            return { ...statePart, data: {...statePart.data, ...action.payload }};
        case UPDATE_COLLECTION: 
            return { ...statePart, data: {...statePart.data, ...action.payload }};
        case SET_CURRENT: 
            return { ...statePart, current: action.payload};
        default:
            return statePart;
    }
}
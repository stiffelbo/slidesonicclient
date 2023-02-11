import { toast } from "react-toastify";

export const ls = {
    getCollections: () => {
        const collections  = localStorage;     
        return collections;
    },
    addCollection: (collName) => {
        try {
          localStorage.setItem(collName, JSON.stringify([]));
          return {[collName] : []}
        } catch (error) {
          toast.error('Error while adding collection: ' + error.message);
        }
    },
    updateCollection: (collName, array) => {
      localStorage.setItem(collName, JSON.stringify(array));
      return {[collName] : array}
    },
    deleteCollection: (collName) => {
      localStorage.removeItem(collName);
    },
    checkLSCapacity: (collName, obj) => {
      let coll = JSON.parse(localStorage.getItem(collName)) || [];
      let str = JSON.stringify(coll.concat(obj));
      return (str.length < localStorage.getCapacity());
    }
  };
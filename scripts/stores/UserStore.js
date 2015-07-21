console.log("Stores/UserStores.js >>>>>>> Start");
import { register } from '../AppDispatcher';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
import selectn from 'selectn';

const _users = {};

const UserStore = createStore({
  contains(login, fields) {
    return isInBag(_users, login, fields);
  },

  get(login) {
    return _users[login];
  }
});

UserStore.dispatchToken = register(action => {
  const responseUsers = selectn('response.entities.users', action);
  if (responseUsers) {
    mergeIntoBag(_users, responseUsers);
    UserStore.emitChange();
  }
});

console.log("Stores/UserStores.js <<<<<< End");
export default UserStore;

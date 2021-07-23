import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { userFetch } from '../../actions/user';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares)

const initState = {
    user: {
      avatar: '',
      perfil: '',
      social: []
    }
};



let store = mockStore(initState);

describe('prueba en la action user', (() => {

  beforeEach( () => {
    store = mockStore(initState);
  });

  test('prueba action type userBio', () => {

  });

}));//Final describe

import {renderHook, act} from "@testing-library/react-hooks";
import  UserHook   from '../../hooks/UserHook';
import React from 'react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Prueba para hook', (() => {
  const initialState = {};
  const mockStore = configureStore();
  let store,wrapper
  test('prueba hook userBio',()=>{
    console.log('Test');
    store = mockStore(initialState)
    const { result } = <Provider store={store}> renderHook(() => UserHook(""))</Provider>
    act(() => {
      console.log('Act');
        //result.current.buscarUser('perfil');
        console.log(result.error)
    })

  });

}));//Final describe

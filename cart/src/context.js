import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading:false,
  cart:cartItems,
  total:0,
  amount:0,
}

const AppProvider = ({ children }) => {
  // useReduce will help us to manage our many states values
  // it recieves state which will be our initial value
  // and dispatch, this will help us shooting our change of state
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    // dispatch recieves and object with type, this will
    // tell us which option on the reducer we want to run
    dispatch({ type: 'CLEAR_CART'})
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id })
  }

  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id })
  }

  const fetchData = async () => {
    dispatch({type: 'LOADING'});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: 'DISPLAY_ITEMS', payload:cart})
  }

  useEffect(()=> {
    fetchData();
  }, [])

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        // sending ...state, we use spread operator to send several states
        ...state,
        clearCart,
        remove, 
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure 'use' in your hooks variable names
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

"use client"
import React from 'react'
import { createContext } from 'react';

export const MyContext = createContext(); 

const Context = ({children}) => {
  const useerName  = "blueballs";
  return (
    <div>
        <MyContext.Provider value={useerName}>
          {children}
        </MyContext.Provider>
    </div>
  )
}

export default Context;

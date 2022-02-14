import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value='holas'>
        {children}
    </AppContext.Provider>
}

// custom hook

export { AppContext, AppProvider} 
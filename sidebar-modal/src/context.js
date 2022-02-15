import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // Let's set our global state value variables
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        openModal,
        closeModal, 
        closeSidebar
    }}>
        {children}
    </AppContext.Provider>
}

// custom hook
// Remember when naming hooks always start with 'use'
export const useGlobalContext= () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider } 
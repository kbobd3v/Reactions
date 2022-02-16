import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return <AppContext.Provider value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu, 
        openSidebar, 
        closeSubmenu, 
        closeSidebar
    }}>
        {children}
    </AppContext.Provider>;
}

export const UseGlobalContext = () => {
    return useContext(AppContext);
}

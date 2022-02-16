import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    // we'll use this to locate the display of our submenu
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links:[]});

    const openSubmenu = (text, coordinates) => {
        // compare find the page through text set by parameter
        const page = sublinks.find((link)=> link.page == text);
        setPage(page);
        // when submemu opens it'll use our coordinates to display
        setLocation(coordinates)
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
        closeSidebar,
        location,
        page,
    }}>
        {children}
    </AppContext.Provider>;
}

export const UseGlobalContext = () => {
    return useContext(AppContext);
}

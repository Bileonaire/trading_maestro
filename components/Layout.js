import React from 'react'
import { Header } from './'
import Sidebar from './Sidebar'

const Layout = ({ children}) => {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="flex-1 m-5">
                    {children}
                </div >
            </div>
        </>
    )
}

export default Layout
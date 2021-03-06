// The MobileHeader will only display on small devices. 
// On small devices, the SideBar disappears. 
// So the application will have a top menu instead of a sidebar on mobile devices.

import React from "react";
import { Link, NavLink } from "react-router-dom"

import logo from '../img/logo.svg'
import home_icon from '../img/home_icon.svg'
import search_icon from '../img/search_icon_white.svg'

const MobileHeader = () => {
    return (
        <div className="block md:hidden w-full text-white bg-gray-900">
            <div className="flex flex-row">
                <div className="flex flex-row py-4">
                    <img src={logo} alt="logo" />
                    <Link className="text-2xl text-white lg:text:text-3xl hover:text-gray-100"
                          to="/">
                        Spotify
                    </Link>
                </div>
                <div className="text-left pt-3">
                    <NavLink className="flex mx-2 my-1 rounded p-2 px-4 hover:bg-gray-800"
                             activeClassName="bg-gray-800"
                             exact to="/">
                        <img src={home_icon} alt="home_icon" />
                        <span className="ml-4">Home</span>
                    </NavLink>
                </div>
                <div className="text-left pt-3">
                <NavLink className="flex mx-2 my-1 rounded p-2 px-4 hover:bg-gray-800"
                             activeClassName="bg-gray-800"
                             exact to="/">
                        <img src={search_icon} alt="search_icon" />
                        <span className="ml-4">Search</span>
                    </NavLink>
                </div>
                <div className="mt-3 flex flex-col">
                    <a href="//add link to your github repo" 
					   className="mx-2 text-sm text-gray-600 hover:text-gray-500" 
					   aria-label="GitHub">
                        Github
                    </a>
                    <a href="//add link to your twitter" 
					   className="mx-2 text-sm text-gray-600 hover:text-gray-500"
	                   aria-label="Twitter">
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader
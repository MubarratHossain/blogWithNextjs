"use client";

import { useState } from "react";
import Link from "next/link";
import { LoginLink, RegisterLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { FaHome, FaBlog, FaSignInAlt, FaUserPlus, FaBars, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { isAuthenticated, user } = useKindeBrowserClient();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-gradient-to-br from-teal-500 via-teal-400 to-blue-500 p-4 shadow-md sticky top-0 z-50 opacity-90">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <h1 className="text-[15px] md:text-xl font-mono font-bold text-black">EJP</h1>

                
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <FaBars className="text-black text-2xl" />
                    </button>
                </div>

                
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="flex items-center space-x-2 text-black text-xs hover:text-teal-300 transition">
                        <FaHome />
                        <span className="text-black font-mono text-xs md:text-lg">Home</span>
                    </Link>

                    <Link href="/profile" className="flex items-center space-x-2 cursor-pointer text-white text-lg hover:text-teal-300 transition">
                            <FaUserCircle className="text-white text-lg" />
                            <span className="text-white font-mono text-lg">{user?.given_name || "Profile"}</span>
                        </Link>

                    
                    {isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            
                            <LogoutLink>
                                <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                                    Log out
                                </button>
                            </LogoutLink>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <LoginLink>
                                <button className="flex items-center space-x-2 bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition">
                                    <FaSignInAlt /> <span>Login</span>
                                </button>
                            </LoginLink>
                            <RegisterLink>
                                <button className="flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition animate-pulse">
                                    <FaUserPlus /> <span>Sign Up</span>
                                </button>
                            </RegisterLink>
                        </div>
                    )}
                </div>
            </div>

            
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-br from-teal-500 via-teal-400 to-blue-500 p-4 rounded-lg shadow-lg mt-2">
                    <div className="flex flex-col items-center space-y-4">
                        <Link href="/" className="flex items-center space-x-2 text-white text-lg hover:text-teal-300 transition">
                            <FaHome />
                            <span className="text-white font-mono text-lg">Home</span>
                        </Link>

                        
                        <Link href="/profile" className="flex items-center space-x-2 cursor-pointer text-white text-lg hover:text-teal-300 transition">
                            <FaUserCircle className="text-white text-lg" />
                            <span className="text-white font-mono text-lg">{user?.given_name || "Profile"}</span>
                        </Link>

                       
                        {isAuthenticated ? (
                            <>
                                <Link href="/profile" className="flex items-center space-x-2 cursor-pointer text-white text-lg hover:text-teal-300 transition">
                                    <FaUserCircle className="text-white text-lg" />
                                    <span className="text-white font-mono text-lg">{user?.given_name || "Profile"}</span>
                                </Link>
                                <LogoutLink>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                        Log out
                                    </button>
                                </LogoutLink>
                            </>
                        ) : (
                            <>
                                <LoginLink>
                                    <button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                                        <FaSignInAlt /> <span>Login</span>
                                    </button>
                                </LoginLink>
                                <RegisterLink>
                                    <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition animate-pulse">
                                        <FaUserPlus /> <span>Sign Up</span>
                                    </button>
                                </RegisterLink>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

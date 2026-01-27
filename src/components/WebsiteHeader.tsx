import React from "react";
import {Link} from "@tanstack/react-router";




export const WebsiteHeader: React.FC = () => {
    return (
        <div className="sticky top-0 backdrop-blur-md z-50  flex  justify-between items-center px-8 py-4 h-16  shadow-md">
            <Link to="/">
                <span className="cursor-pointer text-pumpkin-500 text-2xl font-bold">Tik</span><span className="text-picton-blue-500 text-2xl font-boldcursor-pointer ">o</span>

            </Link>
            <div className=" flex  items-center gap-8">
                    <p className="cursor-pointer">Contact us</p>

            </div>
        </div>
    )
}
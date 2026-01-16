import React from "react";




export const WebsiteHeader: React.FC = () => {
    return (
        <div className="fixed top-0  right-0 left-0 z-50 flex  justify-between items-center px-8 py-4 bg-dark-one shadow-md">
            <div>
                <a href="/public" className="cursor-pointer text-inch-worm-500 text-2xl font-bold">Tiko</a>
            </div>
            <div className="text-white flex  items-center gap-8">
                    <p className="cursor-pointer">Contact us</p>
                    <button className=" cursor-pointer btn-ghost btn-sm bg-inch-worm-500 px-4 py-2 rounded-xl">
                        <span className="text-black">Sell Event</span>
                    </button>
            </div>
        </div>
    )
}
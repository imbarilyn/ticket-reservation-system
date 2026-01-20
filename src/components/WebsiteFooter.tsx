import React from "react";
import {Linkedin, Mail} from "lucide-react";


export const WebsiteFooter: React.FC = () => {

    const tabs = [
        {id: 1, value: 'Terms & Conditions'},
        {id: 2, value: 'Contact Us'},
        {id: 3, value: 'Privacy Policy'},
        {id: 4, value: 'Refund Policy'},

    ] as {
        id: number;
        value: string;
    } []

    return(
        <div className="w-10/12  lg:pt-28 pt-10 pb-2 mx-auto text-white items-center justify-between">
            <div className="grid grid-cols-3">
                <div className="md:col-span-1  col-span-3 ">
                    {/*<img src={MyLogo} alt="my-logo image" className="w-50"/>*/}
                    <a href="/" className="cursor-pointer text-inch-worm-500 text-2xl font-bold">Tiko</a>
                </div>
                <div className="col-span-2 md:col-span-1 space-y-2">
                    <p className="text-stone-400 md:text-xl text-sm">Quick Links</p>
                    <div className="cursor-pointer space-y-2 grid md:grid-cols-2">
                        {
                            tabs.map((tab   ) => (
                                <p key={tab.id}>{tab.value}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <p className="text-stone-400  md:text-xl text-sm">My Socials</p>
                    <div className="cursor-pointer space-y-2">
                        <div className="flex gap-2 items-end">
                            <Linkedin />
                            <a href="https://www.linkedin.com/in/linah-imbari254/" target="_blank">linkedIn </a>
                        </div>

                        <div className="flex gap-2 items-end">
                            <Mail />
                            <a href="mailto:linahmuhonjaimbari@gmail.com" target="_blank">Email</a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
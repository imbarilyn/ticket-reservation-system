import React from 'react';
import { Check } from 'lucide-react';

export const ProgressComponent: React.FC = () => {
    return (
        <div className="flex gap-4 w-10/12 mx-auto justify-center">
            <div className="flex gap-2">
                <div
                    className="h-10 w-10 bg-picton-blue-500 rounded-full flex justify-center items-center shadow-2xl outline-2 outline-offset-2 outline-picton-blue-400/100 ">
                    <Check color='#fff'/>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center h-10">
                        <hr className="w-[200px] border-[2px] rounded-md border-pumpkin-500" />
                    </div>
                    <div className="flex justify-center">
                        <p className="text-stone-600">Personal Details</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-2">
                <div
                    className="h-10 w-10 bg-picton-blue-500 rounded-full flex justify-center items-center shadow-2xl outline-2 outline-offset-2 outline-picton-blue-400/100 ">
                    <p className="font-bold text-white">2</p></div>
                <div className="">
                    <div className="flex flex-col justify-center items-center h-10">
                        <hr className="w-[200px] border-[2px] rounded-md border-pumpkin-500"/>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-stone-600">Checkout</p>
                    </div>

                </div>
            </div>
            <div className="flex gap-2">
                <div
                    className="h-10 w-10 bg-picton-blue-500 rounded-full flex justify-center items-center shadow-2xl outline-2 outline-offset-2 outline-picton-blue-400/100 ">
                    <p className="font-bold text-white">3</p></div>
            </div>

        </div>
    )

}
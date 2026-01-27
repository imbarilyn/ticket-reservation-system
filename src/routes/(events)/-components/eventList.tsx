import React from "react";
import {Link} from "@tanstack/react-router";
import screenshoot2 from '../../../assets/images/screenshoot4.png'
import {getEventColors} from "../../../utils/colorGenerator.ts";
import { type Event} from "../../../types/types.ts";
import {formatDate} from "../../../utils/dateFormatter.ts";


interface EventProps {
    event: Event
}

export const EventListComponent: React.FC<EventProps> = ({event}) =>{
    const getColor = getEventColors(event.name)
    console.log("getColor", getColor)
    return (
        <Link
            to="/events/$eventId"
            params={{eventId: String(event.event_id)}}
            key={event.event_id}
            id="background-evet-cards"
            className="transition delay-75 ease-in-out hover:-translate-y-1 bg-supernova-rose-50 max-w-xs shadow-2xl rounded-[22px]">
            <div className="relative  rounded-[16px]">

                <div
                    className="rounded-t-2xl overflow-hidden">
                    <img className="object-cover" src={screenshoot2} alt=""/>
                </div>
            </div>
            <div className="relative p-4">
                <h5 className=" text-2xl font-semibold tracking-tight text-heading ">{event.name}</h5>
                <div className="">
                    <div className="flex gap-4">
                        <span className="opacity-40">Date</span>
                        <span>{event.date}</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="opacity-40">Venue</span>
                        <span>{event.location}</span>
                    </div>
                </div>
                <div className={`absolute h-10  rounded-b-[22px] -top-1 ${getColor.bgColor}`}>
                    <div  className={`${getColor.bgColor}`}>
                        <p >{formatDate(event.date, 'date')}</p>

                    </div>
                </div>

            </div>


        </Link>
    )
}
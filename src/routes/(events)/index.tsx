import { fetchEvents} from "../../services/events.service";
import {createFileRoute, Link} from "@tanstack/react-router";
import {type  Event } from "../../types/types.ts";
import {ErrorComponent} from "../../components/ErrorComponent.tsx";
import  screenshoot2 from "../../assets/images/screenshoot4.png"
import {HeroSection} from "../../components/HeroSection.tsx";




export const Route = createFileRoute('/(events)/')({
    loader: fetchEvents,
    component: EventsLayoutComponent,
    errorComponent: ErrorComponent
})


function EventsLayoutComponent() {
    const events: Event []   = Route.useLoaderData();
    console.log("Here are the events:", events.length);

    const buyTicket = () => {

    }
    return (
        <div className="space-y-10">
            <HeroSection />
            <div className="cursor-pointer gap-4 w-10/12  mx-auto flex">
                {
                    events.length>0?  events.map((envt: Event)=> (
                        <div
                            key={envt.event_id}
                            className=" group block max-w-sm p-6 border border-inch-worm-200 rounded-[22px]">
                            <div className="border relative  border-inch-worm-100 rounded-[16px]">

                               <div className="group-hover:opacity-10 opacity-90  transition-opacity delay-200 duration-300 ease-in-out rounded-[16px] overflow-hidden">
                                   <img className="object-cover" src={screenshoot2} alt=""/>
                               </div>
                                    params={{eventId: String(envt.event_id)}}
                                    to="/events/$eventId" className="hidden group-hover:block ">
                                    <button onClick={()=>buyTicket} className="w-full py-2 bg-inch-worm-200 text-black rounded-lg">Buy Tickets</button>

                            </div>
                            <div>
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading text-white">{envt.name}</h5>
                                <div className="text-white">
                                    <div className="flex gap-4">
                                        <span className="opacity-40">Date</span>
                                        <span>{envt.date}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="opacity-40">Venue</span>
                                        <span>{envt.location}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="opacity-40">Price</span>
                                        <span>{envt.amount}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )) : <p className="text-white">No events available yet.</p>
                }
            </div>
        </div>
    )
}


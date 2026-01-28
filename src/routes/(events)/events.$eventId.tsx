import {createFileRoute} from "@tanstack/react-router";
import {fetchEventById} from "../../services/events.service.ts";
import {type Event} from "../../types/types.ts";
import {ErrorComponent} from "../../components/ErrorComponent.tsx";


export const Route =  createFileRoute('/(events)/events/$eventId')({
    loader: async({params: {eventId}}) =>  fetchEventById(eventId),
    component: EventDetailComponent,
    errorComponent: ErrorComponent,

})


function EventDetailComponent() {
    const evnt: Event = Route.useLoaderData();
    return (
        <div className="xl:pt-48 pt-28 2xl:w-8/12 w-10/12  gap-4 mx-auto xl:flex xl:justify-between space-y-16">
            <div className="xl:max-w-lg space-y-10">
                <h1 className="text-white text-5xl font-bold">{event.name}</h1>
                <p className="text-white text-lg">{event.description}</p>
                <div className="flex gap-4">
                    <button
                        onClick={(e)=>{
                            e.stopPropagation()
                            checkoutPayment(event.event_id)
                        }}
                        className="btn btn-sm text-white bg-linear-to-r from-inch-worm-900 to-inch-worm-600 px-8 py-4 rounded-lg font-bold">Buy
                        ticket
                    </button>
                    <button
                        className="btn btn-sm flex  gap-2 text-white border-[1px] border-stone-600 px-6 py-4 rounded-lg font-bold">
                        <Share2/>
                        <span>Share event</span>
                    </button>
                </div>
                <div className="space-y-4 w-full">
                    <div className="flex  gap-6 border-[1px] border-bg-slate-50 p-4 rounded-lg shadow-lg">
                        <Calendar color={iconColor}/>
                        <div>
                            <p className="text-white text-sm"> {formatterFn(event.date, 'date')}</p>
                            <p className="text-white text-md">Gates open at {formatterFn(event.start_time, 'time')}</p>
                        </div>
                    </div>
                    <div className="flex  gap-6 border-[1px] border-bg-slate-50 p-4 rounded-lg shadow-lg">
                        <MapPin color={iconColor}/>
                        <div>
                            <p className="text-white text-lg">{event.location}</p>
                            <p className="text-white text-md">See direction</p>
                        </div>
                    </div>
                </div>
                {/* Render other event details here */}
            </div>
            <div className="flex justify-center xl:justify-end">
                <img src={screenshoot2} className="object-cover rounded-xl h-[500px]"/>

            </div>
        </div>

    )
}





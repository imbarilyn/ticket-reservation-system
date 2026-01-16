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
        <div>
            <h1>{evnt.title}</h1>
            <p>{evnt.description}</p>
            {/* Render other event details here */}
        </div>
    )
}





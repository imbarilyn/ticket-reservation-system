import {createFileRoute} from "@tanstack/react-router";
import {type  Event} from "../../types/types.ts";
import {HeroSection} from "../../components/HeroSection.tsx";
import {fetchEvents} from "../../services/events.service.ts";
import {EventListComponent} from './-components/eventList.tsx'
import {queryOptions, useQuery} from "@tanstack/react-query";
import {LoadingShimmer} from "../../components/LoadingShimmer.tsx";

const eventsQueryOptions = queryOptions({
    queryKey: ["events"],
    queryFn: fetchEvents,
})
export const Route = createFileRoute('/(events)/')({
    loader: async ({context}) => {
        const events = await context.queryClient.ensureQueryData(eventsQueryOptions)
        return {events};
    },
    component: EventsLayoutComponent,

})

function EventsLayoutComponent() {
    const {data: events = [], isPending, isError, error, refetch} = useQuery(eventsQueryOptions)
    if (isPending) {
        return <LoadingShimmer/>
    }
    if (isError) {
        return (
            <div className="">
                <p>Error: {error instanceof Error ? error.message : 'something went wrong'}</p>
                <button onClick={() => refetch()} className="bg-pumpkin-300 btn-sm px-4 py-2">Retry</button>
            </div>
        )
    }


    return (
        <div className="space-y-10">
            <HeroSection/>
            <div className="w-9/12  mx-auto space-y-4  ">
                <p className="text-picton-blue-950 text-2xl font-semibold">Upcoming Events</p>
                {
                    !isPending ?
                        <div className="relative cursor-pointer gap-8 flex flex-wrap">
                            {
                                events.map((event: Event) => (
                                    <EventListComponent key={event.event_id} event={event}/>
                                ))
                            }
                        </div>
                        :
                        <LoadingShimmer/>
                }
            </div>
        </div>
    )
}


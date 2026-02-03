import {createFileRoute, useNavigate} from "@tanstack/react-router";
import {fetchEventById} from "../../services/events.service.ts";
import {ErrorComponent} from "../../components/ErrorComponent.tsx";
import screenshoot2 from "../../assets/images/screenshoot4.png"
import {Calendar, MapPin, Share2} from "lucide-react";
import moment from 'moment'
import {queryOptions, useQuery} from "@tanstack/react-query";

const eventQueryOptions = (eventId: string) =>{
    return queryOptions({
        queryKey: ['event', eventId],
        queryFn: () => fetchEventById(eventId),
    })

}

export const Route = createFileRoute('/(events)/events/$eventId')({
    loader: async ({context, params: {eventId}}) => {
        const event = await context.queryClient.ensureQueryData(eventQueryOptions(eventId))
        return {event};
    },
    component: EventDetailComponent,
})




function EventDetailComponent() {
    const navigate = useNavigate()
    const {data: event=[], isError, isPending, error, refetch} = useQuery(eventQueryOptions(Route.useParams().eventId))

    if(isPending){
        return <p className="">Loading...</p>
    }
    if(isError){
        return <ErrorComponent error={error} refetch={refetch}/>
    }


    const formatterFn = (date: string, type: string) => {
        switch (type) {
            case 'date':
                return moment(date).format('dddd, MMMM DD YYYY')
            case 'time':
                return moment(date, 'HH:mm').format('hh:mm A')
            default:
                return
        }
    }

    const checkoutPayment = (eventId: string) =>{
        navigate({
            to: '/payments/$eventId/ticket',
            params: {
                eventId: String(eventId)
            }
        })

    }
    const iconColor = '#f97316'
    return (
        <div className="xl:pt-28 pt-12 2xl:w-8/12 w-10/12   gap-4 mx-auto lg:flex justify-between space-y-16">
            <div className="xl:w-lg space-y-10">
                <h1 className=" text-5xl font-bold">{event.name}</h1>
                <p className=" text-lg">{event.description}</p>
                <div className="flex gap-4">
                    <button
                        onClick={(e)=>{
                            e.stopPropagation()
                            checkoutPayment(event.event_id)
                        }}
                        className="cursor-pointer btn btn-sm  bg-linear-to-r  from-serenade-600 to-pumpkin-300  px-8 py-4 rounded-lg font-bold">Buy
                        ticket
                    </button>
                    <button
                        className="btn btn-sm cursor-pointer flex  gap-2  border-[1px] border-stone-600 px-6 py-4 rounded-lg font-bold">
                        <Share2/>
                        <span>Share event</span>
                    </button>
                </div>
                <div className="space-y-4 w-full">
                    <div className="flex border-[2px] border-gray-100  gap-6 p-4 rounded-2xl shadow-lg">
                        <Calendar color={iconColor}/>
                        <div>
                            <p className=" text-sm"> {formatterFn(event.date, 'date')}</p>
                            <p className=" text-md">Gates open at {formatterFn(event.start_time, 'time')}</p>
                        </div>
                    </div>
                    <div className="flex  gap-6 border-[2px] border-gray-100 p-4 rounded-2xl shadow-lg">
                        <MapPin color={iconColor}/>
                        <div>
                            <p className=" text-lg">{event.location}</p>
                            <p className=" text-md">See direction</p>
                        </div>
                    </div>
                </div>
                {/* Render other event details here */}
            </div>
            <div className="flex   justify-center   xl:justify-end">
                <img src={screenshoot2} className="object-cover rounded-xl h-[500px]  max-w-sm xl:max-w-lg "/>

            </div>
        </div>

    )
}





import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {fetchEventById} from "../../services/events.service.ts";
import {useQuery} from "@tanstack/react-query";
import {ErrorComponent} from "../../components/ErrorComponent.tsx";
import {type Event} from "../../types/types.ts";
import {Cart } from "./-components/cart.tsx";
import {ProgressComponent} from "./-components/progressComponent.tsx";
import {ChevronLeft} from "lucide-react";
import {ticketStore} from "../../stores/ticket.ts";
import {useStore} from "@tanstack/react-store";
import {Tickets} from "lucide-react";
import { cartStore} from "../../stores/cart.ts";


const eventQueryOption = (eventId: string) => {
    return {
        queryKey: ['event', eventId],
        queryFn: () => fetchEventById(eventId),
    }
}

export const Route = createFileRoute('/(payments)/payments/$eventId/ticket')({
    loader: async ({context, params: {eventId}}) => {
        const event: Event = await context.queryClient.ensureQueryData(eventQueryOption(eventId))
        return {event};
    },
    component: RouteComponent,
})

function RouteComponent() {
    const {data: event = [], isError, isPending, error, refetch} = useQuery(eventQueryOption(Route.useParams().eventId))
    const isDialogOpen  =  useStore(ticketStore, (state)=> state.isDialogOpen);
    const useCartStore = useStore(cartStore, (s)=> s);
    const totalAmount = useCartStore.items.reduce((acc, item) => acc +  Number(item.amount), 0);
    const navigate = useNavigate()
    if (isPending) {
        return <div>Loading...</div>
    }
    if (isError) {
        return (
            <div>
                <ErrorComponent error={error} refetch={refetch}/>
            </div>
        )
    }

    const handleGoBack =  ()=>{
       void navigate({
           to: '..'
       })
    }

    return (
        <div className=" relative ">
            <div className="bg-white py-6 px-8 space-y-1">
               <div className="--space-y-1">
                   <div className="flex  items-center gap-2">
                      <button onClick={handleGoBack} className="flex h-5 w-5 border-[2px] border-pumpkin-600 rounded-full justify-center items-center cursor-pointer font-bold"> <ChevronLeft color="#f97316"/></button>
                       <h1 className=" text-3xl text-pumpkin-600 font-bold ">{event.name} World Tour</h1>
                   </div>
                   <h1 className=" text-lg text-slate-600">{event.description}</h1>
               </div>
                <div>
                    <ProgressComponent/>
                </div>
            </div>
            <div className="px-6 pt-10  space-y-10">
                <div>
                    <div className="w-fit px-5 rounded-xl border-[2px] bg-pumpkin-200 border-pumpkin-100/70 shadow-2xl"><span>Step1</span></div>
                    <p className="text-xl font-semibold text-pumpkin-900 ">Choose your experience</p>
                </div>
                <div className=" grid grid-cols-3 gap-6">
                    <div
                        className="bg-neutral block col-span-3 xl:col-span-1 max-w-sm p-6 border-[2px] border-pumpkin-100/70 rounded-2xl shadow-lg">
                        <h5 className="mb-3 text-2xl  text-pumpkin-900 font-semibold tracking-tight text-heading leading-8">Die hard</h5>
                        <p className="text-md text-pumpkin-900">Enjoy {event.name} event at a discount of 2%</p>
                        <Cart  amount={event.amount} id={event.event_id} categoryId={event.event_id} name={event.name}/>
                    </div>
                </div>
            </div>
            {
                isDialogOpen && (<div className="bg-white fixed bottom-0 left-0 w-full px-6 py-4 flex justify-between items-center border-t-[1px] border-gray-300">
                    <p className="text-lg font-semibold text-pumpkin-900">Total: Kes. {totalAmount}</p>
                    <p><Tickets /></p>
                    <span> tickets</span>
                </div>)
            }
        </div>
    )
}

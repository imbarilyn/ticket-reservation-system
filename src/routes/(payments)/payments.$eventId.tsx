import {createFileRoute, Outlet} from '@tanstack/react-router'
// import {ProgressComponent} from "../../components/progressComponent.tsx";
import TicketImage from '../../assets/images/payments1.png'


export const Route = createFileRoute('/(payments)/payments/$eventId')({
    component: PaymentComponent,
})

function PaymentComponent() {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-3 bg-white ps-10  pt-10">
              <div>
                  <p><span className="ursor-pointer text-pumpkin-500 text-2xl font-bold">Tik</span><span
                      className="text-picton-blue-500 text-2xl font-boldcursor-pointer ">o</span></p>
              </div>
                <div  className="flex justify-center items-center h-[calc(100vh-80px)] ">
                    <img src={TicketImage} alt="payment-image w-sm"/>
                </div>
            </div>
            <div className="col-span-2 bg-pumpkin-100/70 h-screen">
                <Outlet/>
            </div>
        </div>
    )
}

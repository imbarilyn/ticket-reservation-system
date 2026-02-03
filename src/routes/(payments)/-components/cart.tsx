import {Minus, Plus, Trash} from "lucide-react"
import {addToCart, ticketCountByCategory, clearCart, removeFromCart} from "../../../stores/cart.ts";
import { useState} from "react";
import {setIsDialog} from "../../../stores/ticket.ts";



interface CartComponentProps {
    id: string;
    name: string;
    categoryId: string;
    amount: string;

}

export const Cart = ({amount, id, name, categoryId }: CartComponentProps)  => {
const [itemCount, setItemCount] = useState(0)
    if(itemCount > 0){
        setIsDialog(true)
    } else {
        setIsDialog(false)
    }



const addTicket = () => {
    addToCart({
        id,
        name,
        amount,
        categoryId,
    })
    setItemCount(ticketCountByCategory(categoryId));
}

const deleteTicket = (categoryId: string) => {
    removeFromCart(categoryId)
    setItemCount(ticketCountByCategory(categoryId));

}

const emptyCart = (categoryId: string) => {
    clearCart(categoryId)
    setItemCount(ticketCountByCategory(categoryId));

}



return (
    <div className="space-y-2 ">
        {
            itemCount === 0? (
                <button onClick={() => {
                    addTicket()
                }} className="btn btn-sm cursor-pointer px-6 py-2 rounded-lg bg-picton-blue-300 ">
                    <span className="text-picton-blue-900 font-bold">Add to cart</span>
                </button>
            ): (
                <div className=" grid grid-cols-3  rounded-2xl bg-pumpkin-600  justify-between">
                    <div className="col-span-2 flex py-1 rounded-xl rounded-r-xl bg-pumpkin-200">
                        <div className="bg-white px-4 py-3 rounded-2xl flex gap-2 items-center mx-2">
                            <button onClick={()=> deleteTicket(categoryId)} className="cursor-pointer">
                                <Minus color="#9a4a12"/>
                            </button>
                            <span className="text-pumpkin-800">{ticketCountByCategory(categoryId)}</span>
                            <button onClick={()=>addTicket()} className="cursor-pointer bg-pumpkin-600 rounded-lg">
                                <Plus color="white"/>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 rounded-r-lg py-4 flex justify-center bg-pumpkin-600">
                        <button onClick={()=>emptyCart(categoryId)} className="cursor-pointer">
                            <Trash color="white"/>
                        </button>
                    </div>
                </div>
            )
        }

    </div>
)
}
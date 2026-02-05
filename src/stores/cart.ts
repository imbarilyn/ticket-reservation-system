import {Store} from '@tanstack/store'


export interface CartTicket {
    id: string
    name: string
    quantity: number
    categoryId: string
    amount:string
}

interface CartItem {
    items: CartTicket []
}


export const cartStore = new Store<CartItem>({
    items: []
})

export const addToCart = (ticket: Omit<CartTicket, 'quantity'>) => {
    const isTicketInCart = cartStore.state.items.find(i => i.categoryId === ticket.categoryId)
    if (isTicketInCart){
        cartStore.setState((preVal)=>{
          return {
              ...preVal,
              items: preVal.items.map(s => s.categoryId === ticket.categoryId? {...s, quantity: s.quantity + 1, amount: String(Number(s.amount) + Number(ticket.amount))}: s)
          }
        })
    } else{
        cartStore.setState((prevState)=>{
            if(prevState.items.length === 0){
                console.log("Nothing in cart", cartStore.state.items)
                return {
                    ...prevState,
                    items: [...prevState.items, {...ticket, quantity: 1}]
                }
            }
            return {
                ...prevState,
                items: [...prevState.items, {...ticket, quantity: 1}]
            }
        })
    }
}


// Delete a single item from the cart at a time
export const removeFromCart = (ticket: Omit<CartTicket, 'quantity'>) => {
   const isTicketInCart = cartStore.state.items.find(t => t.categoryId === ticket.categoryId)
   if(isTicketInCart && isTicketInCart.quantity > 1){
       console.log("We found the item in cart for deletion")
       cartStore.setState(prevState=> {
           return {
               ...prevState,
               items: prevState.items.map(s => s.categoryId === ticket.categoryId? {...s, quantity: s.quantity -1, amount: String(Number(s.amount) - Number(ticket.amount)) }: s),
           }
       })
   }
   if(isTicketInCart && isTicketInCart.quantity === 1){
       cartStore.setState((preVal)=>{
           return {
               ...preVal,
                items: preVal.items.filter(i => i.categoryId !== ticket.categoryId)
           }
       })
   }
}

// Delete everything in the cart
export const clearCart = (categoryId: string)=>{
    const isTicketInCart = cartStore.state.items.find(i => i.categoryId === categoryId)
    if(isTicketInCart){
        cartStore.setState((preVal)=>{
            return {
                ...preVal,
                items: preVal.items.filter(i => i.categoryId !== categoryId)
            }
        })
    }
}

// Get total ticket count by category
export const ticketCountByCategory = (categoryId: string) => {
    const ticket = cartStore.state.items.find(i => i.categoryId === categoryId)
    return ticket ? ticket.quantity : 0
}
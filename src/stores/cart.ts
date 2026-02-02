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
    items: [],
})

export const addToCart = (ticket: Omit<CartTicket, 'quantity'>) => {
    const isTicketInCart = cartStore.state.items.find(i => i.categoryId === ticket.categoryId)
    if (isTicketInCart){
        cartStore.setState(({
            items: cartStore.state.items.map(i =>{
                return i.categoryId === ticket.categoryId? {...i, quantity: i.quantity + 1}: i
            })
        }))
        console.log('We have added something', cartStore.state.items)
    } else{
        cartStore.setState({
            items: [...cartStore.state.items, {...ticket, quantity: 1} as CartTicket],
        })
    }
}

export const removeFromCart = (categoryId: string) => {
   const isTicketInCart = cartStore.state.items.find(t => t.categoryId === categoryId)
   if(isTicketInCart && isTicketInCart.quantity > 1){
       console.log("We found the item in cart for deletion")
         cartStore.setState({
             items: cartStore.state.items.map(i =>{
                 return i.categoryId === categoryId? {...i, quantity: i.quantity -1}: i
             })
         })
   } else{
         return
   }
   console.log('Items remaining after deleting', cartStore.state.items)
}

export const clearCart = (categoryId: string)=>{
    const isTicketInCart = cartStore.state.items.find(i => i.categoryId === categoryId)
    if(isTicketInCart){
        cartStore.setState({
            items: cartStore.state.items.filter(i =>{
                return i.categoryId !== categoryId
            })
        })
        console.log('Item removed from cart', cartStore.state.items)
    }

}

export const totalAmount = () => {
    return cartStore.state.items.reduce((total, item) => total + (Number(item.amount) * (item.quantity)), 0)
}

export const itemCount =  ()=>{
    return cartStore.state.items.reduce((count, item) => count + item.quantity, 0)
}

export const ticketCountByCategory = (categoryId: string) => {
    const ticket = cartStore.state.items.find(i => i.categoryId === categoryId)
    return ticket ? ticket.quantity : 0
}
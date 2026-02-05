import {Store} from "@tanstack/react-store";

interface TicketState {
    isDialogOpen: boolean;
}

export const ticketStore = new Store<TicketState>({
    isDialogOpen: false,
})


export const setIsDialog = (value: boolean) => {
    ticketStore.setState(
        (s)=> ({...s, isDialogOpen: value})
    )
    // console.log("Dialog state changed to:", ticketStore.state.isDialogOpen);
}
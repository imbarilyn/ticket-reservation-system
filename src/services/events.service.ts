import { apiRequest } from "./api.service.ts";


export const fetchEvents = async () => {
    return  await apiRequest('events')
}

export const fetchEventById = async (id: string) => {
    return apiRequest(`events/${id}`)
}
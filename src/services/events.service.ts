import { apiRequest } from "./api.service.ts";


export const fetchEvents = async () => {
    return  await apiRequest('event/all')
}

export const fetchEventById = async (id: string) => {
    return apiRequest(`event/${id}`)
}
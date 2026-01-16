export interface Event {
    id: number;
    title: string;
    date: string; // ISO 8601 date string
    venue: string;
    city: string;
    capacity: number;
    ticketsSold: number;
    price: number;
    category: string;
    description: string;
    imageUrl: string;
    organizer: string;
}
import type {QueryClient} from "@tanstack/react-query";

export interface Event {
    event_id: number;
    name: string;
    date: string
    location: string;
    amount: number;
    description: string;
    start_time: string;
    end_time: string;
}

export interface ColorContentType {
    bgColor: string;
    darkBgColor: string;
    bgHoverColor: string;
    bgIconColor: string;
    textColor: string;
    setBgColor: (color: string) => void;

}

export interface RouterContext {
    queryClient: QueryClient;

}
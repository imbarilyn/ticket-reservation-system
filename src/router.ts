import { routeTree } from './routeTree.gen'
import { QueryClient} from "@tanstack/react-query";
import {createRouter } from "@tanstack/react-router";
import type {RouterContext} from "./types/types.ts";


// create a QueryClient instance and export as a standalone instance to QueryClientProvider
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
})

// Set up a Router instance
export const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultStaleTime: 5000,
    scrollRestoration: true,
    // pass the context in the router to use in the loaders
    context: {
        queryClient,
    } satisfies RouterContext,
})


// Register the router  for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

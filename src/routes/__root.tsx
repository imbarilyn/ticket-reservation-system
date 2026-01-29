import {Outlet, createRootRouteWithContext} from '@tanstack/react-router'
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import type {RouterContext} from "../types/types.ts";


export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootComponent,
    notFoundComponent: () => {
        return (
            <>
                <p className="text-rose-400">Page not Found</p>
            </>
        )
    }
})

function RootComponent() {
    return (
        <div className="min-h-screen" id='background'>

            <Outlet/>
            <TanStackRouterDevtools position="bottom-right"/>
        </div>
    )
}

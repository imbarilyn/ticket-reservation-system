import { Outlet, createRootRoute } from '@tanstack/react-router'
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {WebsiteHeader} from "../components/WebsiteHeader.tsx";
import {WebsiteFooter} from "../components/WebsiteFooter.tsx";


export const Route = createRootRoute({
  component: RootComponent,
    notFoundComponent: ()=>{
      return(
          <>
              <p className="text-rose-400">Page not Found</p>
          </>
      )
    }
})

function RootComponent() {
  return (
    <div className="bg-dark-one min-h-screen">
      <WebsiteHeader />
      <Outlet />
        <WebsiteFooter />
        <TanStackRouterDevtools position="bottom-right" />
    </div>
  )
}

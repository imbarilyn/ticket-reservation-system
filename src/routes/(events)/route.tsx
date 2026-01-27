import {createFileRoute, Outlet} from '@tanstack/react-router'
import {WebsiteHeader} from "../../components/WebsiteHeader.tsx";
import {WebsiteFooter} from "../../components/WebsiteFooter.tsx";

export const Route = createFileRoute('/(events)')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <WebsiteHeader/>
            <Outlet />
            <WebsiteFooter/>
        </div>
    )
}

import ReactDOM from 'react-dom/client'
import { RouterProvider  } from '@tanstack/react-router'
// import { routeTree } from './routeTree.gen'
import './index.css'
import {router, queryClient} from "./router.ts";
import { QueryClientProvider} from "@tanstack/react-query";

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>

    )
}
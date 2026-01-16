import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import {fileURLToPath} from "node:url";
import tanstackRouter from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [

        tailwindcss(),
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true
        }),
        react(),
    ],
    resolve: {
        alias:{
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})

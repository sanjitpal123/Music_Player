import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from "react-query"
const Query=new QueryClient() 
import './index.css'

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={Query}>
    <App />
  </QueryClientProvider>,
)

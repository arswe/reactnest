import { ApolloProvider } from '@apollo/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import dotenv from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/routes'
import client from './services/constants/apollo-client'
dotenv.config()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
      <SpeedInsights />
    </ApolloProvider>
  </React.StrictMode>
)

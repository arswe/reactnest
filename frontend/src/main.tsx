import { ApolloProvider } from '@apollo/client'
import { SpeedInsights } from '@vercel/speed-insights/react'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/routes'
import client from './services/constants/apollo-client'
import Guard from './services/guard/Guard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Guard>
        <RouterProvider router={router} />
      </Guard>
      <SpeedInsights />
    </ApolloProvider>
  </React.StrictMode>
)

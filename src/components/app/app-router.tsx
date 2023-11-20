import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom';
import { Layout } from '../layout/layout';

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path='/' element={<Layout />} />
        </>
    )
  )
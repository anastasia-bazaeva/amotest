import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { MainPage } from '../main-page/main-page';

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path='/' element={<Layout />} >
            <Route index element={<MainPage />} />
          </Route>
        </>
    )
  )
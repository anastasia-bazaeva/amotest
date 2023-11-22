import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFound } from '../../pages/not-found/not-found';

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Layout />} >
            <Route index element={<MainPage />} />
          </Route>
        </>
    )
  )
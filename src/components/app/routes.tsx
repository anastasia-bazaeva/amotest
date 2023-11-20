import { RouterProvider } from 'react-router-dom';
import { router } from './app-router';

export const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}
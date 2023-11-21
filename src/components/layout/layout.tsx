import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import { PageLayout } from "../page-layout/page-layout"
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return(
        <>
        <Header />
        <main>
          <PageLayout content={<Outlet />} />
        </main>
        <Footer />
      </>
    )
}
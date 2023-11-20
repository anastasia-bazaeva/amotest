import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import { MainPage } from "../main-page/main-page"

export const Layout = () => {
    return(
        <>
        <Header />
        <main>
          <MainPage />
        </main>
        <Footer />
      </>
    )
}
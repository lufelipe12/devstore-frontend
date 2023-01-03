import Routes from "./routes"
import GlobalStyle from "./styles/global"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartStateManager = () => {
    if (!isCartOpen) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }

    return setIsCartOpen(!isCartOpen)
  }

  return (
    <>
      <GlobalStyle isCartOpen={isCartOpen} />
      <Header cartStateManager={cartStateManager} isCartOpen={isCartOpen} />
      <Routes />
      <Footer />
    </>
  )
}

export default App

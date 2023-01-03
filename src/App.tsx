import Routes from "./routes"
import GlobalStyle from "./styles/global"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </>
  )
}

export default App

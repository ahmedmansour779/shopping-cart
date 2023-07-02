import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import About from "./pages/About"
import Home from "./pages/Home"
import { PageNotFound } from "./pages/PageNotFound"
import Store from "./pages/Store"
import "./utilities/style"

function App() {
    return (
        <ShoppingCartProvider>
            <NavBar />
            {/* <Container className="mb-4"> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* </Container> */}
        </ShoppingCartProvider>
    )
}

export default App
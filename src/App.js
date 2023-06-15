import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./main/pages/index"
import Productos from "./main/pages/productos";
import Nosotros from "./main/pages/nosotros";
import Contacto from "./main/pages/contacto";
import SobreNosotros from "./main/pages/sobreNosotros";
import CartWidget from "./components/ItemListContainer/CartWidget";


function App() {
    return(
        <div>
            <BrowserRouter>
            <NavBar/>
                    <Routes>
                        <Route path="/" element={<Index/>}/>
                        <Route path="/productos" element={<Productos/>} />
                        <Route path="/nosotros" element={<Nosotros/>}/>
                        <Route path="/contacto" element={<Contacto/>}/>
                        <Route path="/sobreNosotros" element={<SobreNosotros/>}/>
                        <Route path="/ItemListContainer/CartWidget" element={<CartWidget/>}/>
                    </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App;

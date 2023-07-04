import React from "react";
import Tabs from "../../components/Tabs/index";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../../sdk/Data"
import ItemList from "../ItemList";

//

const buscarCategorias = (id) =>{
    switch(id){
        case "Motos":
            return "Motos"; 
        case "Autos":
            return "Autos"; 
        default: 
            return "nameProduct"
    }
}

const ItemContainer = () =>{
    const [items, setItems] = React.useState([]); 
    const [loading, setLoading] = React.useState([false]); 
    const {categorias} = useParams();
    const navigate = useNavigate();

    const current = Data.some(cat => cat.id === categorias)? categorias : "all";

    React.useEffect(() =>{
        if (!Data.some(cat => cat.id === categorias)){
            navigate ("/Data/id")
        }
    }, [categorias, navigate])

    React.useEffect(() =>{
        setLoading(true); 
        Data(buscarCategorias(categorias))
        .then(res => res.json())
        .then(res=>{
            const data = res.results?.map((element)=>({
                id: element.id, 
                tittle: element.tittle, 
                price: element.price, 
                image: element.img
            }))
            setItems(data); 
        })
        .finally(() => setLoading(false))
    }, [categorias])

    return(
        <div>
            <Tabs curren = {current} items={Data}/>
            <div style={{padding: 30}}>
                <ItemList items={items} loading={loading} />
            </div>
        </div>
    )
}

export default ItemContainer; 
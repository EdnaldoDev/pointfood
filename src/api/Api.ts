import axios from "axios";

export const api=axios.create({
    baseURL:'http://localhost:5173'
})

export const getDrinks=async()=>{
    const {data}=await api.get('/db.json')
    
    return data.drinks
    
}

export const getIcecream=async()=>{
    const {data}=await api.get('/db.json')
    
    return data.icecreams
    
}

export const getHamburger=async()=>{
    const {data}=await api.get('/db.json')
    
    return data.burgers
    
}

export const getPizzas=async()=>{
    const {data}=await api.get('/db.json')

    console.log(data.pizzas)
    return data.pizzas
    
}
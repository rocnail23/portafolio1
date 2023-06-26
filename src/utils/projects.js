import PokeDex from "../assets/pokeapi.webp"
import Todo from "../assets/DolistApp.webp"
import loggin from "../assets/loggin.webp"
import cotizador from "../assets/cotizador.webp"


const projects = [
{
    name: "Pokedex",
    description: "pokedex realizada mediante el consumo de una api cuenta con caracteristica como busqueda y filtrado de pokemones por tipos, se utilizo react-router y redux para su creacion",
    linkWeb: "https://harmonious-daffodil-7548b3.netlify.app/",
    linkRepo: "https://github.com/rocnail23/pokeapi2.0",
    image: PokeDex
},

{
    name: "DoListApp",
    description: "aplicacion para administrar proyectos y tareas cuenta con un logging de usuarios, se utilizo React, useContex y useReducer para manejar el los estados y para back se utilizo ExpressJs y MongoDb",
    linkWeb: "https://stalwart-kitsune-9cdadb.netlify.app/",
    linkRepo: "https://github.com/rocnail23/ProjectTask",
    image: Todo
},
{
    name: "Cotizador de Seguros",
    description: "Cotizador de seguro para vehiculos, el valor del seguro cambiara debido a distintos parametro introducidos en la aplicacion, se utilizo react para su construccion",
    linkWeb: "https://idyllic-beignet-c1a61d.netlify.app/",
    linkRepo: "https://github.com/rocnail23/calculador-seguro",
    image: cotizador
},

{
    name: "logging de usuarios",
    description: "se crearon las rutas para el logging de usuarios, necesitando la confirmacion de creacion de usuario mediante correo electronico al igual que el cambio de contraseñas",
    linkWeb: "https://visionary-dango-35c938.netlify.app/",
    linkRepo: "https://github.com/Rocnail26/userauth",
    image: loggin
}

]

export default projects
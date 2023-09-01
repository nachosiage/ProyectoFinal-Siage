const eventos = [
    {
        id: 1,
        img: "../assets/cards/Fabula.jpeg",
        title: 'Fabula',
        description: 'Evento realizo para despedir el año junto a tus amigos',
        fecha: '1 de Enero de 2024 a las 01:00',
        location: 'Rural Gral. Pico',
        price: '$3.000',
        stock: '200',
        categoria: 'Fiesta'
    },
    {
        id: 2,
        img: "../assets/cards/Lola-24.jpeg",
        title: 'Lola Fest',
        description: 'Fiesta para dar la bienvenida a Navidad',
        fecha: '24 de Diciembre de 2023 a las 02:00',
        location: 'Ferro Gral. Pico',
        price: '$3.000',
        stock: '200',
        categoria: 'Fiesta'
    },
    {
        id: 3,
        img: '../assets/cards/Sunset-fabula.jpeg',
        title: 'Sunset Fabula',
        description:'Evento realizado por Fabula, momento para comer, pasear, disfrutar de los shows en vivo, bailar',
        fecha: '23 de Diciembre de 2023 a las 18:00',
        location: 'Rural Gral. Pico',
        price: '$1.000',
        stock: '200',
        categoria: 'Fiesta'
    },

    {
        id: 4,
        img: '../assets/cards/barbie.jpeg',
        title: 'Barbie',
        description:'Llego a General Pico, Barbie. La pelicula mas esperada del 2023',
        fecha: '10 de Septiembre de 2023 a las 21:00',
        location: 'Cine Teatro Pico',
        price: '$1.000',
        stock: '200',
        categoria: 'Cine'
    },

    {
        id: 5,
        img: '../assets/cards/host.jpeg',
        title: 'Host Sta. Rosa',
        description:'La noche santaroseña mas esperada, en el mejor bar y boliche de la capital',
        fecha: '16 de Septiembre de 2023 a las 23:00',
        location: 'Host Santa Rosa',
        price: '$2.000',
        stock: '200',
        categoria: 'Fiesta'
    },

    {
        id: 6,
        img: '../assets/cards/bosco.jpeg',
        title: 'Bosco GP',
        description: 'El mejor boliche de la ciudad, te espera viernes y sabado',
        fecha: '12 de Agosto de 2023 a las 23:30',
        location: 'BOSCO GP',
        price: '$1.500',
        stock: '300',
        categoria: 'Fiesta'
    },

    {
        id: 7,
        img: '../assets/cards/code.jpeg',
        title: 'CODE #3',
        description: "La mejor fiesta de la escena electrónica en General Pico, para disfrutar de 7 horas de puros talentos",
        fecha: '16 de Septiembre de 2023 a las 23:30',
        location: 'Ciriaco',
        price: '$3.000',
        stock: '300',
        categoria: 'Fiesta'
    },

    {
        id: 8,
        img: '../assets/cards/elementos.jpeg',
        title: 'Elementos',
        description:"Llego elementos al Cine de General Pico, para que lo disfruten grandes y chicos",
        fecha: '10 de Septiembre de 2023 a las 21:00',
        location: 'Cine Teatro Pico',
        price: '$1.500',
        stock: '200',
        categoria: 'Cine'
    },

    {
        id: 9,
        img: '../assets/cards/megalodon2.jpeg',
        description:"Llega Megalodon 2 a la ciudad de General Pico",
        title: 'Megalodon 2',
        fecha: '16 de Agosto de 2023 a las 21:00',
        location: 'Cine Teatro Pico',
        price: '$2.000',
        stock: '200',
        categoria: 'Cine'
    }
];

export default eventos;

export const getItems = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (eventos)
        },1000)
    })
} 

export const getItem = (eventoId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const newItem = eventos.filter(evento => eventoId.id === itemId);
            if(newItem) {
                resolve (newItem);
            } else {
                reject("No se encontro ese producto")
            }
        },1000)
    })
} ;


export const getProductsByCategory= (category) => {
    return new Promise((resolve) => {
        const productosFiltrados = eventos.finder(p => 
            p.categoria=== category)
setTimeout(() => {
    resolve(productosFiltrados )
}, 1000)
})
}
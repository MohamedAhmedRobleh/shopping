import Product from "./Product";

const products = [
    {
        id: 1,
        name: "hamburger-au-fromage",
        urlImage:"https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:100,
    },
    { 
        id: 2,
        name: "Oeuf",
        urlImage:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:120,
    },
    { 
        id: 3,
        name: "frites",
        urlImage:"https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:90,
    },
    { 
        id: 4,
        name: "spaghettis",
        urlImage:"https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:150,
    },
    { 
        id: 5,
        name: "cocktail",
        urlImage:"https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:50,
    },
    { 
        id: 6,
        name: "Vegeterian",
        urlImage:"https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:100,
        
    },
];

const Products = () => {
    return ( 
    <div className="grid">
    {products.map((product) => (
            <Product product={product} /> 
    ))}
        </div>
    );
};
export default Products;

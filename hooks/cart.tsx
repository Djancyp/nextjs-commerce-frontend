const useCart = async () => {
    const data = await fetch(`https://fakestoreapi.com/products?limit=5`);
    const cart = await data.json();
    console.log(cart);
};
export default useCart;

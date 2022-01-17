function NavBar({ stockitems}) {
    const {Button} = ReactBootstrap;
    const [cart, setCart] = React.useState([]);
    const [stock, setStock] = React.useState([...stockitems]);
    console.log(cart);
    console.log(stock);
    const handleClick = item => {
        item.instock>0 ? setCart([...cart, item.name]): setCart([...cart]);
        item.instock>0 ? item.instock -= 1 : item.instock;
        setStock([...stock]);
    }
    const stockList = stock.map((item, index) => {
        return <Button onClick={() => handleClick(item)} key={index}>{item.name} : {item.instock}</Button>;
    });
    const shoppingCart = cart.map((item, index) => {
        return <Button key={index}>{item}</Button>;
    })
    return (<>
        <ul style={{listStyleType: "none"}}>{stockList}</ul>
        <h1>Shopping Cart</h1>
        <ul style={{listStyleType: "none"}}>{shoppingCart}</ul>
        </>);
}
const stockItems = [
    {name: "apple", instock: 2},
    {name: "pineapple", instock: 3},
    {name: "pear", instock: 0},
    {name: "peach", instock: 3},
    {name: "orange", instock: 1}
];
ReactDOM.render(
    <NavBar stockitems={stockItems} minstock={2} />,
    document.getElementById("root")
);
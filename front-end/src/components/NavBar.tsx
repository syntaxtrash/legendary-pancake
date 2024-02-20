interface CartItemsCountProp {
  cartItemsCount: number;
}
const NavBar = ({ cartItemsCount }: CartItemsCountProp) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

export default NavBar;

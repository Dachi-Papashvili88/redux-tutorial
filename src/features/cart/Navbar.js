import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";

function Navbar() {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <h2>
            <MdOutlineShoppingBag />
          </h2>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

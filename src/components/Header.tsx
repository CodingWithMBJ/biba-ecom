import {
  faBarsStaggered,
  faCartShopping,
  faMoon,
  faPersonBreastfeeding,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import type { User } from "firebase/auth";
import useCart from "../hooks/useCart";

type HeaderProps = {
  handleMenuToggle: () => void;
  user: User | null;
};

const Header = ({ handleMenuToggle }: HeaderProps) => {
  const { toggleTheme, isDark } = useTheme();
  const { cartItems } = useCart();

  const currentThemeIcon = isDark ? faMoon : faSun;
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <button type="button" className="menuBtn" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBarsStaggered} className="menuBtn-icon" />
      </button>

      <Link to="/" className="logo-link">
        <FontAwesomeIcon icon={faPersonBreastfeeding} className="logo-icon" />
      </Link>

      <div className="action-bar">
        <Link to="/cart" className="cart-btn">
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          <span className="cart-icon-total">{cartCount}</span>
        </Link>

        <button type="button" className="theme-btn" onClick={toggleTheme}>
          <FontAwesomeIcon icon={currentThemeIcon} />
        </button>
      </div>
    </header>
  );
};

export default Header;

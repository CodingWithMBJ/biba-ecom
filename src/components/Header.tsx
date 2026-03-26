import {
  faBarsStaggered,
  faMoon,
  faPersonBreastfeeding,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

type HeaderProps = {
  handleMenuToggle: () => void;
};

const Header = ({ handleMenuToggle }: HeaderProps) => {
  const { toggleTheme, isDark } = useTheme();

  const currentThemeIcon = isDark ? faMoon : faSun;
  return (
    <header className="header">
      <button className="menuBtn" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBarsStaggered} className="menuBtn-icon" />
      </button>
      <Link to={"/"} className="logo-link">
        <FontAwesomeIcon icon={faPersonBreastfeeding} className="logo-icon" />
      </Link>
      <button className={``} onClick={toggleTheme}>
        <FontAwesomeIcon icon={currentThemeIcon} className="" />
      </button>
    </header>
  );
};

export default Header;

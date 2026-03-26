import { auth } from "../services/firebaseConfig";
import { signOut, type User } from "firebase/auth";

type NavMenuProps = {
  user: User | null;
  showMenu: boolean;
};
const NavMenu = ({ user, showMenu }: NavMenuProps) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
    } catch (err: any) {
      console.error("Logout error", err.message);
    }
  };

  const iconName = user?.email?.slice(0, 1).toUpperCase() || "";

  const menuStatus = showMenu ? "opened" : "";

  return (
    <nav className={`nav ${menuStatus}`}>
      {user && <p className="user-icon">{iconName}</p>}
      <ul className="nav-ul"></ul>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </nav>
  );
};

export default NavMenu;

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import { useState } from "react";
import type { User } from "firebase/auth";

type PageLayoutProps = {
  user: User | null;
};

const PageLayout = ({ user }: PageLayoutProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="wrapper">
      {user && <Header user={user} handleMenuToggle={handleMenuToggle} />}
      {user && <NavMenu user={user} showMenu={showMenu} />}
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;

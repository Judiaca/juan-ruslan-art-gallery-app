import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./navigationStyles";
const { Menu, MenuItem } = styles;

const Navigation = () => {
  const { pathname } = useRouter();
  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");
  return (
    <nav>
      <Menu>
        <MenuItem $active={pathname === "/" && pathname === "/"}>
          <Link href="/">Spotlight</Link>
        </MenuItem>
        <MenuItem $active={isActive("/art-pieces")}>
          <Link href="/art-pieces">Pieces</Link>
        </MenuItem>
        <MenuItem $active={isActive("/favorites")}>
          <Link href="/favorites">Favorites</Link>
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default Navigation;

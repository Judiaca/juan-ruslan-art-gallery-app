import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./navigationStyles";

const { Nav, Menu, MenuItem } = styles;

const Navigation = () => {
  const { pathname } = useRouter();
  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");
  return (
    <Nav>
      <Menu>
        <MenuItem $active={pathname === "/" && pathname === "/"}>
          <Link href="/">Spotlight</Link>
        </MenuItem>
        <MenuItem $active={isActive("/art-pieces")}>
          <Link href="/art-pieces">Art Pieces</Link>
        </MenuItem>
        <MenuItem $active={isActive("/favorites")}>
          <Link href="/favorites">Favorites</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navigation;

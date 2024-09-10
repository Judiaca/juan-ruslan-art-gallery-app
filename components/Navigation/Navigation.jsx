import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <menu>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Pieces</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </menu>
    </nav>
  );
};

export default Navigation;

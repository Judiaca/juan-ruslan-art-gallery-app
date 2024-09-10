import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div>Logo</div>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; Copyright 2024</p>
      </footer>
    </>
  );
};

export default Layout;

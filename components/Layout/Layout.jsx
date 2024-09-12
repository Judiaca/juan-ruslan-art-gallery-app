import Navigation from "../Navigation/Navigation";
import Section from "../Section/Section";
import styles from "./Styles";
const { Header, Footer, Main } = styles;

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Section>
          <div>Logo</div>
          <Navigation />
        </Section>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Section>
          <p>&copy; Copyright 2024</p>
        </Section>
      </Footer>
    </>
  );
};

export default Layout;

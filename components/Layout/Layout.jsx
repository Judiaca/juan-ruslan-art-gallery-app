import Navigation from "../Navigation/Navigation";
import Section from "../Section/Section";
import styles from "./layoutStyles";
const { Header, Main, Footer } = styles;

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Section>
          <h1>Art Gallery</h1>
        </Section>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Section>
          <Navigation />
        </Section>
      </Footer>
    </>
  );
};

export default Layout;

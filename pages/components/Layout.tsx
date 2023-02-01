import Head from "next/head";
import { ReactNode } from "react";
import { Main, Container } from "../../styles/Layout.styles";
import Nav from "./Nav";

type LayoutProps = { children?: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Next is News</title>
      </Head>
      <Nav />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default Layout;

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/theme";
import Layout from "./components/Layout";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

import "../styles/globals.css";
import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;

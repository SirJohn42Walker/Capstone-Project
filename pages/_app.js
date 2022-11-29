import Navbar from "../components/Navbar/Navbar";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

export default MyApp;

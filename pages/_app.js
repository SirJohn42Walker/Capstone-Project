import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

export default MyApp;

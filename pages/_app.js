import {useState} from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({Component, pageProps}) {
  const [levelState, setLevelState] = useState("");
  const handleLevelChange = onLevelChange => {
    setLevelState(onLevelChange);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <Component
        {...pageProps}
        levelState={levelState}
        handleLevelChange={handleLevelChange}
      />
      <Navbar />
    </>
  );
}

export default MyApp;

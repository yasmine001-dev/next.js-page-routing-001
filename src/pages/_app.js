import NavBarComponent from "@/components/NabBar";
import FooterComponent from "@/components/Footer";
import "@/styles/globals.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("../../node_modules/bootstrap/dist/js/bootstrap.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <NavBarComponent />
      <Component {...pageProps} />
            <FooterComponent />

    </>
  );
}

import React from "react";
import "styles/global.scss";
import Footer from "components/Footer";
import "util/analytics.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Footer
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2019 Company"
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default MyApp;

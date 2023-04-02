import Providers from "../components/Providers";
import Layout from "../components/Layout";
import Router from "next/router";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <Providers>
      <Layout>
        <Backdrop
          open={loading}
          sx={{
            backgroundColor: "rgba(255,255,255,0.4)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <CircularProgress />
        </Backdrop>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

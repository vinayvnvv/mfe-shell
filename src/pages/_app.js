import App from "next/app";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;

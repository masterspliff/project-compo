import "../css/tailwind.css";
import "../global.css";  // Your new import for global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

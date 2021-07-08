// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

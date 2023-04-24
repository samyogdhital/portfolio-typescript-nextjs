import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useContext, useEffect } from 'react';
import NavBar from '@/components/Navigation/NavBar/NavBar';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Landing from '@/components/Landing/Landing';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ThemeContext } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const { isLight } = useContext(ThemeContext);

  // const darkTheme = () => {
  //   return (
  //     (document.body.style.backgroundColor = 'rgba(15, 0, 46, 1)'),
  //     (document.body.style.color = 'rgba(255, 255, 255, 0.87)')
  //   );
  // };
  // const lightTheme = () => {
  //   return (
  //     (document.body.style.backgroundColor = null),
  //     (document.body.style.color = null)
  //   );
  // };

  // useEffect(() => {
  //   return !isLight ? darkTheme() : lightTheme();
  // }, [isLight]);

  // library.add(fab, fas);
  return (
    <>
      <div className='App'>
        <NavBar />
        <Landing />
        <Main />
        <Footer />
        <ToastContainer
          position='bottom-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

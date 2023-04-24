import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// import NavSocial from "../Navigation/NavSocial/NavSocial.js";
import styles from './Footer.module.css';
import NavSocial from '../Navigation/NavSocial/NavSocial';

const Footer = () => {
  const { isLight } = useContext(ThemeContext);
  const theme = !isLight ? styles.dark : '';

  // window.usabilla_live("setEventCallback", function(category, action, label, value) {
  //     if(action !== "Campaign:Open") {
  //         return;
  //     }

  //     window.addEventListener("message", function(event) {
  //         // Listen to messages from the Usabilla Cloudfront domain
  //         if(!/d6tizftlrpuof\.cloudfront\.net/.test(event.origin)) {
  //             return;
  //         }

  //         try {
  //             var data = JSON.parse(event.data);
  //             // On the final page

  //             if(data.type === "pageSwitch" && data.end) {
  //                 for(var key in data.data) {
  //                     ga('gtag_UA_178920862_3' + '.send', 'event',
  //                     'Usabilla Campaign - ' + label, // event category
  //                     key, // event action
  //                     data.data[key] // event label
  //                     );

  //                 }
  //             }
  //         } catch(e) {
  //             // Ignore errors, usually JSON decode problems
  //         }
  //     });
  // });

  return (
    <footer className={`${styles.footer} ${theme}`}>
      <ul className={styles.iconContainer}>
        <NavSocial socialClass={''} socialIcons={'footerSocialIcons'} />
      </ul>
      <div className={styles.copyright}>
        <small>Created with love.</small>
        <small> &copy; 2022</small>
      </div>
    </footer>
  );
};

export default Footer;

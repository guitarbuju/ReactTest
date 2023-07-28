import styles from './footer.module.css'
import myLogo from '../../assets/‎Gerardo_logo.png'

export const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
      <img src={myLogo}/>
        <h6> Brought to you by Gerardo Madrid</h6>
        
      </footer>
    </div>
  );
};

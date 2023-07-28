import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Questions } from "../../../../stuff";
export const Header = () => {
  console.log(Questions);
  return (
    <header className={styles.container}>
      <h1>Welcome to Tester.com</h1>
      
      <div >

       <p style={{marginTop:'35px'}}>Questions:</p>
        <ul className={styles.buttons}>
       <Link className={styles.link} to='/'><button>Home</button></Link>
          {Questions.map((question, index) => 
            (<li key={index}>
             
                <Link className={styles.link} to={`/q${index + 1}`}><button >
                  {question.id}</button>
                </Link>
             
            </li>)
          )}
        </ul>
      </div>
    </header>
  );
};

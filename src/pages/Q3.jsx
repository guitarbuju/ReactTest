import { Questions } from "../../stuff";
import Question from "../components/Question/Question";
import { Link } from "react-router-dom";
import { useStore3,useStore } from "../../store";
import styles from "./q.module.css";

const Q3 = () => {
  const pregunta = Questions[2].question;
  const respuestas = Questions[2].answers.map((e) => e.answer);
  const carga = Questions[2].answers.map((e) => e.charge);

  const addToCart = useStore((state) => state.addToCart);
  // eslint-disable-next-line no-unused-vars
  const cart = useStore((state) => state.cart);
  

  const setSelectedCarga = useStore3((state) => state.setSelectedCarga3);
  const selectedCarga = useStore3((state) => state.selectedCarga3);

  const handleAnswerChange = (carga) => {
    setSelectedCarga(carga);
    addToCart(carga)
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.question}>
        {!selectedCarga && ""}
        {selectedCarga > 0 && <h1 className={styles.yeah}>!!!!! YEAH :)</h1>}
        {selectedCarga === 0 && <h1 className={styles.nope}>!!!!! NOPE :(</h1>}
        <Question
          id={Questions[2].id}
          pregunta={pregunta}
          respuestas={respuestas}
          carga={carga}
          onAnswerChange={handleAnswerChange} // Pass the handleAnswerChange function to the Question component
        />
        {selectedCarga !== "" && (
          <Link to="/q4">
            <button className="btn btn-success">Next</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Q3;

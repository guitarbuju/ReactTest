import { Questions } from "../../stuff";
import Question from "../components/Question/Question";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import styles from "./q.module.css";

const Q1 = () => {
  const pregunta = Questions[0].question;
  const respuestas = Questions[0].answers.map((e) => e.answer);
  const carga = Questions[0].answers.map((e) => e.charge);
  const addToCart = useStore((state) => state.addToCart);
  const setSelectedCarga = useStore((state) => state.setSelectedCarga);
  const selectedCarga = useStore((state) => state.selectedCarga);

  const onAnswerChange = (carga) => {
     setSelectedCarga(carga);
    addToCart(carga);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.question}>
        {!selectedCarga && ""}
        {selectedCarga > 0 && <h1 className={styles.yeah}>!!!!! YEAH :)</h1>}
        {selectedCarga === 0 && <h1 className={styles.nope}>!!!!! NOPE :(</h1>}

        <Question
          id={Questions[0].id}
          pregunta={pregunta}
          respuestas={respuestas}
          carga={carga}
          onAnswerChange={onAnswerChange} // Pass the handleAnswerChange function to the Question component
        />
        {selectedCarga !== "" && (
          <Link to="/q2">
            <button className="btn btn-success">Next</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Q1;

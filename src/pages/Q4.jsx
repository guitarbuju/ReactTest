import { Questions } from "../../stuff";
import Question from "../components/Question/Question";
import { Link } from "react-router-dom";
import { useStore4 } from "../../store";
import styles from "./q.module.css";

const Q4 = () => {
  const pregunta = Questions[3].question;
  const respuestas = Questions[3].answers.map((e) => e.answer);
  const carga = Questions[3].answers.map((e) => e.charge);

  // const [selectedAnswer, setSelectedAnswer] = useState("");
  // const [selectedCarga, setSelectedCarga] = useState('');

  const setSelectedCarga = useStore4((state) => state.setSelectedCarga4);
  const selectedCarga = useStore4((state) => state.selectedCarga4);

  const handleAnswerChange = (carga) => {
    setSelectedCarga(carga);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.question}>
        {!selectedCarga && ""}
        {selectedCarga > 0 && <h1 className={styles.yeah}>!!!!! YEAH :)</h1>}
        {selectedCarga === 0 && <h1 className={styles.nope}>!!!!! NOPE :(</h1>}
        <Question
          id={Questions[3].id}
          pregunta={pregunta}
          respuestas={respuestas}
          carga={carga}
          onAnswerChange={handleAnswerChange} // Pass the handleAnswerChange function to the Question component
        />
       {selectedCarga !== "" && (
          <Link to="/q5">
            <button className="btn btn-success">Next</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Q4;

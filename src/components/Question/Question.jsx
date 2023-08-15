/* eslint-disable react/prop-types */

import styles from "./question.module.css";

const Question = ({
  id,
  pregunta,
  respuestas,
  onAnswerChange,
  carga,
}) => {
  const handleAnswerChange = (event) => {
    const selectedValue = event.target.value;
    const selectedIndex = respuestas.indexOf(selectedValue);

    onAnswerChange(carga[selectedIndex]);
  };
  return (
    <div>
      <h4>pregunta: {id}</h4>
      <h2>{pregunta}</h2>
      <div>
        <ul className={styles.ul}>
          {respuestas.map((e, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  value={e}
                  checked=""
                  onChange={handleAnswerChange}
                />
                <span>{e}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Question;

import { useStore, useStore2, useStore3, useStore4,useStore5 } from "../../../store";
import { Questions } from "../../../stuff";
import styles from "./q.module.css";

const Final = () => {
  const answer1 = useStore((state) => state.selectedCarga);
  const answer2 = useStore2((state) => state.selectedCarga2);
  const answer3 = useStore3((state) => state.selectedCarga3);
  const answer4 = useStore4((state) => state.selectedCarga4);
  const answer5 = useStore5((state) => state.selectedCarga5);

  const total = answer1 + answer2 + answer3 + answer4+answer5;
  const divisor = 5 * Questions.length;
  const performance = total / divisor;
  let val = "";
  const tolerance = 0.01; // Define a tolerance value for floating-point comparisons

  switch (true) {
    case performance === 0:
      val = (
        <h1 className={styles.nope}>!!! POOOOOOOOOORRRRR !!!!!</h1>
      );
      break;
    case Math.abs(performance - 0.25) <= tolerance:
      val = (
        <h1 className={styles.nope}>!!! NO WAY JOSE !!!!!!!</h1>
      );
      break;
    case Math.abs(performance - 0.50) <= tolerance:
      val = (
        <h1 className={styles.nope}>!!! ALMOST THERE BUT... NOPE !!!!!!!</h1>
      );
      break;
    case Math.abs(performance - 0.75) <= tolerance:
      val = (
        <h1 className={styles.yeah}>!!!! GOOD ENOUGH !!!!!</h1>
      );
      break;
    case Math.abs(performance - 1) <= tolerance:
      val = (
        <h1 className={styles.yeah}>!!!! EXCELLENT !!!</h1>
      );
      break;
    default:
      val =''
      break;
  }
  const handleRefresh = () => {
    window.location.reload(); // Refresh the window
    window.location.href = '/'; // Navigate back to the '/' route
  };


  return (
    <div>
     {total === 0 && val}
      {total && (
        <div>
          <h5>your total is {total}</h5>
          <h5>your performance is {performance}</h5>
        {val}
          {performance >= 0.75 ? (
            <h1 className={styles.yeah}>
              !!!CONGRATS YOU&apos;VE MADE IT!!!!!
            </h1>
          ) : (
            <h1 className={styles.nope}>!!!YOU&apos;VE FAILED  !!!!</h1>
          )}
        
        </div>
      )}

      <button onClick={handleRefresh} className="btn btn-success">Restart Test</button>
    </div>
  );
};

export default Final;

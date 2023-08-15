import { useStore } from "../../store";
import { Questions } from "../../stuff";
import styles from "./q.module.css";

const Final = () => {
  // eslint-disable-next-line no-unused-vars
  const cart = useStore((state) => state.cart);
  console.log(cart);
  const cartSum = cart.reduce((acc, item) => acc + item, 0);

  const total = cartSum;
  const divisor = 5 * Questions.length;
  const performance = (total / divisor)*100;
  let val = "";
  const tolerance = 0.01; // Define a tolerance value for floating-point comparisons

  switch (true) {
    case performance === 0:
      val = <h1 className={styles.nope}>!!! POOOOOOOOOORRRRR !!!!!</h1>;
      break;
    case Math.abs(performance - 0.25) <= tolerance:
      val = <h1 className={styles.nope}>!!! NO WAY JOSE !!!!!!!</h1>;
      break;
    case Math.abs(performance - 0.5) <= tolerance:
      val = (
        <h1 className={styles.nope}>!!! ALMOST THERE BUT... NOPE !!!!!!!</h1>
      );
      break;
    case Math.abs(performance - 0.75) <= tolerance:
      val = <h1 className={styles.yeah}>!!!! GOOD ENOUGH !!!!!</h1>;
      break;
    case Math.abs(performance - 1) <= tolerance:
      val = <h1 className={styles.yeah}>!!!! EXCELLENT !!!</h1>;
      break;
    default:
      val = "";
      break;
  }
  const handleRefresh = () => {
    window.location.reload(); // Refresh the window
    window.location.href = "/"; // Navigate back to the '/' route
  };

  return (
    <div>
      {total === 0 && val}
      {total && (
        <div>
          <h5>your total is {total}</h5>
          <h5>your performance is {performance} %</h5>
          {val}
          {performance >= 0.75 ? (
            <h1 className={styles.yeah}>
              !!!CONGRATS YOU&apos;VE MADE IT!!!!!
            </h1>
          ) : (
            <h1 className={styles.nope}>!!!YOU&apos;VE FAILED !!!!</h1>
          )}
        </div>
      )}

      <button onClick={handleRefresh} className="btn btn-success">
        Restart Test
      </button>
    </div>
  );
};

export default Final;

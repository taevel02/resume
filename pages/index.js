import styles from "../styles/Home.module.css";

import Background from "../components/Background";

export default function Home() {
  return (
    <div>
      <Background />
      <div className={styles.container}>
        <p>
          Magna dolore cillum enim ut sunt adipisicing ex consectetur ullamco.
        </p>
      </div>
    </div>
  );
}

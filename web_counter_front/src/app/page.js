"use client";
import { useState } from 'react';
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        Web counter
      </header>

      <main className={styles.main}>
        <div>
          <p class="display-1 d-flex align-items-center justify-content-center" style={{fontSize: '12rem'}}>
            COUNT: {count}
          </p>
          <div class="container d-flex align-items-center justify-content-center">
            <button type="button" class="btn btn-dark btn-lg" onClick={decrement} style={{margin: '0.5rem', width: '25rem', height: '5rem', borderRadius: '1rem', fontSize: '1.5rem'}}>
              -1
            </button>
            <button type="button" class="btn btn-dark btn-lg" onClick={increment} style={{margin: '0.5rem', width: '25rem', height: '5rem', borderRadius: '1rem', fontSize: '1.5rem'}}>
              +1
            </button>
          </div>
          <div class="container d-flex align-items-center justify-content-center">
            <button type="button" class="btn btn-dark btn-sm" onClick={reset} style={{width: '51rem', padding: '0.8rem', margin: '0.25rem', borderRadius: '2rem', fontSize: '1.2rem'}}>
              reset
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}


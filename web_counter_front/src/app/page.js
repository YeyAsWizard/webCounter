"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [count, setCount] = useState(0);
  
  // Fetch the count from the API when the component mounts
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/count', {
          headers: {
            Authorization: 'Bearer 0afdf59513c602b6128a3f36f0f1f0ff9ec65d3958e430648c4b3b0856abeb6d109591640c7ddcac94409bbc94473cbd85d4e4e59a60e2a216e155b386dad9dbaf6a20c9a765a59bd6e28ed355f749e48efd58b3faaf0472d659310fdf21bc113747316731869ceb981274382cf3425f92216414d3e62558474b3c7ac6648ee2'
          }
        });
        setCount(response.data.data.num);
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    fetchCount();
  }, []);

  // Function to update the count on the server
  const updateCountOnServer = async (newCount) => {
    try {
      await axios.put('http://127.0.0.1:8000/api/count', 
        { data: { num: newCount } }, // Updated line
        {
          headers: {
            Authorization: 'Bearer 0afdf59513c602b6128a3f36f0f1f0ff9ec65d3958e430648c4b3b0856abeb6d109591640c7ddcac94409bbc94473cbd85d4e4e59a60e2a216e155b386dad9dbaf6a20c9a765a59bd6e28ed355f749e48efd58b3faaf0472d659310fdf21bc113747316731869ceb981274382cf3425f92216414d3e62558474b3c7ac6648ee2'
          }
        }
      );
    } catch (error) {
      console.error("Error updating count:", error);
    }
  };

  // Increment count
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateCountOnServer(newCount);
  };

  // Decrement count
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    updateCountOnServer(newCount);
  };

  // Reset count to 0
  const reset = () => {
    setCount(0);
    updateCountOnServer(0);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        Web counter
      </header>

      <main className={styles.main}>
        <div>
          <p className="display-1 d-flex align-items-center justify-content-center" style={{fontSize: '12rem'}}>
            COUNT: {count}
          </p>
          <div className="container d-flex align-items-center justify-content-center">
            <button type="button" className="btn btn-dark btn-lg" onClick={decrement} style={{margin: '0.5rem', width: '25rem', height: '5rem', borderRadius: '1rem', fontSize: '1.5rem'}}>
              -1
            </button>
            <button type="button" className="btn btn-dark btn-lg" onClick={increment} style={{margin: '0.5rem', width: '25rem', height: '5rem', borderRadius: '1rem', fontSize: '1.5rem'}}>
              +1
            </button>
          </div>
          <div className="container d-flex align-items-center justify-content-center">
            <button type="button" className="btn btn-dark btn-sm" onClick={reset} style={{width: '51rem', padding: '0.8rem', margin: '0.25rem', borderRadius: '2rem', fontSize: '1.2rem'}}>
              reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

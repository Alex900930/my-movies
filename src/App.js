import styles from  './App.module.css';
import { CuadriculaPelis } from './componentes/CuadriculaPelis';

function App() {
  return (
    <div>
      <header>
        <h1 className={styles.moviesTitle}>Peliculas</h1>
      </header>
      <main>
        <CuadriculaPelis />
      </main>
      </div>
  );
}

export default App;

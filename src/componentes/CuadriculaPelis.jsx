import styles from './CuadriculaPelis.module.css';
import movies from './movies.json';
import { TarjetaPeli } from './TarjetaPeli';

export function CuadriculaPelis(){
    
      
    return (
        
          <ul className={styles.contenedorGrid}>
            {movies.map((movie) => {
              return <TarjetaPeli key={movie.id} movie={movie} />;
            })}
          </ul>
         
      
    );
}
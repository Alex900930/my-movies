import styles from './TarjetaPelis.module.css';

export function TarjetaPeli({movie}){
    
    const imageUrl= "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <li className={styles.tarjetaEstilos}>
        <img  className={`${styles.imgEstilos} ${styles.movieCard}`} src={imageUrl} alt={movie.title} />
        <div>{movie.title}</div>
      </li>
    );
}
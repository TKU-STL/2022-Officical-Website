import styles from '../styles/Home.module.css';

export default function Hero(){
    return(<div className={styles.heroBackground}>
        <h1 className={styles.title}>Shot for Stars</h1>
        <h2 className={styles.subtitle}>We are Space Technology Laboratory, Tamkang University</h2>
    </div>);
}
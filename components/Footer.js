import styles from '../styles/Home.module.css';

export default function Footer() {
    return (<footer className={styles.footer}>
        <a
            href="https://github.com/TKU-STL"
            target="_blank"
            rel="noopener noreferrer"
        >
            Designed by Mark Chen || Operated by TKU Space Technology Laboratory
        </a>
    </footer>
    );
}
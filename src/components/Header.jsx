import styles from './Header.module.css';

import finalace from '../imagens/finalacelogo.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={finalace} alt = "Logo da final ace"/>

        </header>
    );
}
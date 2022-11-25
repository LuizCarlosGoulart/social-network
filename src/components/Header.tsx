import styles from './Header.module.css'
import logo from '../images/logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logotipo"/>
            <h1> Feed </h1>
        </header>
    )
}
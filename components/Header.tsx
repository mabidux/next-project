import Link from 'next/link';
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link href={'/'} className={styles.title}>NEXT PROJECT</Link>
            </div>
            <div className={styles.links}>
                <Link href={'/'}>Início</Link>
                <Link href={'/terco'}>Terço</Link>
                <Link href={'/evangelho'}>Evangelho</Link>
            </div>
        </header>
    );
}
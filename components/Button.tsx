import Link from "next/link";

import styles from '../styles/Button.module.css'

type ComponentData = {
    href?: string;
    children: string;
    onClick?: any;
}

export default function Button({href, children, onClick}: ComponentData) {
    return href !== undefined ? <Link href={href} className={styles.button}>{children}</Link>
    : <button onClick={onClick} className={styles.button}>{children}</button>
}
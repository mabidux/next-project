import Link from "next/link";
import HeadConfig from "../../components/HeadConfig";
import Header from "../../components/Header";

import styles from '../../styles/Terco.module.css'
import Button from "../../components/Button";

export default function Terco() {
    return (
        <>
        <HeadConfig />
        <Header />
        <main className={styles.main}>
            <h2>SELECIONE UM MISTÉRIO</h2>
            <div className={styles.buttons}>
                <Button href={'/terco/gozosos'}>Gozosos</Button>
                <Button href={'/terco/luminosos'}>Luminosos</Button>
                <Button href={'/terco/dolorosos'}>Dolorosos</Button>
                <Button href={'/terco/gloriosos'}>Gloriosos</Button>
            </div>
        </main>
        </>
    )
}
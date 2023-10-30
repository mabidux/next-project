import { useEffect, useState } from "react";
import HeadConfig from "../components/HeadConfig";
import Header from "../components/Header";

import styles from '../styles/Evangelho.module.css';

export default function Evangelho() {
    const [evangelho, setEvangelho] = useState('Carregando...');
    const [titulo, setTitulo] = useState('Carregando...');
    const [referencia, setReferencia] = useState('Carregando...');

    useEffect(() => {
        fetch('https://liturgia.up.railway.app/').then(response => response.json()).then(json => {
            const evangelhoObject = json.evangelho;
            const titulo = evangelhoObject.titulo;
            const referencia = evangelhoObject.referencia;
            const texto = evangelhoObject.texto;
            setEvangelho(texto);
            setTitulo(titulo);
            setReferencia(referencia);
        });
    });

    return (
        <>
        <HeadConfig/>
        <Header/>
        <main className={styles.main}>
            <h2>EVANGELHO DE HOJE</h2>
            <h3>{titulo} ({referencia})</h3>
            <p>
                {evangelho}
            </p>
        </main>
        </>
    );
}
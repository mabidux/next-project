import { useRouter } from "next/router";
import HeadConfig from "../../components/HeadConfig";
import Header from "../../components/Header";

import styles from '../../styles/Misterio.module.css';
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Oracao from "../../components/Oracao";

type MisteriosMapType = {
    [key: string]: string[]
}
const misteriosMap: MisteriosMapType = {
    'gozosos': ['A Anunciação à Virgem Maria', 'A Visita de Maria à sua prima Isabel', 'O Nascimento de Nosso Senhor Jesus Cristo', 'A Apresentação de Jesus no templo', 'Jesus, que é perdido e reencontrado entre os doutores'],
    'luminosos': ['O Batismo de Jesus', 'O Primeiro milagre de Jesus, transformando água em vinho', 'O Anúncio do Reino de Deus e convite à conversão', 'A Transfiguração de Jesus', 'A Instituição da Eucaristia'],
    'dolorosos': ['A Agonia de Jesus no Horto das Oliveiras', 'A flagelação de Jesus Cristo', 'A coroação de espinhos', 'Jesus, que carrega a própria Cruz até o Calvário', 'A morte de Nosso Senhor Jesus Cristo'],
    'gloriosos': ['A Ressureição de Jesus', 'A Ascenção de Jesus aos céus', 'A Vinda do Espírito Santo sobre Maria e os apóstolos em Pentecostes', 'A Assunção de Nossa Senhora', 'A coroação de Nossa Senhora como rainha dos céus e da Terra']
}

const ordinal = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto'];

export default function Misterio() {
    const router = useRouter();

    const [nomeMisterio, setNomeMisterio] = useState('Carregando...');
    const [nomeMisterioSingular, setNomeMisterioSingular] = useState('Carregando...');
    const [misterioAtualNome, setMisterioAtualNome] = useState('Carregando...');
    const [misterioAtual, setMisterioAtual] = useState(1);
    const [currentOracao, setCurrentOracao] = useState(0);

    useEffect(() => {
        const newNomeMisterio = router.query.misterio as string;
        if (newNomeMisterio === undefined) return;
        setNomeMisterio(newNomeMisterio);
        setNomeMisterioSingular(newNomeMisterio?.slice(0, newNomeMisterio.length-1));
        setMisterioAtualNome(misteriosMap[newNomeMisterio][misterioAtual-1]);
    }, [router]);

    const oracaoType = currentOracao == 0 ? 0 : currentOracao >= 1 && currentOracao <= 10 ? 1 : 2;

    function next() {
        const newValue = currentOracao+1;
        const newMisterio = newValue <= 11 ? misterioAtual : Math.min(misterioAtual+1, 5);
        if (misterioAtual < 5) {
            setCurrentOracao(newValue > 11 ? 0 : newValue);
        } else setCurrentOracao(Math.min(newValue, 11));
        if (newValue > 11) setMisterioAtual(newMisterio);
        setMisterioAtualNome(misteriosMap[nomeMisterio][newMisterio-1]);
    }

    function previous() {
        const newValue = currentOracao-1;
        const newMisterio = newValue >= 0 ? misterioAtual : Math.max(misterioAtual-1, 1);
        if (misterioAtual > 1) {
            setCurrentOracao(newValue < 0 ? 11 : newValue);
        } else setCurrentOracao(Math.max(0, newValue));
        if (newValue < 0) setMisterioAtual(newMisterio);
        setMisterioAtualNome(misteriosMap[nomeMisterio][newMisterio-1]);
    }

    return (
        <>
        <HeadConfig />
        <Header />
        <main className={styles.main}>
            <h2>mistérios {nomeMisterio}</h2>
            <p>No {ordinal[misterioAtual-1]} mistério {nomeMisterioSingular}, contemplamos</p>
            <h2>{misterioAtualNome}</h2>
            <div className={styles.count}>
                {
                    oracaoType == 0 ? <p>Reze o <b>Pai Nosso</b>.</p> :
                    oracaoType == 1 ? <p>Você está na <b>Ave Maria</b> {currentOracao}/10</p> :
                    <p>Reze o <b>Glória</b>.</p>
                }
            </div>
            <div className={styles.buttons}>
                <Button onClick={previous}>Anterior</Button>
                <Button onClick={next}>Seguinte</Button>
            </div>
            <Oracao oracaoType={oracaoType} />
        </main>
        </>
    )
}
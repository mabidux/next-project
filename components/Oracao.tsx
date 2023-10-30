import { useState } from 'react';
import styles from '../styles/Oracao.module.css';

type ComponentData = {
    oracaoType: number;
}

const oracoes = [
    'Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém.',
    'Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
    'Glória ao Pai e ao Filho e ao Espírito Santo. Como era, no princípio, agora e sempre. Amém. Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente aquelas que mais precisarem.'
];

export default function Oracao({oracaoType}: ComponentData) {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <div className={styles.oracao}>
            <div className={styles.toggle} onClick={() => setOpen(!isOpen)}>
                <p>Clique para ver a oração{isOpen ?'▲' : '▼'}</p>
            </div>
            <p data-visible={isOpen} style={{textAlign: 'justify'}}>{oracoes[oracaoType]}</p>
        </div>
    );
}
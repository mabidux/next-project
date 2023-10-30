import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'

import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HeadConfig from '../components/HeadConfig'

export default function Home() {
  return (
    <>
      <HeadConfig />
      <Header />
      <main className={styles.main}>
        <h3>Sobre o projeto</h3>
        <p>
          Esse projeto foi desenvolvido com o objetivo de usar o <b>Next.js</b>.
          Fiz, anteriormente, um projeto parecido usando <b>HTML</b>, <b>JS</b> e <b>CSS</b> puros. <Link href={'https://mabidux.github.io/terco'} target='_blank'>Clique aqui para ver o projeto referido</Link> ou <Link href={'https://www.github.com/mabidux/terco'} target='_blank'>clique aqui para ver o código do projeto referido</Link>.
        </p>
        <h3>O que o projeto inclui?</h3>
        <p>
          O projeto tem duas funções: <Link href={'/terco'}>Terço</Link> e <Link href={'/evangelho'}>Evangelho</Link>.
          A função "Terço" foi feita para auxiliar as pessoas que estão aprendendo a rezar o Santo Terço.
          Permite que selecione os mistérios, mostra o mistério atual, a oração atual, além de ter a opção de mostrar a oração, caso queira ler.
          Além disso, você pode ver algumas passagens bíblicas relacionadas ao mistério para ajudá-lo a meditar. A função "Evangelho" mostra o Evangelho
          de hoje, para aqueles que querem ler. O Evangelho é tirado da API <Link href={'https://liturgia.up.railway.app/'} target='_blank'>https://liturgia.up.railway.app/</Link>.
        </p>
        <h3>Veja o código!</h3>
        <p>
          Veja o código desse projeto no meu GitHub: <Link href={'https://github.com/mabidux/next-project'} target='_blank'>Clique aqui para ver</Link>.
        </p>
        <div className={styles['buttons-container']}>
          <h2>USE JÁ!</h2>
          <div className={styles.buttons}>
            <Link href={'/terco'}>Terço</Link>
            <Link href={'/evangelho'}>Evangelho</Link>
          </div>
        </div>
      </main>
    </>
  )
}

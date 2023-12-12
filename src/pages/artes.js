import React from 'react';
import Head from 'next/head';
import styles from '../styles/Pages.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
function Artes({ artes }) {
    return (
        <div>
            <Head />
            <Navbar />

            <div className={styles.obras}>
                <h1> Obras artísticas </h1>
                {artes.map((arte, index) => (
                    <Link href='/obras/[id]' as={`/obras/${index}`}>
                        <div key={arte.id}> <p> {arte.nome} </p> </div>
                    </Link>
                ))}
                <div className={styles.h3prod}>
                    <h3> <a href='/'> Voltar para página inicial</a></h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=artes')
    const repo = await res.json()
    const artes = await repo;
    return {
        props: { artes }
    }
})
export default Artes;

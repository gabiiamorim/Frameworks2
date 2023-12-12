import Head from 'next/head';
import styles from '../../styles/Pages.module.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
function Obras({ arte = {} }) {
    return (
        <div>
            <Head>
                <title>{arte.nome}</title>
            </Head>

            <Navbar />

            <div className={styles.produtos}>
                <div className={styles.lista}>
                    <p>{arte.nome}</p>
                    <p>{arte.usuario}</p>
                    <p>{arte.data_inclusao}</p>
                    <p>{arte.palavras_chave}</p>
                    <p>{arte.usuario_editor}</p>
                    <p>{arte.descricao}</p>
                </div>
                <div className={styles.h3prod}>
                    <h3> <a href='/artes'> Voltar para lista de obras</a></h3>
                </div>
            </div>
            <Footer />

        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=artes')
    const repo = await res.json()
    const arte = await repo[context.params.id];
    return {
        props: { arte }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=artes')
    const repo = await res.json()
    const artes = await repo;
    const paths = artes.map((_arte, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Obras;
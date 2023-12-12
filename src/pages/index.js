import Head from 'next/head';
import styles from '../styles/Pages.module.css';
import Footer from '../components/Footer';
import localImage from "img/chico.jpg";
import Image from "next/image";
import Navbar from '../components/Navbar';
export default function Home(artes) {
  return (
    <div>
      <Head>
        <title> DescArte </title>
      </Head>

      <Navbar />

      <div className={styles.sobre}>
        <div className={styles.parte1}>
          <h1> Obras de arte</h1>
          <a href="\artes"> Abrir lista de obras artísticas </a>
        </div>
        
        <div className={styles.parte2}>
          <div className={styles.banner}>
            <section> <a href="\obras\4">
              <Image className={styles.banner1}
                src={localImage}
                alt="Picture of the author"
              />
              </a>
            </section>
            <h1 className={styles.h1b}>Conheça algumas obras de artes populares no mundo!</h1>
          </div>

          <div className={styles.imagens}>
            <div className={styles.img1}>
            <section> <a href="\obras\4">
              <Image className={styles.banner1}
                src={localImage}
                alt="Picture of the author"
              />
              </a>
            </section>
            </div>
            <div className={styles.img2}>
            <section> <a href="\obras\4">
              <Image className={styles.banner1}
                src={localImage}
                alt="Picture of the author"
              />
              </a>
            </section>
            </div>
            <div className={styles.img3}>
            <section> <a href="\obras\4">
              <Image className={styles.banner1}
                src={localImage}
                alt="Picture of the author"
              />
              </a>
            </section>
            </div>
            <div className={styles.img4}>
            <section> <a href="\obras\4">
              <Image className={styles.banner1}
                src={localImage}
                alt="Picture of the author"
              />
              </a>
            </section>
            </div>
          </div>
        </div>

      </div>
      <Footer />

    </div>
  )
}

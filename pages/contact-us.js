import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>WebFactory.Ninja - About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="WebFactory Logo"
              width={450}
              height={450}
              priority
            />
          </a>
        </div>

        <div className={styles.contact}>
          <h2 className={inter.className}>Contact Us</h2>
          <p className={inter.className}>
            Get in touch instantly with us via
            <a href="mailto:hi@webfactory.ninja">hi@webfactory.ninja</a>
            or contact our CEO directly via
            <a href="mailto:denis@webfactory.ninja">denis@webfactory.ninja</a>.
          </p>
        </div>

        <div className={styles.grid}>
          <a
            href="/about-us"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find information about us.</p>
          </a>

          <a
            href="/services"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Services <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find what we do.</p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              References <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover who we are.</p>
          </a>

          <a
            href="/contact-us"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Get in touch instantly.</p>
          </a>
        </div>
      </main>
    </>
  );
}
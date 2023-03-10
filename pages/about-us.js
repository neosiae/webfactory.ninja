import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
              width={350}
              height={350}
              priority
            />
          </a>
        </div>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2 className={inter.className}>Why?</h2>
            <p className={inter.className}>
              We want to make Web a better place.
            </p>
          </a>

          <a className={styles.card}>
            <h2 className={inter.className}>How?</h2>
            <p className={inter.className}>
              We provide one-stop solution to your needs.
            </p>
          </a>

          <a className={styles.card}>
            <h2 className={inter.className}>What?</h2>
            <p className={inter.className}>
              Web development for all your needs.
            </p>
          </a>
        </div>

        <div className={styles.grid}>
          <Link href="/about-us" className={styles.card}>
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find information about us.</p>
          </Link>

          <Link href="/services" className={styles.card}>
            <h2 className={inter.className}>
              Services <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find what we do.</p>
          </Link>

          <Link href="/" className={styles.card}>
            <h2 className={inter.className}>
              References <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover who we are.</p>
          </Link>

          <Link href="/contact-us" className={styles.card}>
            <h2 className={inter.className}>
              Contact Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Get in touch instantly.</p>
          </Link>
        </div>
      </main>
    </>
  );
}

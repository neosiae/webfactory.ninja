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
        <title>WebFactory.Ninja - Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="WebFactory Logo"
              width={350}
              height={350}
              priority
            />
          </Link>
        </div>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2 className={inter.className}>Introduction</h2>
            <p className={inter.className}>
              We really want to know what and with whom we are making a deal.
            </p>
          </a>

          <a className={styles.card}>
            <h2 className={inter.className}>Project planning</h2>
            <p className={inter.className}>
              We plan for you all your project needs.
            </p>
          </a>

          <a className={styles.card}>
            <h2 className={inter.className}>Design</h2>
            <p className={inter.className}>
              Our versatile designers can come up with the greatest ideas.
            </p>
          </a>

          <a className={styles.card}>
            <h2 className={inter.className}>Development</h2>
            <p className={inter.className}>
              Our development team will make it work.
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

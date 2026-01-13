import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend & Mobile Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of a Frontend & Mobile Developer specializing in React, Next.js, and React Native"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>

      <main className="min-h-screen">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Portfolio. Built with Next.js, React, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elochukwu Ekwugha — Frontend & Mobile Developer</title>
        <meta
          name="description"
          content="Portfolio of Elochukwu Ekwugha, showcasing production web and mobile applications built with React, Next.js, and React Native. Explore work, skills, and projects."
        />
        <meta
          name="keywords"
          content="Elochukwu, Ekwugha, Elochukwu Ekwugha, Frontend Developer, Mobile Developer, React, Next.js, React Native"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        {/* Open Graph & Twitter */}
        <meta
          property="og:title"
          content="Elochukwu Ekwugha — Frontend & Mobile Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Elochukwu Ekwugha, showcasing production web and mobile applications built with React, Next.js, and React Native. Explore work, skills, and projects."
        />
        <meta
          property="og:url"
          content="https://elochukwu-ekwugha.vercel.app"
        />
        <meta
          property="og:image"
          content="https://elochukwu-ekwugha.vercel.app/logo.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Elochukwu Ekwugha — Frontend & Mobile Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Elochukwu Ekwugha, showcasing production web and mobile applications built with React, Next.js, and React Native. Explore work, skills, and projects."
        />
        <meta
          name="twitter:image"
          content="https://elochukwu-ekwugha.vercel.app/logo.svg"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Elochukwu Ekwugha",
              url: "https://elochukwu-ekwugha.vercel.app",
              sameAs: [
                "https://github.com/ekwugha",
                "https://x.com/darealElo_",
              ],
              jobTitle: "Frontend & Mobile Developer",
            }),
          }}
        />
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
              © {new Date().getFullYear()} Portfolio. Built with Next.js, React,
              and Tailwind CSS.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

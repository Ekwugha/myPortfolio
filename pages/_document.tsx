import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteUrl = "https://elochukwu-ekwugha.vercel.app";
  const siteTitle = "Elochukwu Ekwugha — Frontend & Mobile Developer";
  const siteDescription =
    "Portfolio of Elochukwu Ekwugha, showcasing production web and mobile applications built with React, Next.js, and React Native. Explore work, skills, and projects.";
  const ogImage = `${siteUrl}/logo.svg`;

  return (
    <Html lang="en">
      <Head>
        {/* Favicon and app icons - SVG for modern browsers */}
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="shortcut icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#020617" />
        <meta
          name="google-site-verification"
          content="ciZdg8MKa-gOdRqopXf0wNrD4up4_BTyLKRKSvFFAvQ"
        />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}

        {/* Primary Meta Tags */}
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
        <meta
          name="keywords"
          content="Elochukwu, Ekwugha, Elochukwu Ekwugha, Frontend Developer, Mobile Developer, React, Next.js, React Native, Web Development, Mobile Development, TypeScript, JavaScript, React Developer, Mobile App Developer"
        />
        <meta name="author" content="Elochukwu Ekwugha" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Elochukwu Ekwugha" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@darealElo_" />

        {/* Additional SEO */}
        <meta name="geo.region" content="US" />
        <link rel="canonical" href={siteUrl} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Elochukwu Ekwugha",
              url: siteUrl,
              jobTitle: "Frontend & Mobile Developer",
              description: siteDescription,
              sameAs: [
                "https://github.com/ekwugha",
                "https://x.com/darealElo_",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "React Native",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "Mobile Development",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Software Developer",
              },
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Romain Ecarnot | Passeur du numérique & Architecte du simple",
  description:
    "Contactez Romain Ecarnot pour tout accompagnement aux usages du numérique et de l'IA, conseil en architecture logicielle ou opportunité professionnelle.",
  alternates: {
    canonical: "https://www.romain-ecarnot.com/contact",
  },
  openGraph: {
    title: "Contact - Romain Ecarnot",
    description:
      "Contactez Romain Ecarnot : email direct, LinkedIn et ressources professionnelles.",
    url: "https://www.romain-ecarnot.com/contact",
    images: [
      {
        url: "https://www.romain-ecarnot.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Romain Ecarnot - Contact",
      },
    ],
  },
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function ContactPage() {
  const contactChannels = [
    {
      name: "Email direct",
      value: "contact@romain-ecarnot.com",
      url: "mailto:contact@romain-ecarnot.com",
      description: "Pour toute question, projet ou demande d'accompagnement",
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      badge: "Recommandé",
    },
    {
      name: "LinkedIn",
      value: "romainecarnot",
      url: "https://www.linkedin.com/in/romainecarnot/",
      description: "Échanges professionnels et messagerie directe",
      icon: <LinkedInIcon className="w-5 h-5 text-[#0a66c2]" />,
    },
    {
      name: "GitHub",
      value: "eRom",
      url: "https://github.com/eRom",
      description: "Dépôts de code, architecture logicielle et projets open source",
      icon: <GitHubIcon className="w-5 h-5 text-zinc-300" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 flex items-center justify-center p-4 sm:p-6">
      {/* Schema.org ContactPage pour les agents IA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://www.romain-ecarnot.com/contact#webpage",
            "url": "https://www.romain-ecarnot.com/contact",
            "name": "Contact - Romain Ecarnot",
            "description":
              "Contactez Romain Ecarnot pour tout accompagnement aux usages du numérique et de l'IA.",
            "mainEntity": {
              "@type": "Person",
              "@id": "https://www.romain-ecarnot.com/#person",
              "name": "Romain Ecarnot",
              "email": "contact@romain-ecarnot.com",
              "url": "https://www.romain-ecarnot.com",
              "sameAs": [
                "https://www.linkedin.com/in/romainecarnot/",
                "https://github.com/eRom"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Professional & Educational Inquiries",
                "email": "contact@romain-ecarnot.com",
                "availableLanguage": ["French", "English"]
              }
            }
          }),
        }}
      />

      {/* Subtle top ambient illumination */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-xl py-12 sm:py-16 flex flex-col gap-8" role="main">
        {/* Navigation retour */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l&apos;accueil</span>
          </Link>
        </div>

        {/* Profile Header */}
        <header className="flex flex-col items-center text-center gap-4">
          <div className="relative">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 ring-1 ring-zinc-800 bg-zinc-900/60 shadow-2xl shadow-black/60">
              <Image
                src="/avatar.jpg"
                alt="Photo de profil de Romain Ecarnot"
                fill
                sizes="96px"
                className="rounded-full object-cover"
                priority
              />
            </div>
            <span
              className="absolute bottom-0 right-0 flex h-3 w-3"
              title="Disponible pour échanger"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 ring-2 ring-[#09090b]" />
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              Prendre contact
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 font-medium">
              Romain Ecarnot
            </p>
            <p className="text-xs sm:text-sm text-zinc-500 font-normal max-w-md">
              Disponible pour des missions d&apos;accompagnement aux usages du numérique et de l&apos;IA, du conseil ou des échanges professionnels.
            </p>
          </div>
        </header>

        {/* Contact Links */}
        <nav
          className="flex flex-col gap-3"
          role="navigation"
          aria-label="Canaux de contact"
        >
          {contactChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target={channel.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={channel.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-700/90 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              aria-label={`${channel.name} - ${channel.value}`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-950 border border-zinc-800/90 text-zinc-400 group-hover:border-zinc-700 transition-colors shrink-0">
                  {channel.icon}
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                      {channel.name}
                    </span>
                    {channel.badge && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                        {channel.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-zinc-300 group-hover:text-zinc-200 transition-colors truncate">
                    {channel.value}
                  </span>
                  <span className="text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors truncate mt-0.5">
                    {channel.description}
                  </span>
                </div>
              </div>

              <div className="pl-3 shrink-0">
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
            </a>
          ))}
        </nav>

        {/* Note de localisation & statut (aligné sur cv.romain-ecarnot.com) */}
        <footer
          className="flex flex-col items-center gap-1.5 text-center pt-4 border-t border-zinc-900 text-zinc-500 font-mono text-[11px]"
          role="contentinfo"
        >
          <span>Romain Ecarnot · Nantes, France</span>
          <span>Accompagnement aux usages du numérique &amp; de l&apos;IA · RQTH</span>
        </footer>
      </main>
    </div>
  );
}

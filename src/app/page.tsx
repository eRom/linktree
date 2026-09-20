import { ArrowUpRight, Blocks, FileText, Heart, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type LinkItem = {
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  highlight?: boolean;
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

export default function Home() {
  const links: LinkItem[] = [
    {
      name: "Mon CV",
      url: "https://cv.romain-ecarnot.com/",
      description: "Parcours complet, réalisations & compétences clés",
      icon: <FileText className="w-5 h-5 transition-colors group-hover:text-blue-400" />,
      badge: "En ligne",
      highlight: true,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/romainecarnot/",
      description: "Réseau professionnel & parcours détaillé",
      icon: <LinkedInIcon className="w-5 h-5 transition-colors group-hover:text-[#0a66c2]" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/eRom",
      description: "Projets, dépôts de code & contributions",
      icon: <GitHubIcon className="w-5 h-5 transition-colors group-hover:text-zinc-100" />,
    },
    {
      name: "Tipeee",
      url: "https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/",
      description: "Soutenez mon projet de reprise après l'AVC",
      icon: <Heart className="w-5 h-5 transition-colors group-hover:text-rose-400" />,
      badge: "Soutien",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 flex items-center justify-center p-4 sm:p-6">
      {/* Subtle top ambient illumination */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-xl py-12 sm:py-16 flex flex-col gap-8" role="main">
        {/* Profile Header */}
        <header className="flex flex-col items-center text-center gap-4">
          <div className="relative">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 ring-1 ring-zinc-800 bg-zinc-900/60 shadow-2xl shadow-black/60 overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="Photo de profil de Romain Ecarnot"
                width={112}
                height={112}
                className="w-full h-full rounded-full object-cover"
                priority
              />
            </div>
            {/* Active status indicator */}
            <span
              className="absolute bottom-1 right-1 flex h-3.5 w-3.5"
              title="Disponible pour de nouveaux projets"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-[#09090b]" />
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              Romain Ecarnot
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 font-medium">
              Passeur du numérique &amp; Architecte du simple
            </p>
            <p className="text-xs sm:text-sm text-zinc-500 font-normal">
              Accompagnement aux usages du numérique et de l&apos;IA
            </p>
          </div>
        </header>

        {/* Links Navigation */}
        <nav
          className="flex flex-col gap-3"
          role="navigation"
          aria-label="Liens principaux"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-700/90 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              aria-label={`${link.name} - ${link.description}`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-950 border border-zinc-800/90 text-zinc-400 group-hover:border-zinc-700 transition-colors shrink-0">
                  {link.icon}
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                    {link.badge && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/40">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors truncate">
                    {link.description}
                  </span>
                </div>
              </div>

              <div className="pl-3 shrink-0">
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
            </a>
          ))}
        </nav>

        {/* Story / About section */}
        <section
          className="p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xs text-left"
          aria-labelledby="section-parcours"
        >
          <h2
            id="section-parcours"
            className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2.5"
          >
            Mon Parcours
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
            Après un AVC qui a bouleversé ma vie, j&apos;ai choisi de transformer
            cette épreuve en opportunité. Aujourd&apos;hui, je combine mon expertise
            technique en architecture cloud avec ma passion pour la tech, créant
            des solutions solides et résilientes qui font la différence.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-2 text-center text-xs text-zinc-500 flex flex-col items-center gap-2" role="contentinfo">
          <div className="flex items-center gap-2.5">
            <Link
              href="/claude-marketplace"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
            >
              <Blocks className="w-3.5 h-3.5 text-blue-400" />
              <span>Plugins Claude</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Prendre contact</span>
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Romain Ecarnot. Tous droits réservés.</p>
        </footer>
      </main>
    </div>
  );
}

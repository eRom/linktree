"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type LinkItem = {
  name: string;
  url: string;
  color: string;
  icon?: IconDefinition;
  customIcon?: string;
  description?: string;
};

export default function Home() {
  const links: LinkItem[] = [
    {
      name: "Mon CV",
      url: "https://cv.romain-ecarnot.com/",
      icon: faFileAlt,
      color: "bg-[#2563eb] hover:bg-[#1d4ed8] focus:bg-[#1d4ed8]",
      description:
        "Téléchargez mon CV complet et découvrez mon parcours professionnel",
    },
    {
      name: "Health In Cloud",
      url: "https://www.healthincloud.app/",
      customIcon: "https://dev.healthincloud.app/icon-512.png",
      color: "bg-[#ad46ff] hover:bg-[#9333ea] focus:bg-[#9333ea]",
      description:
        "Mon projet de santé digitale et solutions cloud pour le secteur médical",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/romainecarnot/",
      icon: faLinkedin,
      color: "bg-[#0077B5] hover:bg-[#005885] focus:bg-[#005885]",
      description:
        "Connectez-vous avec moi sur LinkedIn pour découvrir mon parcours professionnel",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cloudinnantes/",
      icon: faInstagram,
      color:
        "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 focus:opacity-90",
      description: "Découvrez mon univers en images sur Instagram",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/CloudinNantes",
      icon: faXTwitter,
      color: "bg-[#000000] hover:bg-[#1a1a1a] focus:bg-[#1a1a1a]",
      description: "Suivez-moi sur X pour mes actualités tech et cloud",
    },
    {
      name: "GitHub",
      url: "https://github.com/eRom",
      icon: faGithub,
      color: "bg-[#555555] hover:bg-[#444444] focus:bg-[#444444]",
      description:
        "Découvrez mes projets de développement et contributions open source",
    },

    {
      name: "Tipeee",
      url: "https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/",
      icon: faStarOfLife,
      color: "bg-[#E93854] hover:bg-[#C62F47] focus:bg-[#BA2C43]",
      description: "Soutenez mon projet de reprise professionnelle après l'AVC",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-start justify-center p-4 sm:p-8 pt-16 sm:pt-20">
      <main className="w-full max-w-2xl" role="main">
        {/* Profile Section */}
        <header className="flex flex-col md:flex-row items-center md:items-center gap-6 mb-8">
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image
              src="https://avatars.githubusercontent.com/u/146684?s=400&u=66a228f8030e491a4115a4e6b2f06eceb03a7f6a&v=4"
              alt="Photo de profil de Romain Ecarnot, architecte cloud et développeur"
              fill
              sizes="(max-width: 768px) 128px, 128px"
              className="rounded-full object-cover border-4 border-white shadow-2xl"
              priority
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Romain Ecarnot
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-medium mb-2">
              Architecte Cloud & Développeur
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-md ">
              - Engagé dans la reprise professionnelle après un AVC -
            </p>
          </div>
        </header>

        {/* Links Section */}
        <nav
          className="flex flex-col gap-4"
          role="navigation"
          aria-label="Liens principaux"
        >
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-4 focus:ring-white/30 focus:rounded-lg"
              aria-label={`${link.name} - ${link.description}`}
              tabIndex={0}
            >
              <Card className="p-0 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl">
                <Button
                  variant="ghost"
                  className={`w-full h-16 sm:h-18 text-base sm:text-lg font-semibold flex items-center justify-center gap-4 text-white hover:text-white focus:text-white ${link.color} transition-all duration-300 focus:outline-none`}
                  role="button"
                  aria-describedby={`link-description-${index}`}
                >
                  {link.customIcon ? (
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <Image
                        src={link.customIcon}
                        alt={`Icône ${link.name}`}
                        fill
                        sizes="24px"
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  ) : link.icon ? (
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="w-6 h-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="truncate">{link.name}</span>
                </Button>
                <div id={`link-description-${index}`} className="sr-only">
                  {link.description}
                </div>
              </Card>
            </a>
          ))}
        </nav>

        {/* Additional Info Section */}
        <section className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <h2 className="text-lg font-semibold text-white mb-3 text-center">
            Mon Parcours
          </h2>
          <p className="text-white/90 text-center leading-relaxed">
            Après un AVC qui a bouleversé ma vie, j&apos;ai choisi de
            transformer cette épreuve en opportunité. Aujourd&apos;hui, je
            combine mon expertise technique en architecture cloud avec ma
            passion pour la santé digitale, créant des solutions innovantes qui
            font la différence.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center" role="contentinfo">
          <p className="text-white/70 text-sm">
            © 2025 Romain Ecarnot. Tous droits réservés.
          </p>
          <p className="text-white/60 text-xs mt-2">
            Développé avec ❤️ et{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/80 transition-colors"
            >
              Next.js
            </a>{" "}
            /{" "}
            <a
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/80 transition-colors"
            >
              Cursor
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

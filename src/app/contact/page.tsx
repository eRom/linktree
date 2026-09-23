import { ArrowUpRight, Copy } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Colophon } from "@/components/Colophon";
import { CopyButton } from "@/components/CopyButton";
import { Folio } from "@/components/Folio";
import { TrackedLink } from "@/components/TrackedLink";
import { CONTACT_EMAIL, CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/data/profile";
import { fr } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Contact - Romain Ecarnot | Passeur du numérique",
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
  twitter: {
    card: "summary_large_image",
    title: "Contact - Romain Ecarnot",
    description:
      "Contactez Romain Ecarnot pour tout accompagnement aux usages du numérique et de l'IA.",
    images: ["https://www.romain-ecarnot.com/og-image.jpg"],
  },
};

const CHANNELS = [
  {
    label: "LinkedIn",
    value: "romainecarnot",
    detail: "Échanges professionnels et messagerie directe.",
    href: LINKEDIN_URL,
  },
  {
    label: "Le CV",
    value: "cv.romain-ecarnot.com",
    detail: "Parcours complet, réalisations et compétences clés.",
    href: CV_URL,
  },
  {
    label: "GitHub",
    value: "eRom",
    detail: "Dépôts de code, architecture logicielle et projets open source.",
    href: GITHUB_URL,
  },
];

// L'ours du journal : qui publie, d'où, et comment le joindre.
const MASTHEAD = [
  { term: "Directeur de la publication", description: "Romain Ecarnot" },
  { term: "Adresse", description: "Nantes, France" },
  { term: "Courriel", description: CONTACT_EMAIL },
  { term: "Langues", description: "Français, anglais" },
  { term: "Statut", description: "RQTH" },
];

export default function ContactPage() {
  return (
    <>
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
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.romain-ecarnot.com/#website",
              "name": "Romain Ecarnot",
              "url": "https://www.romain-ecarnot.com"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://www.romain-ecarnot.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://www.romain-ecarnot.com/contact"
                }
              ]
            },
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

      <Folio current="contact" />

      <main
        id="contenu"
        className="mx-auto grid w-full max-w-[88rem] gap-x-12 gap-y-12 px-4 pt-8 pb-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:pt-10"
      >
        <div className="flex flex-col gap-8 lg:col-span-7">
          <header className="flex flex-col gap-5">
            <h1 className="type-headline text-[clamp(2.75rem,9vw,6rem)]">Prendre contact</h1>
            <p className="type-deck max-w-[60ch] text-[clamp(1.1875rem,1.8vw,1.5rem)]">
              {fr(
                "Disponible pour des missions d'accompagnement aux usages du numérique et de l'IA, du conseil ou des échanges professionnels.",
              )}
            </p>
          </header>

          {/* L'action principale de la page : le courriel, en noir inversé. */}
          <section aria-label="Courriel" className="bg-ink px-5 py-6 text-paper sm:px-7 sm:py-7">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block font-grotesk text-[clamp(1.5rem,5.4vw,3.25rem)] leading-none font-black break-words [font-variation-settings:'wdth'_60] hover:underline hover:decoration-2 hover:underline-offset-8 focus-visible:outline-paper"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">

              <CopyButton
                text={CONTACT_EMAIL}
                label="Copier l'adresse électronique"
                className="type-folio inline-flex items-center gap-2 border border-paper/60 px-3.5 py-2.5 transition-colors hover:border-paper focus-visible:outline-paper"
              >
                <Copy aria-hidden="true" className="size-4" strokeWidth={2} />
                {fr("Copier l'adresse")}
              </CopyButton>
            </div>
          </section>

          <section aria-labelledby="ailleurs">
            <h2 id="ailleurs" className="type-rubric border-t-[3px] border-ink pt-2">
              Ailleurs
            </h2>
            <ul className="mt-1">
              {CHANNELS.map((channel) => (
                <li key={channel.href} className="border-t border-ink first:border-t-0">
                  <TrackedLink
                    href={channel.href}
                    external
                    className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-0.5 py-3.5 sm:grid-cols-[9rem_1fr_auto]"
                  >
                    <span className="font-grotesk text-xl leading-tight font-extrabold [font-variation-settings:'wdth'_84]">
                      <span className="pencil">{channel.label}</span>
                    </span>
                    <span className="col-start-1 flex flex-col sm:col-start-2 sm:row-start-1">
                      <span className="text-[0.9375rem] leading-snug">{channel.value}</span>
                      <span className="type-body text-[0.9375rem] leading-snug text-ink-soft">
                        {fr(channel.detail)}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="col-start-2 row-start-1 size-5 sm:col-start-3"
                    />
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* L'ours : l'encadré de la rédaction, avec la photo de signature. */}
        <aside aria-labelledby="ours" className="lg:col-span-5">
          <div className="border-[3px] border-ink p-5 sm:p-7">
            <div className="flex items-center gap-4 border-b border-ink pb-4">
              <Image
                src="/avatar.jpg"
                alt="Portrait en noir et blanc de Romain Ecarnot"
                width={80}
                height={80}
                className="size-20 shrink-0 object-cover"
              />
              <div>
                <h2 id="ours" className="type-rubric">
                  romain-ecarnot.com
                </h2>
                <p className="type-caption mt-1">
                  Passeur du numérique &amp; Architecte du simple
                </p>
              </div>
            </div>
            <dl className="mt-1">
              {MASTHEAD.map((entry) => (
                <div
                  key={entry.term}
                  className="grid grid-cols-1 gap-x-4 border-b border-ink/40 py-2.5 last:border-b-0 sm:grid-cols-[11rem_1fr]"
                >
                  <dt className="type-caption">{entry.term}</dt>
                  <dd className="text-[0.9375rem] leading-snug">{entry.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </main>

      <Colophon />
    </>
  );
}

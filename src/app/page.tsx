import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Colophon } from "@/components/Colophon";
import { Folio } from "@/components/Folio";
import { TrackedLink } from "@/components/TrackedLink";
import {
  ADDRESSES,
  CV_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  MILESTONES,
  TOOLS,
} from "@/data/profile";
import { fr } from "@/lib/typography";

const SECONDARY_LINKS = [
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "Écrire", href: "/contact", external: false },
];

// Nom propre : jamais coupé en fin de ligne par la césure automatique.
function ProperName({ children }: { children: string }) {
  return <span className="hyphens-none">{children}</span>;
}

function LinkArrow({ external }: { external: boolean }) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      aria-hidden="true"
      strokeWidth={1.75}
      className="size-5 shrink-0"
    />
  );
}

export default function PortraitPage() {
  return (
    <>
      <Folio current="portrait" />

      <main id="contenu" className="mx-auto w-full max-w-[88rem] px-4 sm:px-8 lg:px-10">
        {/* Le portrait reste à l'écran pendant qu'on lit l'article, comme une photo pleine page. */}
        <div className="grid gap-x-12 gap-y-6 pt-5 lg:grid-cols-12 lg:pt-6">
          <figure className="flex flex-col gap-2.5 lg:sticky lg:top-4 lg:col-span-5 lg:h-[min(calc(100svh-5.5rem),58rem)] lg:self-start">
            <div className="relative aspect-[5/4] overflow-hidden lg:aspect-auto lg:min-h-[26rem] lg:flex-1">
              <Image
                src="/portrait.jpg"
                alt="Portrait en noir et blanc de Romain Ecarnot"
                fill
                priority
                sizes="(min-width: 1408px) 540px, (min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[41%_35%]"
              />
            </div>
            <figcaption className="type-caption">
              <span className="font-bold text-ink">Romain Ecarnot</span>, basé à Nantes,
              disponible pour de nouveaux projets.
            </figcaption>
          </figure>

          <article aria-labelledby="titre" className="lg:col-span-7">
            <header className="flex flex-col gap-6 lg:gap-7">
              <h1
                id="titre"
                className="type-headline text-[clamp(2.6rem,10.5vw,4.75rem)] lg:text-[clamp(3.5rem,6.6vw,6rem)]"
              >
                <span className="block">Romain Ecarnot,</span>
                <span className="block">sans détour.</span>
              </h1>
              <p className="type-deck max-w-[36ch] text-[clamp(1.1875rem,1.8vw,1.5rem)]">
                {fr(
                  "Passeur du numérique et architecte du simple, il a bâti des systèmes d'information pendant vingt-cinq ans. Il aide aujourd'hui ceux qui les utilisent à adopter le numérique et l'IA, par le chemin le plus court.",
                )}
              </p>
            </header>

            <div className="mt-8 flex flex-col gap-4">
              <TrackedLink
                href={CV_URL}
                external
                className="group flex items-center justify-between gap-6 bg-ink px-5 py-4 text-paper sm:px-6 sm:py-5"
                tickClassName="ml-3 inline-block h-[0.7em] w-[0.9em]"
              >
                <span className="font-grotesk text-[clamp(1.375rem,2.2vw,1.875rem)] leading-tight font-extrabold [font-variation-settings:'wdth'_80]">
                  {fr("Suite : le CV complet")}
                </span>
                <span className="flex items-center gap-3">
                  <span className="type-caption hidden text-paper-deep sm:inline">
                    cv.romain-ecarnot.com
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="size-7"
                  />
                </span>
              </TrackedLink>
              <p className="type-folio flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="text-ink-soft">Ailleurs</span>
                {SECONDARY_LINKS.map((link) => (
                  <TrackedLink
                    key={link.href}
                    href={link.href}
                    external={link.external}
                    className="pencil"
                  >
                    {link.label}
                  </TrackedLink>
                ))}
              </p>
            </div>

            {/* Le récit, en colonnes de journal. */}
            <div className="type-body newspaper-columns mt-10 border-t-[3px] border-ink pt-6 md:columns-2">
              <p>
                <span className="font-bold tracking-[0.03em] [font-variant-caps:all-small-caps]">
                  {fr("Vingt-cinq ans d'architecture")}
                </span>
                {fr(
                  " lui ont laissé une certitude : un système échoue quand on oublie ses utilisateurs. Romain Ecarnot en a fait son métier. Il accompagne entreprises, collectivités, associations et organismes de formation pour que le numérique et l'IA soient adoptés par ceux qui s'en servent, pas seulement installés.",
                )}
              </p>
              <p>
                {fr("Son parcours est celui d'un architecte. Les services de la Bbox TV chez ")}
                <ProperName>Bouygues Telecom</ProperName>
                {fr(", puis la migration du système d'information de ")}
                <ProperName>Veolia</ProperName>
                {fr(
                  ", comme architecte solutions AWS chez GFI. Chez OPEN, il dirige un programme AWS, forme et anime une communauté d'architectes. En 2021, il cofonde ",
                )}
                <ProperName>pharmacylounge</ProperName>
                {fr(
                  ", un réseau social professionnel pour pharmaciens, dont il devient CTO et DPO : données de santé, RGPD, architecture HDS.",
                )}
              </p>
              <p>
                {fr(
                  "En 2025, un AVC l'oblige à s'arrêter. Il réapprend l'informatique en observant où se loge la friction, et en tire sa pédagogie : expliquer la technique à ceux qui n'en font pas, et la leur rendre désirable.",
                )}
              </p>
              <p>
                {fr("Depuis, il construit. ")}
                <ProperName>Cruchot</ProperName>
                {fr(", un client d'IA de bureau 100 % local ; ")}
                <ProperName>Trinity</ProperName>
                {fr(
                  ", son système d'IA personnel ; neuf plugins open source pour Claude Code ; une vingtaine d'outils livrés sans sur-ingénierie. Chaque grand modèle, de Claude à ",
                )}
                <ProperName>Mistral</ProperName>
                {fr(", passe sur son banc d'essai, sur des tâches réelles.")}
              </p>
              <p>
                {fr(
                  "Sa règle tient en une phrase, qu'il applique aussi à cette page : le meilleur code est souvent celui qu'on n'a pas besoin d'écrire.",
                )}
              </p>
            </div>

            {/* La citation et une planche d'atelier, imprimée sur le papier. */}
            <div className="mt-10 grid items-start gap-x-10 gap-y-8 border-t border-ink pt-6 md:grid-cols-2">
              <blockquote className="type-quote text-[clamp(1.75rem,2.4vw,2.25rem)]">
                <p>{fr("« Un système échoue quand on oublie ses utilisateurs. »")}</p>
              </blockquote>
              <figure>
                <Image
                  src="/marketplace/erom-caserne.webp"
                  alt={fr(
                    "Planche au fusain du plugin Caserne : une presse d'atelier qui donne à chaque agent IA sa propre identité.",
                  )}
                  width={800}
                  height={534}
                  sizes="(min-width: 1024px) 26vw, (min-width: 768px) 45vw, 100vw"
                  className="printed-plate h-auto w-full"
                />
                <figcaption className="type-caption mt-2">
                  {fr("Caserne, l'un de ses neuf plugins : planche au fusain.")}
                </figcaption>
              </figure>
            </div>

            <section aria-labelledby="outils" className="mt-10">
              <h2 id="outils" className="type-rubric border-t-[3px] border-ink pt-2">
                Ses outils
              </h2>
              <ul className="mt-1 md:grid md:grid-cols-3 md:gap-x-8">
                {TOOLS.map((tool) => (
                  <li
                    key={tool.href}
                    className="border-t border-ink first:border-t-0 md:border-t-0"
                  >
                    <TrackedLink
                      href={tool.href}
                      external={tool.external}
                      className="group grid grid-cols-[1fr_auto] items-baseline gap-x-3 gap-y-1 py-3"
                    >
                      <span className="font-grotesk text-lg leading-tight font-extrabold [font-variation-settings:'wdth'_84]">
                        <span className="pencil">{tool.name}</span>
                      </span>
                      <LinkArrow external={tool.external} />
                      <span className="type-body col-span-2 text-[0.9375rem] leading-snug text-ink-soft">
                        {fr(tool.summary)}
                      </span>
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>

        {/* Repères : une date par ligne, la rupture de 2025 dessinée en pointillé. */}
        <section aria-labelledby="reperes" className="mt-14 pb-10">
          <h2 id="reperes" className="type-rubric border-t-[3px] border-ink pt-2">
            Repères
          </h2>
          <ol className="mt-2">
            {MILESTONES.map((milestone, index) => {
              const dashedTop = milestone.isBreak || MILESTONES[index - 1]?.isBreak;
              return (
                <li
                  key={milestone.period}
                  className={`grid items-baseline gap-x-5 gap-y-1 border-t border-ink py-3 sm:grid-cols-[10.5rem_1fr_auto] md:py-4 ${
                    dashedTop ? "border-dashed" : ""
                  } ${index === 0 ? "border-t-0" : ""}`}
                >
                  <span className="tabular font-grotesk text-[clamp(1.375rem,3.2vw,2rem)] leading-none font-black [font-variation-settings:'wdth'_72]">
                    {milestone.period}
                  </span>
                  <p className={`type-body text-pretty ${milestone.isBreak ? "text-ink-soft" : ""}`}>
                    {fr(milestone.text)}
                  </p>
                  {milestone.place && (
                    <span className="type-caption hidden sm:block">{milestone.place}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        {/* Les adresses du hub, et le QR code pour basculer sur téléphone. */}
        <div className="grid gap-x-12 gap-y-10 pb-14 lg:grid-cols-12">
          <section aria-labelledby="adresses" className="lg:col-span-8">
            <h2 id="adresses" className="type-rubric border-t-[3px] border-ink pt-2">
              Ses adresses
            </h2>
            <ul className="mt-1">
              {ADDRESSES.map((address) => (
                <li key={address.href} className="border-t border-ink first:border-t-0">
                  <TrackedLink
                    href={address.href}
                    external={address.external}
                    className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-0.5 py-3.5 sm:grid-cols-[13rem_1fr_auto]"
                  >
                    <span className="font-grotesk text-xl leading-tight font-extrabold [font-variation-settings:'wdth'_84]">
                      <span className="pencil">{address.label}</span>
                    </span>
                    <span className="type-body col-start-1 text-[0.9375rem] leading-snug text-ink-soft sm:col-start-2 sm:row-start-1">
                      {fr(address.destination)}
                    </span>
                    <span className="col-start-2 row-start-1 sm:col-start-3">
                      <LinkArrow external={address.external} />
                    </span>
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </section>

          <aside aria-labelledby="telephone" className="hidden lg:col-span-4 lg:block">
            <h2 id="telephone" className="type-rubric border-t-[3px] border-ink pt-2">
              Sur votre téléphone
            </h2>
            <div className="mt-4 flex items-start gap-5">
              <Image
                src="/qrcode.svg"
                alt="QR code vers www.romain-ecarnot.com"
                width={112}
                height={112}
                unoptimized
                className="printed-plate size-28 shrink-0"
              />
              <p className="type-caption">
                Scannez pour garder cette page sous la main, ou la transmettre.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Colophon />
    </>
  );
}

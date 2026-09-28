"use client";

import { Play } from "lucide-react";
import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CHAPTERS,
  SHOWREEL_DURATION_SECONDS,
  SHOWREEL_LANDSCAPE,
  SHOWREEL_PORTRAIT,
  formatTimecode,
} from "@/data/showreel";
import { fr } from "@/lib/typography";

// Même seuil que les colonnes de journal : paysage à partir de 64rem, portrait en dessous.
const WIDE = "(min-width: 64rem)";
const NARROW = "(max-width: 63.99rem)";

const chapterAt = (time: number) =>
  CHAPTERS.findLastIndex((chapter) => time >= chapter.start);

// Le film ne charge rien avant le clic : l'affiche d'abord, la vidéo seulement sur demande.
// Le navigateur choisit la bonne source via l'attribut media, un seul fichier est téléchargé.
export function ShowreelPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pendingStart = useRef(0);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(-1);

  // Lien profond ?t=16 (clips Schema.org) : on prépare le point de départ, sans lecture automatique.
  useEffect(() => {
    const t = Number(new URLSearchParams(window.location.search).get("t"));
    if (Number.isFinite(t) && t > 0 && t < SHOWREEL_DURATION_SECONDS) {
      pendingStart.current = t;
      setCurrent(chapterAt(t));
    }
  }, []);

  const playFrom = (seconds: number) => {
    const video = videoRef.current;
    setCurrent(chapterAt(seconds));
    if (!video) {
      pendingStart.current = seconds;
      setStarted(true);
      return;
    }
    video.currentTime = seconds;
    void video.play();
  };

  // Affiche en haut de page : chargée tout de suite, c'est l'image principale (LCP).
  const common = { alt: "", sizes: "(min-width: 64rem) 58vw, 100vw", loading: "eager", fetchPriority: "high" } as const;
  const wide = getImageProps({ ...common, src: SHOWREEL_LANDSCAPE.poster, width: 1920, height: 1080 }).props;
  const narrow = getImageProps({ ...common, src: SHOWREEL_PORTRAIT.poster, width: 1080, height: 1920 }).props;

  return (
    <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
      <figure className="lg:col-span-8">
        <div className="mx-auto flex w-full max-w-[min(100%,calc((78svh-4rem)*9/16))] flex-col-reverse lg:max-w-none lg:flex-col">
          <div className="relative aspect-[9/16] w-full bg-ink lg:aspect-video">
            {started ? (
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="absolute inset-0 size-full bg-ink object-contain"
                onLoadedMetadata={(event) => {
                  if (pendingStart.current > 0) event.currentTarget.currentTime = pendingStart.current;
                }}
                onTimeUpdate={(event) => setCurrent(chapterAt(event.currentTarget.currentTime))}
              >
                <source src={SHOWREEL_LANDSCAPE.url} media={WIDE} type="video/mp4" />
                <source src={SHOWREEL_PORTRAIT.url} media={NARROW} type="video/mp4" />
                {fr("Votre navigateur ne lit pas cette vidéo : ")}
                <a href={SHOWREEL_LANDSCAPE.url}>{fr("téléchargez-la")}</a>.
              </video>
            ) : (
              // L'affiche est cliquable à la souris ; au clavier, le bandeau suffit.
              <picture className="absolute inset-0 cursor-pointer" onClick={() => playFrom(pendingStart.current)}>
                <source media={WIDE} srcSet={wide.srcSet} sizes={wide.sizes} />
                <img {...narrow} alt="" className="size-full object-cover" />
              </picture>
            )}
          </div>
          {/* Le bandeau (au-dessus de l'image sur téléphone pour rester sous les yeux, dessous en grand écran) :
              l'action principale en noir inversé, puis le chapitre en cours. */}
          <div className="flex min-h-16 items-center justify-between gap-4 border-b border-paper/25 bg-ink px-5 lg:border-t lg:border-b-0 text-paper sm:px-6">
            {started ? (
              <p className="type-folio min-w-0 truncate">
                {current >= 0 ? fr(CHAPTERS[current].title) : "Lecture"}
              </p>
            ) : (
              <button
                type="button"
                onClick={() => playFrom(pendingStart.current)}
                className="flex items-center gap-3 py-3 font-grotesk text-[clamp(1.25rem,2.4vw,1.75rem)] leading-none font-black [font-variation-settings:'wdth'_70] hover:underline hover:decoration-2 hover:underline-offset-6 focus-visible:outline-paper"
              >
                <Play aria-hidden="true" className="size-[0.9em] fill-current" strokeWidth={0} />
                {pendingStart.current > 0 ? `Lire depuis ${formatTimecode(pendingStart.current)}` : "Lire le film"}
              </button>
            )}
            <span className="type-folio tabular shrink-0">{formatTimecode(SHOWREEL_DURATION_SECONDS)}</span>
          </div>
        </div>
        <figcaption className="type-caption mx-auto mt-2.5 max-w-[min(100%,calc((78svh-4rem)*9/16))] lg:max-w-none">
          {fr(
            "Montage de 33 secondes, en paysage sur grand écran et en portrait sur téléphone. Aucune lecture automatique : rien ne se télécharge avant le clic.",
          )}
        </figcaption>
      </figure>

      <section aria-labelledby="chapitres" className="lg:col-span-4">
        <h2 id="chapitres" className="type-rubric border-t-[3px] border-ink pt-2">
          Au fil du film
        </h2>
        <ol className="mt-1">
          {CHAPTERS.map((chapter, index) => (
            <li key={chapter.start} className="border-t border-ink/40 first:border-t-0">
              <button
                type="button"
                onClick={() => playFrom(chapter.start)}
                aria-current={index === current ? "true" : undefined}
                className="group grid w-full grid-cols-[3.25rem_1fr] items-baseline gap-x-3 py-3 text-left"
              >
                <span className="type-folio tabular text-ink-soft group-aria-[current=true]:text-ink">
                  {formatTimecode(chapter.start)}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="font-grotesk text-lg leading-tight font-extrabold [font-variation-settings:'wdth'_84] group-aria-[current=true]:font-black">
                    <span className="pencil group-aria-[current=true]:[background-size:100%_0.42em]">
                      {fr(chapter.title)}
                    </span>
                  </span>
                  <span className="type-body text-[0.9375rem] leading-snug text-ink-soft">
                    {fr(chapter.summary)}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

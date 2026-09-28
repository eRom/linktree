import type { Metadata } from "next";
import { Colophon } from "@/components/Colophon";
import { Folio } from "@/components/Folio";
import { ShowreelPlayer } from "@/components/ShowreelPlayer";
import {
  CHAPTERS,
  SHOWREEL_DURATION_SECONDS,
  SHOWREEL_LANDSCAPE,
  SHOWREEL_PAGE_URL,
  SHOWREEL_PORTRAIT,
  SHOWREEL_TITLE,
  SHOWREEL_TRANSCRIPT,
  SHOWREEL_UPLOAD_DATE,
} from "@/data/showreel";
import { fr } from "@/lib/typography";

const SITE_URL = "https://www.romain-ecarnot.com";
const DESCRIPTION =
  "33 secondes pour un parcours : Flash, Bbox TV et le cloud, puis l'AVC, la reconstruction et un atelier d'agents IA. Romain Ecarnot, sans détour.";

export const metadata: Metadata = {
  title: "Showreel - Romain Ecarnot | Sans détour",
  description: DESCRIPTION,
  alternates: {
    canonical: SHOWREEL_PAGE_URL,
  },
  openGraph: {
    type: "video.other",
    title: `Showreel - ${SHOWREEL_TITLE}`,
    description: DESCRIPTION,
    url: SHOWREEL_PAGE_URL,
    images: [
      {
        url: SITE_URL + SHOWREEL_LANDSCAPE.poster,
        width: SHOWREEL_LANDSCAPE.width,
        height: SHOWREEL_LANDSCAPE.height,
        alt: "Romain Ecarnot, sans détour : portrait tramé, dernière image du showreel",
      },
    ],
    videos: [
      {
        url: SHOWREEL_LANDSCAPE.url,
        type: "video/mp4",
        width: SHOWREEL_LANDSCAPE.width,
        height: SHOWREEL_LANDSCAPE.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Showreel - ${SHOWREEL_TITLE}`,
    description: DESCRIPTION,
    images: [SITE_URL + SHOWREEL_LANDSCAPE.poster],
  },
};

const variantEncoding = (variant: typeof SHOWREEL_LANDSCAPE) => ({
  "@type": "MediaObject",
  name: `Version ${variant.label}`,
  contentUrl: variant.url,
  encodingFormat: "video/mp4",
  width: variant.width,
  height: variant.height,
});

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SHOWREEL_PAGE_URL}#webpage`,
      url: SHOWREEL_PAGE_URL,
      name: "Showreel - Romain Ecarnot",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SHOWREEL_PAGE_URL}#video` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Showreel", item: SHOWREEL_PAGE_URL },
        ],
      },
    },
    {
      "@type": "VideoObject",
      "@id": `${SHOWREEL_PAGE_URL}#video`,
      name: `${SHOWREEL_TITLE} (showreel)`,
      description: DESCRIPTION,
      thumbnailUrl: [SITE_URL + SHOWREEL_LANDSCAPE.poster, SITE_URL + SHOWREEL_PORTRAIT.poster],
      uploadDate: SHOWREEL_UPLOAD_DATE,
      duration: `PT${SHOWREEL_DURATION_SECONDS}S`,
      contentUrl: SHOWREEL_LANDSCAPE.url,
      inLanguage: "fr-FR",
      encoding: [variantEncoding(SHOWREEL_LANDSCAPE), variantEncoding(SHOWREEL_PORTRAIT)],
      transcript: SHOWREEL_TRANSCRIPT,
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      hasPart: CHAPTERS.map((chapter) => ({
        "@type": "Clip",
        name: chapter.title,
        startOffset: chapter.start,
        endOffset: chapter.end,
        url: `${SHOWREEL_PAGE_URL}?t=${chapter.start}`,
      })),
    },
  ],
};

export default function ShowreelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <Folio current="showreel" />

      <main id="contenu" className="mx-auto flex w-full max-w-[88rem] flex-col gap-10 px-4 pt-8 pb-16 sm:px-8 lg:px-10 lg:pt-10">
        <header className="flex flex-col gap-5">
          <p className="type-rubric">Showreel</p>
          <h1 className="type-headline text-[clamp(2.75rem,9vw,6rem)]">Sans détour</h1>
          <p className="type-deck max-w-[60ch] text-[clamp(1.1875rem,1.8vw,1.5rem)]">
            {fr(
              "Trente-trois secondes, un parcours entier : vingt ans de métier, un AVC qui arrête tout, puis la reconstruction et l'atelier d'aujourd'hui.",
            )}
          </p>
        </header>

        <ShowreelPlayer />
      </main>

      <Colophon />
    </>
  );
}

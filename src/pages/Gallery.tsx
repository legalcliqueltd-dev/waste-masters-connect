import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import VideoEmbed from "@/components/VideoEmbed";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

import galleryHouseBefore from "@/assets/gallery-house-before.jpg";
import galleryHouseAfter from "@/assets/gallery-house-after.jpg";
import galleryHouseLoading from "@/assets/gallery-house-loading.jpg";
import galleryConstruction1 from "@/assets/gallery-construction-1.jpg";
import galleryConstruction2 from "@/assets/gallery-construction-2.jpg";
import galleryGarden1 from "@/assets/gallery-garden-1.jpg";
import galleryGarden2 from "@/assets/gallery-garden-2.jpg";
import galleryCommercial1 from "@/assets/gallery-commercial-1.jpg";
import fleet0085 from "@/assets/fleet-0085.jpg";
import fleet0086 from "@/assets/fleet-0086.jpg";
import fleet0087 from "@/assets/fleet-0087.jpg";
import fleet0089 from "@/assets/fleet-0089.jpg";

type Category =
  | "All"
  | "Our fleet"
  | "House clearances"
  | "Construction waste"
  | "Garden waste"
  | "Commercial";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, "All">;
  stage?: "Before" | "After";
}

const categories: Category[] = [
  "All",
  "Our fleet",
  "House clearances",
  "Construction waste",
  "Garden waste",
  "Commercial",
];

const galleryItems: GalleryItem[] = [
  /* The fleet, photographed on site. */
  {
    src: fleet0086,
    alt: "A Waste Masters DAF CF rear-loader compactor truck parked on site in Lagos",
    caption:
      "One of our DAF CF rear-loading compactors on site in Lagos, between rounds.",
    category: "Our fleet",
  },
  {
    src: fleet0089,
    alt: "Full side profile of a Waste Masters rear-loading compactor truck",
    caption:
      "Full side profile. The 6x2 chassis carries a rear-loading compaction body built for high-capacity residential rounds.",
    category: "Our fleet",
  },
  {
    src: fleet0087,
    alt: "The Lean and Green certified rear-loading compaction unit",
    caption:
      "The rear-loading compaction unit, carrying its Lean and Green certification for CO2 reduction.",
    category: "Our fleet",
  },
  {
    src: fleet0085,
    alt: "A Waste Masters DAF CF compactor truck ready for the morning round",
    caption:
      "Loaded and checked, ready for the morning round. Two of the fleet parked up together.",
    category: "Our fleet",
  },
  {
    src: galleryHouseBefore,
    alt: "A cluttered living room before a house clearance",
    caption:
      "Full property clearance in Abuja. The living room packed with old furniture, boxes and household waste awaiting removal.",
    category: "House clearances",
    stage: "Before",
  },
  {
    src: galleryHouseAfter,
    alt: "A clean, empty room after a house clearance",
    caption:
      "The same room cleared, swept and ready for the new occupants. Everything recycled or responsibly disposed of.",
    category: "House clearances",
    stage: "After",
  },
  {
    src: galleryHouseLoading,
    alt: "A crew loading furniture into a collection truck",
    caption:
      "Loading old mattresses and furniture during a full house clearance on a Lagos residential estate.",
    category: "House clearances",
  },
  {
    src: galleryConstruction1,
    alt: "Construction site waste being cleared",
    caption:
      "Rubble and building debris removal from a construction site in Abuja. Over 15 tonnes cleared in a single day.",
    category: "Construction waste",
  },
  {
    src: galleryConstruction2,
    alt: "A clean construction site after waste removal",
    caption:
      "The same site tidied after full waste removal, ready for the next phase of building work.",
    category: "Construction waste",
    stage: "After",
  },
  {
    src: galleryGarden1,
    alt: "Garden waste being collected by tricycle",
    caption:
      "Branches, hedge trimmings and green waste collected from a garden in Maitama, Abuja using our solar tricycle.",
    category: "Garden waste",
  },
  {
    src: galleryGarden2,
    alt: "A well kept garden after waste clearance",
    caption:
      "A maintained garden following green waste removal and landscaping debris clearance.",
    category: "Garden waste",
    stage: "After",
  },
  {
    src: galleryCommercial1,
    alt: "Office waste removal in progress",
    caption:
      "Commercial office clearance on Victoria Island, Lagos. Old furniture, IT equipment and packaging removed discreetly.",
    category: "Commercial",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  const close = useCallback(() => setLightboxIndex(null), []);

  /* Navigate inside the filtered set, so arrows never jump to a hidden photo. */
  const step = useCallback(
    (delta: number) =>
      setLightboxIndex((i) =>
        i === null ? i : (i + delta + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [lightboxIndex, close, step]);

  const active = lightboxIndex === null ? null : filtered[lightboxIndex];

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Jobs we have finished"
        lead="Real collections completed by our crews, from house clearances and construction sites to garden clean-ups and commercial contracts."
        rail={[
          { label: "Jobs completed", value: "500+" },
          { label: "Cities served", value: "Three" },
          { label: "Waste recycled", value: "90% of collections" },
          { label: "Client satisfaction", value: "98%" },
        ]}
      />

      {/* Gallery */}
      <section className="py-section" aria-labelledby="gallery-heading">
        <div className="container mx-auto">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="gallery-heading"
              align="left"
              eyebrow="Photo record"
              title="Before, during and after"
              className="mb-0"
            />
          </div>

          {/* Filter */}
          <div
            className="mb-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter photographs by category"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-md border px-4 py-2 text-[0.8125rem] font-medium transition-colors duration-200",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-brand-navy-soft/40 hover:text-brand-navy"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.alt} animation="scale-in" delay={(i % 6) * 70}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-lg text-left photo-edge"
                  aria-label={`Open photograph: ${item.alt}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                  </div>

                  {item.stage && (
                    <span className="absolute left-3 top-3 rounded-[4px] bg-brand-navy-deep/85 px-2 py-1 font-mono text-[0.625rem] font-medium uppercase leading-none tracking-[0.14em] text-white backdrop-blur-sm">
                      {item.stage}
                    </span>
                  )}

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-brand-navy-deep/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex-1 text-[0.8125rem] leading-relaxed text-white">
                      {item.caption}
                    </span>
                    <Maximize2 className="mb-0.5 h-4 w-4 flex-none text-white/70" aria-hidden="true" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press video */}
      <section className="border-y border-border bg-secondary/50 py-section" aria-labelledby="gallery-video-heading">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <SectionHeading
              id="gallery-video-heading"
              align="left"
              eyebrow="On camera"
              title="Our Managing Director, on site in Port Harcourt"
              lead="Speaking to the press at Creek Road Market, one of the zones where refuse collection has been brought under control."
              className="mb-0"
            />
            <Reveal animation="scale-in">
              <VideoEmbed
                id="8J-8-qzTf6w"
                title="The Managing Director being interviewed by the press about refuse collection at Creek Road Market, Port Harcourt"
                kicker="Press interview · Creek Road Market, Port Harcourt"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy-deep/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white hover:text-brand-navy-deep sm:right-6 sm:top-6"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {filtered.length > 1 && (
            <>
              <button
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white hover:text-brand-navy-deep sm:left-6"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photograph"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white hover:text-brand-navy-deep sm:right-6"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photograph"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <figure
            className="max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[70vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mx-auto mt-6 max-w-2xl text-center">
              <p className="text-[0.9375rem] leading-relaxed text-white/85">
                {active.caption}
              </p>
              <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
                {active.category} · {lightboxIndex! + 1} of {filtered.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}

      {/* CTA */}
      <section className="on-navy bg-gradient-navy py-section" aria-labelledby="gallery-cta">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 id="gallery-cta" className="text-white">
            Need a job like one of these?
          </h2>
          <p className="lead mx-auto mt-5 max-w-xl text-white/70">
            House clearance, construction clean-up or a commercial contract. Send
            a photo and we will price it.
          </p>
          <Link to="/contact" className="mt-10 inline-block">
            <Button size="xl" className="gap-2">
              Get a free quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;

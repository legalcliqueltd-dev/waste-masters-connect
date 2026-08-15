import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";

import galleryHouseBefore from "@/assets/gallery-house-before.jpg";
import galleryHouseAfter from "@/assets/gallery-house-after.jpg";
import galleryHouseLoading from "@/assets/gallery-house-loading.jpg";
import galleryConstruction1 from "@/assets/gallery-construction-1.jpg";
import galleryConstruction2 from "@/assets/gallery-construction-2.jpg";
import galleryGarden1 from "@/assets/gallery-garden-1.jpg";
import galleryGarden2 from "@/assets/gallery-garden-2.jpg";
import galleryCommercial1 from "@/assets/gallery-commercial-1.jpg";
import truck0085 from "@/assets/truck-0085.jpg.asset.json";
import truck0087 from "@/assets/truck-0087.jpg.asset.json";
import truck0089 from "@/assets/truck-0089.jpg.asset.json";

type Category = "All" | "House Clearances" | "Construction Waste" | "Garden Waste" | "Commercial & Equipment";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, "All">;
  badge?: string;
}

const categories: Category[] = [
  "All",
  "House Clearances",
  "Construction Waste",
  "Garden Waste",
  "Commercial & Equipment",
];

const galleryItems: GalleryItem[] = [
  {
    src: galleryHouseBefore,
    alt: "Cluttered room before house clearance",
    caption: "Before: Full property clearance in Abuja — living room packed with old furniture, boxes, and household waste awaiting removal.",
    category: "House Clearances",
    badge: "Before",
  },
  {
    src: galleryHouseAfter,
    alt: "Clean empty room after house clearance",
    caption: "After: The same room completely cleared, swept, and ready for the new occupants. All items recycled or responsibly disposed.",
    category: "House Clearances",
    badge: "After",
  },
  {
    src: galleryHouseLoading,
    alt: "Team loading furniture into waste collection truck",
    caption: "Our team loading old mattresses and furniture during a full house clearance in a Lagos residential estate.",
    category: "House Clearances",
  },
  {
    src: galleryConstruction1,
    alt: "Construction site waste being cleared",
    caption: "Large-scale rubble and building debris removal from a construction site in Abuja. Over 15 tonnes cleared in a single day.",
    category: "Construction Waste",
  },
  {
    src: galleryConstruction2,
    alt: "Clean construction site after waste removal",
    caption: "Construction site tidied after full waste removal — ready for the next phase of building work.",
    category: "Construction Waste",
    badge: "After",
  },
  {
    src: galleryGarden1,
    alt: "Garden waste being collected by tricycle",
    caption: "Branches, hedge trimmings, and green waste collected from a residential garden in Maitama, Abuja using our solar tricycle.",
    category: "Garden Waste",
  },
  {
    src: galleryGarden2,
    alt: "Beautiful garden after waste clearance",
    caption: "After: A beautifully maintained garden following our green waste removal and landscaping debris clearance service.",
    category: "Garden Waste",
    badge: "After",
  },
  {
    src: galleryCommercial1,
    alt: "Office waste removal in progress",
    caption: "Commercial office clearance on Victoria Island, Lagos — old furniture, IT equipment, and packaging removed discreetly.",
    category: "Commercial & Equipment",
  },
  {
    src: truck0085.url,
    alt: "Waste Masters DAF CF refuse compactor truck ready for collection",
    caption: "Our DAF CF rear-loader compactor trucks on site — the backbone of our daily commercial and residential collections.",
    category: "Commercial & Equipment",
  },
  {
    src: truck0087.url,
    alt: "Rear loader mechanism of a Waste Masters compactor truck",
    caption: "Rear-loading compaction unit — Lean and Green certified equipment built for low-emission, high-capacity collection.",
    category: "Commercial & Equipment",
  },
  {
    src: truck0089.url,
    alt: "Side view of Waste Masters green refuse compactor truck",
    caption: "Full side profile of one of our compactor trucks stationed in a Lagos residential estate before the morning round.",
    category: "Commercial & Equipment",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider opacity-80 font-semibold mb-3">Our Work</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Real waste removal jobs completed by our team — from house clearances and construction sites to garden clean-ups and commercial projects.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-6 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center text-sm">
            <div>
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="opacity-60">Jobs Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="opacity-60">Cities Served</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">90%</p>
              <p className="opacity-60">Waste Recycled</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">98%</p>
              <p className="opacity-60">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="transition-all duration-200"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {filtered.map((item, i) => (
              <div
                key={`${item.alt}-${i}`}
                className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-eco transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxIndex(galleryItems.indexOf(item))}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Badge */}
                {item.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs shadow-sm">
                    {item.badge}
                  </Badge>
                )}

                {/* Category tag */}
                <Badge variant="secondary" className="absolute top-3 right-3 text-xs backdrop-blur-sm bg-background/80">
                  {item.category}
                </Badge>

                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="text-background text-sm leading-relaxed">{item.caption}</p>
                </div>

                {/* Camera icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-5 h-5 text-background" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No images in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-background/80 hover:text-background text-3xl font-light z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev / Next */}
          {lightboxIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-background/60 hover:text-background text-4xl z-10"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              aria-label="Previous"
            >
              ‹
            </button>
          )}
          {lightboxIndex < galleryItems.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-background/60 hover:text-background text-4xl z-10"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              aria-label="Next"
            >
              ›
            </button>
          )}

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-background text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                {galleryItems[lightboxIndex].caption}
              </p>
              <Badge variant="secondary" className="mt-2 text-xs">
                {galleryItems[lightboxIndex].category}
              </Badge>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-eco text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need a Similar Job Done?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Whether it's a house clearance, construction clean-up, or commercial waste removal — get a free quote today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 bg-background text-foreground hover:bg-background/90 gap-2">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;

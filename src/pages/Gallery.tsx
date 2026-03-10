import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-waste-masters-tricycles.jpg";

const categories = ["All", "Collection", "Recycling", "Events", "Community"];

const galleryItems = [
  { id: 1, src: heroImage, title: "Solar tricycle fleet in action", category: "Collection" },
  { id: 2, src: heroImage, title: "Community clean-up event in Abuja", category: "Events" },
  { id: 3, src: heroImage, title: "Waste sorting at recycling centre", category: "Recycling" },
  { id: 4, src: heroImage, title: "Residential waste collection, Lekki", category: "Collection" },
  { id: 5, src: heroImage, title: "Team volunteer day with community", category: "Community" },
  { id: 6, src: heroImage, title: "Eco-friendly disposal operations", category: "Recycling" },
  { id: 7, src: heroImage, title: "Construction site waste removal", category: "Collection" },
  { id: 8, src: heroImage, title: "Neighbourhood clean-up programme", category: "Events" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <>
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            See our work in action — from daily collections to community clean-up events across Nigeria.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {filtered.map((item) => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-eco transition-all duration-300 aspect-[4/3]">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-background text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

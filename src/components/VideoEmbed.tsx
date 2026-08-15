import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  /** YouTube video id, e.g. "8J-8-qzTf6w". */
  id: string;
  /** Used as the iframe title and the accessible name of the play button. */
  title: string;
  /** Short line printed under the play button, e.g. a location. */
  kicker?: string;
  className?: string;
}

/**
 * Click-to-play YouTube embed. The page ships a single thumbnail instead of
 * the full player, so the video costs one image until someone wants it.
 */
/* Not every video has every thumbnail size. When one is missing YouTube
   serves a 120px grey placeholder with a 200, so a failure has to be caught
   by measuring the image rather than by waiting for an error. */
const posterSizes = ["maxresdefault", "hqdefault", "mqdefault"];

const VideoEmbed = ({ id, title, kicker, className }: VideoEmbedProps) => {
  const [playing, setPlaying] = useState(false);
  const [sizeIndex, setSizeIndex] = useState(0);
  const poster = `https://i.ytimg.com/vi/${id}/${posterSizes[sizeIndex]}.jpg`;

  const nextPoster = () =>
    setSizeIndex((i) => Math.min(i + 1, posterSizes.length - 1));

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-lg bg-brand-navy-deep shadow-professional",
        className
      )}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="on-navy group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            loading="lazy"
            onError={nextPoster}
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth <= 121) nextPoster();
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/85 via-brand-navy-deep/25 to-brand-navy-deep/10 transition-opacity duration-300 group-hover:opacity-90"
          />

          {/* Play control */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-eco transition-transform duration-300 ease-out-expo group-hover:scale-110 md:h-20 md:w-20"
          >
            <Play className="ml-1 h-6 w-6 fill-current md:h-7 md:w-7" />
          </span>

          {kicker && (
            <span className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-5 text-left md:p-6">
              <span className="h-2 w-2 flex-none rounded-full bg-brand-green" />
              <span className="font-mono text-[0.625rem] font-medium uppercase leading-none tracking-[0.16em] text-white/80">
                {kicker}
              </span>
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default VideoEmbed;

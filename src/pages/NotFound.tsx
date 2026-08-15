import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="on-navy relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-navy py-section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--blue)) 0%, transparent 68%)" }}
      />
      <div className="container relative mx-auto">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-on-navy eyebrow-rule mb-6">Error 404</p>
          <h1 className="text-white">This page has been cleared</h1>
          <p className="lead mt-6 text-white/70">
            The address{" "}
            <span className="font-mono text-[0.9em] text-white/90">
              {location.pathname}
            </span>{" "}
            does not exist. It may have moved, or the link may be out of date.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/">
              <Button size="xl" className="w-full gap-2 sm:w-auto">
                Back to the homepage
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <a href="tel:+2348033036016">
              <Button variant="outlineOnDark" size="xl" className="w-full gap-2 sm:w-auto">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call 0803 303 6016
              </Button>
            </a>
          </div>

          <nav className="mt-12 border-t border-white/15 pt-8" aria-label="Popular pages">
            <p className="mb-4 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
              Try one of these
            </p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {[
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "About us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-[0.9375rem] text-white/70 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

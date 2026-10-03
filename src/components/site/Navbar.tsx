import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#home" className="flex flex-col leading-none">
      <span className={cn("font-display text-2xl font-semibold", light ? "text-cream" : "text-primary")}>
        Bake Brothers
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-[0.35em] text-accent">Punjabi Bagh · Delhi</span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-background/95 shadow-soft backdrop-blur" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo light={!solid} />
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  solid ? "text-foreground" : "text-cream",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <WhatsAppButton variant={solid ? "solid" : "light"} />
        </div>
        <button
          className={cn("lg:hidden", solid ? "text-primary" : "text-cream")}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>
      {open && (
        <div className="border-t bg-background px-5 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b py-4 font-display text-2xl text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-4 w-full" />
        </div>
      )}
    </header>
  );
}

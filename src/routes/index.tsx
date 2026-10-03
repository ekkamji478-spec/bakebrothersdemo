import { createFileRoute } from "@tanstack/react-router";
import { Cake, Gift, MessageCircle, Store, MapPin, Clock, Phone, Instagram, ArrowRight } from "lucide-react";
import { Navbar, Logo, navLinks } from "@/components/site/Navbar";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Reveal, SafeImage } from "@/components/site/Reveal";
import { site } from "@/config/site";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import cake from "@/assets/cake.jpg";
import pastries from "@/assets/pastries.jpg";
import brownies from "@/assets/brownies.jpg";
import cookies from "@/assets/cookies.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import breads from "@/assets/breads.jpg";
import savoury from "@/assets/savoury.jpg";
import hamper from "@/assets/hamper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bake Brothers — Bakery in Punjabi Bagh, Delhi" },
      { name: "description", content: "Cakes, pastries, brownies, cookies and freshly baked treats from Bake Brothers in Punjabi Bagh, Delhi. Enquire on WhatsApp." },
      { property: "og:title", content: "Bake Brothers — Bakery in Punjabi Bagh, Delhi" },
      { property: "og:description", content: "Delightful cakes and baked treats for your sweetest moments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  { name: "Celebration Cakes", img: cake, desc: "Beautiful cakes for birthdays, anniversaries and every celebration in between." },
  { name: "Pastries", img: pastries, desc: "Delicate, indulgent pastries for an everyday treat or an afternoon with friends." },
  { name: "Brownies", img: brownies, desc: "Rich, chocolatey squares made for sharing — or not." },
  { name: "Cookies", img: cookies, desc: "Classic cookies, perfect with a cup of chai or coffee." },
  { name: "Cupcakes", img: cupcakes, desc: "Little cakes with swirls of frosting, ideal for parties and gifting." },
  { name: "Fresh Breads", img: breads, desc: "Loaves and buns from the bakery shelf for your table at home." },
  { name: "Savoury Bakes", img: savoury, desc: "Flaky, savoury bakes for a satisfying snack any time of day." },
  { name: "Gift Hampers", img: hamper, desc: "Thoughtfully boxed treats to share with the people you love." },
];

const gallery = [
  { img: hero, alt: "Chocolate cake, croissants and breads on a wooden table", cls: "md:col-span-2 md:row-span-2" },
  { img: cupcakes, alt: "Caramel frosted cupcakes on a cake stand", cls: "" },
  { img: pastries, alt: "Assorted pastries and tarts on a plate", cls: "" },
  { img: about, alt: "Bakery display counter filled with cakes and pastries", cls: "md:row-span-2" },
  { img: breads, alt: "Basket of artisan breads", cls: "" },
  { img: brownies, alt: "Stack of chocolate brownies", cls: "" },
];

const features = [
  { icon: Cake, title: "Delicious Bakery Treats", text: "A variety of cakes, pastries, cookies and more to choose from." },
  { icon: Gift, title: "Options for Special Occasions", text: "Treats and cakes to help make your celebrations a little sweeter." },
  { icon: MessageCircle, title: "Convenient Customer Enquiries", text: "Reach out on WhatsApp to ask about products and availability." },
  { icon: Store, title: "A Welcoming Bakery Experience", text: "A friendly neighbourhood bakery in Punjabi Bagh, Delhi." },
];

function SectionHead({ eyebrow, title, text, center = true }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-medium leading-tight text-primary md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>}
    </Reveal>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="rounded bg-gold/20 px-2 py-0.5 text-sm italic text-muted-foreground">{children}</span>;
}

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-cocoa">
        <img src={hero} alt="Chocolate layer cake, croissants and artisan breads" width={1920} height={1088} className="absolute inset-0 h-full w-full animate-slow-zoom object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 md:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow animate-rise text-gold">Bakery · Punjabi Bagh, Delhi</p>
            <h1 className="mt-6 animate-rise text-6xl font-medium leading-[0.95] text-cream md:text-8xl" style={{ animationDelay: "120ms" }}>
              Freshly Baked.<br /><em className="text-gold">Made with Love.</em>
            </h1>
            <p className="mt-8 max-w-lg animate-rise text-lg leading-relaxed text-cream/85" style={{ animationDelay: "240ms" }}>
              Discover delightful cakes, freshly baked treats and irresistible flavours made for your sweetest moments.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-cocoa transition-all duration-300 hover:bg-cream">
                Explore Our Menu <ArrowRight className="h-4 w-4" />
              </a>
              <WhatsAppButton variant="light" className="bg-transparent text-cream ring-1 ring-cream/50 hover:bg-cream hover:text-cocoa" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="story" className="py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-8">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <SafeImage src={about} alt="Bakery display counter with cakes and pastries" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-cocoa px-6 py-5 text-cocoa-foreground shadow-soft md:block">
              <p className="font-display text-2xl italic">Baked to share</p>
            </div>
          </Reveal>
          <div>
            <SectionHead center={false} eyebrow="Our Story" title="A Little Sweetness in Every Moment" />
            <Reveal delay={100}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>At Bake Brothers, we believe the best moments are the ones shared — over a slice of cake, a box of cookies, or a warm pastry with someone you love.</p>
                <p>From everyday treats to the cakes that mark life's milestones, our bakery in Punjabi Bagh is here to add a little sweetness to your day.</p>
              </div>
              <a href="#menu" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-accent">
                See what we bake <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-secondary/50 py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Signature Menu" title="Something for Every Craving" text="Browse our categories and message us on WhatsApp for prices and availability." />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {menu.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-transform duration-500 hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <SafeImage src={m.img} alt={m.name} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold text-primary">{m.name}</h3>
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">Ask for Price</p>
                    <WhatsAppButton product={m.name} label="Enquire" variant="outline" className="mt-4 w-full px-4" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Celebration Cakes */}
      <section className="bg-cocoa py-24 text-cocoa-foreground md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
          <Reveal className="order-2 md:order-1">
            <p className="eyebrow text-gold">Celebration Cakes</p>
            <h2 className="mt-4 text-5xl font-medium leading-tight text-cream md:text-7xl">Made for Your <em className="text-gold">Special Moments</em></h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cocoa-foreground/80">
              Birthdays, anniversaries and celebrations of every kind. Message us to ask about designs, flavours and availability for your occasion.
            </p>
            <WhatsAppButton product="celebration cakes and designs" label="Enquire about a Cake" variant="light" className="mt-10" />
          </Reveal>
          <Reveal className="order-1 md:order-2" delay={120}>
            <div className="overflow-hidden rounded-[2rem]">
              <SafeImage src={cake} alt="Cream celebration cake with berries and gold leaf" loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Gallery" title="From Our Ovens" />
          <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={i} className={`group overflow-hidden rounded-3xl ${g.cls}`} delay={i * 60}>
                <SafeImage src={g.img} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Representative images — to be replaced with Bake Brothers' own photographs.</p>
        </div>
      </section>

      {/* Why visit */}
      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead eyebrow="Why Visit Us" title="Come Say Hello" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full rounded-3xl border bg-card p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-primary">
                    <f.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-primary">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <SectionHead center={false} eyebrow="Visit & Contact" title="Find Bake Brothers" />
            <Reveal delay={100}>
              <ul className="mt-10 space-y-6">
                <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 text-accent" /><div><p className="font-semibold text-primary">{site.name}</p><p className="text-muted-foreground">{site.streetAddress || <Placeholder>Street address to be confirmed</Placeholder>}</p><p className="text-muted-foreground">{site.area}</p></div></li>
                <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 text-accent" /><p className="text-muted-foreground">{site.phone ? <a href={`tel:${site.phone}`} className="hover:text-accent">{site.phone}</a> : <Placeholder>Phone number to be confirmed</Placeholder>}</p></li>
                <li className="flex gap-4"><Clock className="mt-1 h-5 w-5 text-accent" /><p className="text-muted-foreground">{site.hours || <Placeholder>Opening hours to be confirmed</Placeholder>}</p></li>
                <li className="flex gap-4"><Instagram className="mt-1 h-5 w-5 text-accent" /><p className="text-muted-foreground">{site.instagramUrl ? <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Follow us on Instagram</a> : <Placeholder>Instagram to be confirmed</Placeholder>}</p></li>
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <WhatsAppButton label="Enquire on WhatsApp" />
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  Open in Google Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl shadow-soft">
              <iframe title="Map of Punjabi Bagh, Delhi" src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} className="h-full min-h-[380px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cocoa py-14 text-cocoa-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between md:px-8">
          <div>
            <Logo light />
            <p className="mt-4 text-sm text-cocoa-foreground/70">{site.area}</p>
            {site.phone && <p className="text-sm text-cocoa-foreground/70">{site.phone}</p>}
          </div>
          <ul className="flex flex-wrap gap-6">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="text-sm transition-colors hover:text-gold">{l.label}</a></li>
            ))}
            {site.instagramUrl && <li><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gold">Instagram</a></li>}
          </ul>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-cocoa-foreground/15 px-5 pt-6 text-xs text-cocoa-foreground/60 md:px-8">
          © {new Date().getFullYear()} Bake Brothers. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

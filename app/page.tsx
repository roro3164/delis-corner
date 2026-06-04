import Image from "next/image";
import {
  DelisCarteIntroReveal,
  DelisFooter,
  DelisHeaderBar,
  DelisHeroIntro,
  DelisMenuCategory,
  DelisMotionShell,
  DelisReveal,
  DelisSection,
  DelisStagger,
  DelisStaggerItem,
} from "@/components/delis-motion";
import { DeliColumnsGallery } from "@/components/deli-columns-gallery";
import { FoodPhotoGrid } from "@/components/food-photo-grid";
import { deliGalleryItems } from "@/lib/delis-gallery";
import { MenuThumbnailList } from "@/components/menu-thumbnail-list";
import {
  showcaseEspresso,
  showcaseFrappe,
  showcaseFormulas,
  showcaseLattes,
  showcaseMatchaChai,
  showcaseOtherDrinks,
  showcaseSalads,
  showcaseSandwiches,
  showcaseSides,
} from "@/lib/dish-showcase";
import { aboutIntro, aboutPillars, mapsEmbedSrc, orderOnlineUrl, practical, preFooterCta, reserveByPhoneHref } from "@/lib/delis-site-content";
import { allergenNotice, drinkFootnote } from "@/lib/menu-data";

const deliCornerJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Deli's Corner",
  description:
    "Coffee shop et sandwicherie à Montpellier : cafés de spécialité, sandwichs, salades, boissons — 8 rue Saint-Paul, entre la rue des Teissiers et la rue Saint-Paul.",
  url: "https://deliscorner.com/",
  telephone: "+33422913774",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 rue Saint-Paul",
    addressLocality: "Montpellier",
    postalCode: "34000",
    addressCountry: "FR",
  },
  areaServed: { "@type": "City", name: "Montpellier" },
  servesCuisine: ["Coffee shop", "Sandwicherie", "Salades"],
  menu: "https://deliscorner.com/order",
} as const;

function HeroIntroBlock({ className = "", overlay = false }: { className?: string; overlay?: boolean }) {
  return (
    <div className={className}>
      <p
        className={
          overlay
            ? "font-[family-name:var(--font-dancing)] text-2xl text-[#c8ead7] drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)] sm:text-3xl"
            : "font-[family-name:var(--font-dancing)] text-2xl text-[var(--deli-green)] sm:text-3xl"
        }
      >
        Montpellier
      </p>
      <h1
        className={
          overlay
            ? "mt-3 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase leading-tight tracking-wide text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl"
            : "mt-3 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase leading-tight tracking-wide text-[var(--deli-ink)] sm:text-5xl lg:text-6xl"
        }
      >
        Deli&apos;s Corner
      </h1>
      <p
        className={
          overlay
            ? "mt-5 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]"
            : "mt-5 max-w-xl text-lg leading-relaxed text-[var(--deli-muted)]"
        }
      >
        Coffee shop premium et sandwicherie&nbsp;: cafés de spécialité, matcha frappé, chai latte, vanilla latte,
        sandwichs sur pain brioché — produits frais et recettes préparées chaque jour. Idéal pour un café à Montpellier
        centre.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={reserveByPhoneHref}
          className={
            overlay
              ? "inline-flex items-center justify-center rounded-full border-2 border-white/90 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-md backdrop-blur-sm transition hover:bg-white/20"
              : "inline-flex items-center justify-center rounded-full border-2 border-[var(--deli-green)] bg-white px-6 py-3 text-sm font-semibold text-[var(--deli-green)] transition hover:bg-[var(--deli-cream-deep)]"
          }
        >
          Réserver
        </a>
        <a
          href={orderOnlineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[var(--deli-green)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--deli-green-dark)]"
        >
          Commander
        </a>
      </div>
    </div>
  );
}

/** Bloc de sous-catégorie (style menu web : carte claire + en-tête avec repère). */
function MenuPanel({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[var(--deli-green)]/10 bg-white p-4 shadow-sm sm:p-6 ${className}`}
    >
      <div className="mb-4 flex gap-3 sm:mb-5 sm:items-start">
        <span
          className="mt-0.5 hidden h-8 w-1 shrink-0 rounded-full bg-[var(--deli-green)]/85 sm:block"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-[family-name:var(--font-oswald)] text-base font-semibold uppercase tracking-[0.14em] text-[var(--deli-ink)] sm:text-lg">
            {title}
          </h3>
          {subtitle ? <p className="mt-1 text-sm text-[var(--deli-muted)]">{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </div>
  );
}

function SectionBand({ id, label }: { id?: string; label: string }) {
  return (
    <div id={id} className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
      <span className="h-px w-10 sm:w-14" style={{ background: "linear-gradient(90deg, transparent, var(--deli-green))" }} />
      <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--deli-green)]/90 sm:text-xs">
        {label}
      </p>
      <span
        className="h-px w-10 sm:w-14"
        style={{ background: "linear-gradient(270deg, transparent, var(--deli-green))" }}
      />
    </div>
  );
}

const DELIS_HEADER_TAGLINE = "coffee shop premium · sandwicherie · Montpellier";

function DelisHeaderCtas() {
  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
      <a
        href={reserveByPhoneHref}
        className="inline-flex rounded-full border-2 border-[var(--deli-green)] bg-white px-3 py-2 text-xs font-semibold text-[var(--deli-green)] transition hover:bg-[var(--deli-cream-deep)] sm:px-4 sm:text-sm"
      >
        Réserver
      </a>
      <a
        href={orderOnlineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[var(--deli-green)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--deli-green-dark)] sm:px-5"
      >
        Commander
      </a>
    </div>
  );
}

export default function DelisCornerPage() {
  return (
    <DelisMotionShell>
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deliCornerJsonLd) }}
      />
      <header className="sticky top-0 z-50 border-b border-[var(--deli-green)]/10 bg-[var(--deli-cream)]/90 backdrop-blur-md">
        <DelisHeaderBar className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-2.5 lg:hidden">
            <div className="flex items-center justify-between gap-3">
              <a href="#top" className="shrink-0 transition-opacity hover:opacity-90">
                <Image
                  src="/logo.webp"
                  alt="Deli&apos;s Corner"
                  width={320}
                  height={96}
                  priority
                  className="h-14 w-auto object-contain object-left sm:h-[3.75rem]"
                />
              </a>
              <DelisHeaderCtas />
            </div>
            <p className="text-pretty font-[family-name:var(--font-dancing)] text-[0.8125rem] leading-snug text-[var(--deli-muted)] sm:text-sm">
              {DELIS_HEADER_TAGLINE}
            </p>
          </div>

          <div className="hidden items-center justify-between gap-4 lg:flex">
            <a href="#top" className="group flex min-w-0 items-center gap-4 leading-none">
              <Image
                src="/logo.webp"
                alt="Deli&apos;s Corner"
                width={320}
                height={96}
                className="h-14 w-auto shrink-0 object-contain object-left transition-opacity group-hover:opacity-90 xl:h-16"
              />
              <span className="max-w-[14rem] text-pretty font-[family-name:var(--font-dancing)] text-[0.9375rem] leading-snug text-[var(--deli-muted)]">
                {DELIS_HEADER_TAGLINE}
              </span>
            </a>
            <nav className="flex items-center gap-5 text-sm font-medium text-[var(--deli-ink)] md:gap-6">
              <a className="transition hover:text-[var(--deli-green)]" href="#boissons">
                Boissons
              </a>
              <a className="transition hover:text-[var(--deli-green)]" href="#manger">
                À manger
              </a>
              <a className="transition hover:text-[var(--deli-green)]" href="#galerie">
                Galerie
              </a>
              <a className="transition hover:text-[var(--deli-green)]" href="#a-propos">
                À propos
              </a>
              <a className="transition hover:text-[var(--deli-green)]" href="#infos">
                Infos
              </a>
            </nav>
            <DelisHeaderCtas />
          </div>
        </DelisHeaderBar>
      </header>

      <main id="top">
        <section
          aria-label="Accueil"
          className="relative isolate min-h-[min(88svh,44rem)] overflow-hidden border-b border-[var(--deli-green)]/10"
        >
          <Image
            src="/images/site/hero-main.webp"
            alt="Deli&apos;s Corner — visuel d&apos;accueil"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0f1f18]/90 via-[#0f1f18]/55 to-[#0f1f18]/25 sm:bg-gradient-to-r sm:from-[#0f1f18]/88 sm:via-[#1a2e24]/50 sm:to-transparent"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex min-h-[min(88svh,44rem)] max-w-6xl flex-col justify-end px-6 pb-12 pt-16 max-sm:justify-center max-sm:pb-10 max-sm:pt-20 sm:justify-center sm:px-8 sm:py-20 lg:px-10">
            <DelisHeroIntro className="w-full max-w-xl max-sm:-translate-y-6 pb-2 sm:translate-y-0 sm:pb-0">
              <HeroIntroBlock overlay />
            </DelisHeroIntro>
          </div>
        </section>

        <DelisSection
          id="a-propos"
          className="scroll-mt-24 border-b border-[var(--deli-green)]/10 bg-[var(--deli-cream)] px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <SectionBand label="À propos" />
            <DelisStagger className="mt-2 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
              <DelisStaggerItem slide="left" className="order-2 min-w-0 lg:order-1">
              <div className="space-y-6 text-center lg:text-left">
                <p className="font-[family-name:var(--font-dancing)] text-2xl text-[var(--deli-green)]">
                  {aboutIntro.kicker}
                </p>
                <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase tracking-wide text-[var(--deli-ink)] sm:text-4xl">
                  {aboutIntro.title}
                </h2>
                <p className="text-pretty text-lg leading-relaxed text-[var(--deli-muted)]">{aboutIntro.lead}</p>
              </div>
              </DelisStaggerItem>
              <DelisStaggerItem slide="right" className="order-1 min-w-0 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--deli-green)]/15 bg-stone-200 shadow-[0_12px_40px_-12px_rgba(27,88,64,0.25)]">
                  <Image
                    src="/images/site/about-main.webp"
                    alt="Illustration Deli&apos;s Corner — ambiance du lieu"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                </div>
              </DelisStaggerItem>
            </DelisStagger>
            <DelisStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {aboutPillars.map((p) => (
                <DelisStaggerItem key={p.title} className="min-w-0">
                  <div className="flex h-full flex-col rounded-2xl border border-[var(--deli-green)]/10 bg-white p-5 shadow-sm ring-1 ring-[var(--deli-green)]/5 sm:p-6">
                  <h3 className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--deli-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-[var(--deli-muted)]">{p.text}</p>
                  <span className="mt-4 h-0.5 w-10 rounded-full bg-[var(--deli-green)]/40" aria-hidden />
                  </div>
                </DelisStaggerItem>
              ))}
            </DelisStagger>
          </div>
        </DelisSection>

        <div className="bg-white">
          <section id="carte" className="scroll-mt-24 scroll-smooth px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <DelisCarteIntroReveal className="mx-auto max-w-2xl text-center">
                <p className="font-[family-name:var(--font-dancing)] text-2xl text-[var(--deli-green)]">La carte</p>
                <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase tracking-wide text-[var(--deli-ink)] sm:text-4xl">
                  Boissons & assiettes
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--deli-muted)] sm:text-base">{drinkFootnote}</p>
                <nav
                  className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                  aria-label="Aller aux rubriques de la carte"
                >
                  <a
                    href="#boissons"
                    className="rounded-full border border-[var(--deli-green)]/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--deli-green)] shadow-sm transition hover:border-[var(--deli-green)]/45 hover:bg-[var(--deli-cream)] sm:text-[0.8rem]"
                  >
                    Cafés & boissons
                  </a>
                  <a
                    href="#manger"
                    className="rounded-full border border-[var(--deli-green)]/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--deli-green)] shadow-sm transition hover:border-[var(--deli-green)]/45 hover:bg-[var(--deli-cream)] sm:text-[0.8rem]"
                  >
                    Plats & formules
                  </a>
                </nav>
              </DelisCarteIntroReveal>

              <div className="mt-12 flex flex-col gap-14 sm:gap-16">
                <div
                  id="boissons"
                  className="scroll-mt-28 rounded-[1.75rem] border border-[var(--deli-green)]/12 bg-[var(--deli-flyer-paper)]/85 p-5 shadow-[0_8px_40px_-12px_rgba(27,88,64,0.14)] ring-1 ring-[var(--deli-green)]/5 sm:p-7 md:p-9"
                >
                  <SectionBand label="Cafés & boissons" />
                  <div className="mt-2 space-y-8 sm:space-y-9">
                    <DelisMenuCategory>
                      <MenuPanel title="Espresso & cacao" subtitle="Extra shot sur demande.">
                        <MenuThumbnailList items={showcaseEspresso} />
                      </MenuPanel>
                    </DelisMenuCategory>
                    <DelisMenuCategory>
                      <MenuPanel title="Lattes & mocha">
                        <MenuThumbnailList items={showcaseLattes} />
                      </MenuPanel>
                    </DelisMenuCategory>
                    <div className="flex flex-col gap-6 sm:gap-7">
                      <DelisMenuCategory>
                        <MenuPanel title="Matcha & chai">
                          <MenuThumbnailList items={showcaseMatchaChai} />
                        </MenuPanel>
                      </DelisMenuCategory>
                      <DelisMenuCategory>
                        <MenuPanel title="Frappés">
                          <MenuThumbnailList items={showcaseFrappe} />
                        </MenuPanel>
                      </DelisMenuCategory>
                    </div>
                    <DelisMenuCategory>
                      <MenuPanel title="Autres" subtitle="Kombucha, options et suppléments.">
                        <MenuThumbnailList
                          items={showcaseOtherDrinks}
                          gridClassName="grid-cols-2 min-[480px]:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4"
                        />
                      </MenuPanel>
                    </DelisMenuCategory>
                  </div>
                </div>

                <div id="manger" className="scroll-mt-28 space-y-8 sm:space-y-10">
                  <SectionBand label="Plats & formules" />
                  <div className="flex flex-col gap-8 sm:gap-9">
                    <DelisMenuCategory>
                      <MenuPanel
                        title="Sandwichs"
                        subtitle="Préparations maison — pain et garnitures travaillés chaque jour."
                      >
                        <FoodPhotoGrid items={showcaseSandwiches} />
                      </MenuPanel>
                    </DelisMenuCategory>
                    <DelisMenuCategory>
                      <MenuPanel title="Formules" subtitle="Idéal pour un déj complet.">
                        <MenuThumbnailList
                          items={showcaseFormulas}
                          gridClassName="grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
                        />
                      </MenuPanel>
                    </DelisMenuCategory>
                    <DelisMenuCategory>
                      <MenuPanel title="Salades & bowls" subtitle="Légumes frais, vinaigrettes maison.">
                        <FoodPhotoGrid
                          items={showcaseSalads}
                          gridClassName="grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 min-[500px]:gap-5 lg:grid-cols-2 lg:gap-6"
                        />
                      </MenuPanel>
                    </DelisMenuCategory>
                    <DelisMenuCategory>
                      <MenuPanel title="Sides & accompagnements">
                        <MenuThumbnailList items={showcaseSides} />
                      </MenuPanel>
                    </DelisMenuCategory>
                  </div>
                </div>
              </div>

              <p className="mx-auto mt-12 max-w-3xl border-t border-[var(--deli-green)]/10 pt-8 text-center text-xs leading-relaxed text-[var(--deli-muted)] sm:mt-14 sm:pt-10 sm:text-sm">
                {allergenNotice}
              </p>
            </div>
          </section>

          <DelisSection
            id="galerie"
            className="scroll-mt-24 border-t border-[var(--deli-green)]/10 bg-[var(--deli-flyer-paper)]/50 px-4 py-14 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <DelisReveal className="text-center">
                <p className="font-[family-name:var(--font-dancing)] text-2xl text-[var(--deli-green)] sm:text-3xl">
                  Galerie
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase tracking-wide text-[var(--deli-ink)] sm:text-4xl">
                  Le restaurant en photos
                </h2>
              </DelisReveal>
              <DelisReveal className="mt-10 md:mt-12" delay={0.08}>
                <DeliColumnsGallery images={deliGalleryItems} columns={3} />
              </DelisReveal>
            </div>
          </DelisSection>

          <DelisSection
            id="infos"
            className="scroll-mt-24 border-t border-[var(--deli-green)]/10 bg-[var(--deli-cream)] px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-5xl">
              <DelisReveal className="text-center">
                <p className="font-[family-name:var(--font-dancing)] text-2xl text-[var(--deli-green)] sm:text-3xl">
                  Infos pratiques
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase tracking-wide text-[var(--deli-ink)] sm:text-4xl">
                  Nous trouver
                </h2>
                <p className="mt-3 text-sm text-[var(--deli-muted)] sm:text-base">
                  Deli’s Corner — 8 rue Saint-Paul (entre la rue des Teissiers et Saint-Paul), Montpellier
                </p>
              </DelisReveal>

              <DelisStagger className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-3 lg:items-stretch">
                <DelisStaggerItem className="min-w-0">
                <div className="flex h-full flex-col rounded-2xl border border-[var(--deli-green)]/12 bg-white p-6 shadow-sm sm:p-7">
                  <h3 className="border-b border-[var(--deli-green)]/10 pb-3 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--deli-ink)]">
                    {practical.hours.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--deli-ink)]">
                    {practical.hours.lines.map((line) => (
                      <li key={line} className="border-l-2 border-[var(--deli-green)]/25 pl-3">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                </DelisStaggerItem>

                <DelisStaggerItem className="min-w-0">
                <div className="flex h-full flex-col rounded-2xl border border-[var(--deli-green)]/12 bg-white p-6 shadow-sm sm:p-7">
                  <h3 className="border-b border-[var(--deli-green)]/10 pb-3 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--deli-ink)]">
                    {practical.address.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-[var(--deli-ink)]">
                    {practical.address.lines[0]}
                    <br />
                    <span className="text-[var(--deli-muted)]">{practical.address.lines[1]}</span>
                    <br />
                    <span className="text-sm text-[var(--deli-muted)]">{practical.address.lines[2]}</span>
                  </p>
                  <a
                    href={practical.contact.lines[2]!.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full border-2 border-[var(--deli-green)] bg-[var(--deli-cream)]/50 px-4 py-2.5 text-sm font-semibold text-[var(--deli-green)] transition hover:bg-[var(--deli-cream)]"
                  >
                    Itinéraire
                  </a>
                </div>
                </DelisStaggerItem>

                <DelisStaggerItem className="min-w-0">
                <div className="flex h-full flex-col rounded-2xl border border-[var(--deli-green)]/12 bg-white p-6 shadow-sm sm:p-7">
                  <h3 className="border-b border-[var(--deli-green)]/10 pb-3 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--deli-ink)]">
                    {practical.contact.title}
                  </h3>
                  <div className="mt-5 space-y-4">
                    <a
                      href={practical.contact.lines[0]!.href}
                      className="block text-center text-2xl font-semibold tabular-nums text-[var(--deli-green)] transition hover:text-[var(--deli-green-dark)] sm:text-3xl"
                    >
                      {practical.contact.lines[0]!.value}
                    </a>
                    <a
                      href={practical.contact.lines[1]!.href}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[var(--deli-green)] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--deli-green-dark)]"
                    >
                      Commander en ligne
                    </a>
                    <p className="text-center text-xs text-[var(--deli-muted)]">
                      <a
                        href="https://deliscorner.com"
                        className="text-[var(--deli-ink)] underline decoration-[var(--deli-green)]/30 underline-offset-2 hover:decoration-[var(--deli-green)]"
                      >
                        deliscorner.com
                      </a>
                    </p>
                  </div>
                </div>
                </DelisStaggerItem>
              </DelisStagger>

              <DelisReveal className="mt-10 sm:mt-12">
              <figure className="overflow-hidden rounded-2xl border border-[var(--deli-green)]/12 bg-[var(--deli-cream-deep)]/30 shadow-sm ring-1 ring-[var(--deli-green)]/5">
                <iframe
                  title="Carte — Deli&apos;s Corner, Montpellier"
                  src={mapsEmbedSrc}
                  className="aspect-[4/3] h-[min(52vw,380px)] min-h-[260px] w-full border-0 sm:min-h-[300px] lg:aspect-[21/9] lg:min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--deli-green)]/10 bg-white/90 px-4 py-3 text-xs text-[var(--deli-muted)] sm:text-sm">
                  <span>Plans interactifs · Google Maps</span>
                  <a
                    href={practical.contact.lines[2]!.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--deli-green)] underline-offset-2 transition hover:text-[var(--deli-green-dark)] hover:underline"
                  >
                    Ouvrir la fiche
                  </a>
                </figcaption>
              </figure>
              </DelisReveal>
            </div>
          </DelisSection>

          <section
            id="venez"
            aria-label="Invitation à venir sur place"
            className="relative isolate min-h-[min(70svh,36rem)] scroll-mt-24"
          >
            <Image
              src="/images/site/footer-banner.webp"
              alt="Devanture et ardoise Deli&apos;s Corner sur le trottoir — cadre de pierre et verdure"
              fill
              className="object-cover object-[center_40%]"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0f1f18]/92 via-[#1a2e24]/45 to-transparent"
              aria-hidden
            />
            <DelisReveal className="relative z-10 mx-auto flex min-h-[min(70svh,36rem)] max-w-3xl flex-col justify-end px-4 pb-14 pt-24 text-center sm:px-6 sm:pb-16">
              <p className="font-[family-name:var(--font-dancing)] text-2xl text-white/95 sm:text-3xl">
                Au fil de la journée
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                {preFooterCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
                {preFooterCta.lead}
              </p>
              <DelisStagger className="mt-8 flex flex-wrap items-center justify-center gap-3" stagger={0.12}>
                <DelisStaggerItem>
                <a
                  href="#carte"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--deli-green)] shadow-lg transition hover:bg-[var(--deli-cream)]"
                >
                  Parcourir la carte
                </a>
                </DelisStaggerItem>
                <DelisStaggerItem>
                <a
                  href="#infos"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/90 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Horaires & accès
                </a>
                </DelisStaggerItem>
              </DelisStagger>
            </DelisReveal>
          </section>

          <DelisFooter className="border-t border-[var(--deli-green)]/15 bg-[var(--deli-green)] px-4 py-10 text-white sm:px-6">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-[family-name:var(--font-oswald)] text-lg font-semibold uppercase tracking-[0.2em]">
                  Deli&apos;s Corner
                </p>
                <p className="mt-1 text-sm text-white/80">Coffee shop premium · sandwicherie</p>
                <nav className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/75" aria-label="Pied de page">
                  <a className="transition hover:text-white" href="#carte">
                    La carte
                  </a>
                  <a className="transition hover:text-white" href="#galerie">
                    Galerie
                  </a>
                  <a className="transition hover:text-white" href="#a-propos">
                    À propos
                  </a>
                  <a className="transition hover:text-white" href="#infos">
                    Infos
                  </a>
                  <a className="transition hover:text-white" href="#venez">
                    Le lieu
                  </a>
                  <a className="transition hover:text-white" href="/mentions-legales">
                    Mentions légales
                  </a>
                </nav>
              </div>
              <p className="text-sm text-white/70 sm:pt-1">© {new Date().getFullYear()} Deli&apos;s Corner</p>
            </div>
            <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-center gap-2 border-t border-white/15 pt-6 text-center text-sm text-white/70">
              <span className="block">Réalisation —</span>
              <a
                href="https://romaindesigncode.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center opacity-95 transition-opacity hover:opacity-100"
              >
                <Image
                  src="/logo-romain-design-code.webp"
                  alt="Romain Design Code"
                  width={140}
                  height={41}
                  className="h-8 w-auto sm:h-9"
                />
              </a>
            </div>
          </DelisFooter>
        </div>
      </main>
    </div>
    </DelisMotionShell>
  );
}

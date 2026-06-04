import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Deli's Corner",
  description: "Mentions légales du site Deli's Corner (LE COIN ST ROCH SAS, Montpellier).",
};

type LegalSection = { heading: string; body: string };

/** Entité juridique commune Deli's Corner / Le Coin Saint-Roch (LE COIN ST ROCH SAS). */
const LEGAL_SECTIONS: ReadonlyArray<LegalSection> = [
  {
    heading: "Éditeur du site",
    body:
      "LE COIN ST ROCH — Société par actions simplifiée (SAS) au capital de 1 000 €. Nom commercial : Deli's Corner. Siège social : 8 Rue Saint-Paul, 34000 Montpellier. Immatriculée au RCS de Montpellier sous le numéro 949 633 077 (SIRET du siège : 949 633 077 00019). TVA intracommunautaire : FR28 949 633 077. Directeur de la publication : Hakim Oldman, Président.",
  },
  {
    heading: "Contact",
    body: "Téléphone : 04 22 91 37 74.",
  },
  {
    heading: "Hébergement",
    body:
      "Le site est hébergé par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France — Téléphone : 1007 (ou +33 9 72 10 10 07).",
  },
  {
    heading: "Propriété intellectuelle",
    body:
      "L'ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) est la propriété de LE COIN ST ROCH SAS, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.",
  },
  {
    heading: "Données personnelles",
    body:
      "Les informations transmises via les formulaires du site sont utilisées uniquement pour répondre à votre demande et ne sont pas cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant au numéro indiqué ci-dessus.",
  },
];

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[var(--deli-cream)] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--deli-green)] transition hover:text-[var(--deli-green-dark)]"
        >
          ← Retour au site
        </Link>
        <h1 className="mt-6 font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase tracking-wide text-[var(--deli-ink)] sm:text-3xl">
          Mentions légales
        </h1>
        <div className="mt-8 space-y-6">
          {LEGAL_SECTIONS.map((s) => (
            <section key={s.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--deli-green)]">
                {s.heading}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--deli-muted)]">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

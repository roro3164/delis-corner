import Image from "next/image";
import type { DishWithPhoto } from "@/lib/dish-showcase";
import { cn } from "@/lib/cn";

type Props = {
  item: DishWithPhoto;
  /**
   * `drink` : tuile compacte (2–4 colonnes), légendes courtes.
   * `dish` : plat avec plus d’espace pour la description (sandwichs, salades).
   */
  variant: "drink" | "dish";
  className?: string;
};

/**
 * Carte produit “marketplace” : visuel seul en haut, texte + prix en dessous
 * (pas d’overlay type Nina — proche des catalogues de livraison actuels).
 */
export function DeliProductCard({ item, variant, className }: Props) {
  const isDrink = variant === "drink";

  return (
    <article
      className={cn(
        "group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-[var(--deli-green)]/10 bg-white",
        "shadow-sm ring-1 ring-[var(--deli-green)]/5",
        "transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-[var(--deli-green)]/12",
        className,
      )}
    >
      <div
        className={cn("relative w-full overflow-hidden bg-[#e3e8e2]", isDrink ? "aspect-[4/3]" : "aspect-[4/3] sm:aspect-[3/2]")}
      >
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          sizes={isDrink ? "(max-width: 640px) 42vw, 220px" : "(max-width: 640px) 100vw, 360px"}
          className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col border-t border-[var(--deli-green)]/8 bg-gradient-to-b from-white to-[var(--deli-flyer-paper)]/60",
          isDrink ? "p-2.5 sm:p-3" : "p-3.5 sm:p-4",
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <h3
            className={cn(
              "min-w-0 flex-1 font-[family-name:var(--font-oswald)] font-semibold uppercase leading-snug text-[var(--deli-ink)]",
              isDrink ? "text-[0.7rem] tracking-wide sm:text-xs" : "text-sm tracking-[0.06em] sm:text-base",
            )}
          >
            {item.name}
          </h3>
          {item.price ? (
            <span
              className={cn(
                "shrink-0 rounded-md bg-[var(--deli-green)]/8 px-1.5 font-[family-name:var(--font-oswald)] font-semibold tabular-nums text-[var(--deli-green)]",
                isDrink ? "py-0.5 text-xs" : "py-0.5 text-sm sm:text-base",
              )}
              style={{ fontFeatureSettings: '"tnum"' }}
            >
              {item.price}
            </span>
          ) : null}
        </div>
        {item.detail ? (
          <p
            className={cn(
              "text-pretty text-[var(--deli-muted)]",
              isDrink ? "mt-1.5 text-[11px] leading-snug sm:text-xs" : "mt-2 text-sm leading-relaxed sm:text-[0.9375rem]",
            )}
          >
            {item.detail}
          </p>
        ) : null}
      </div>
    </article>
  );
}

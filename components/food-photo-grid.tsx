import type { DishWithPhoto } from "@/lib/dish-showcase";
import { DeliProductCard } from "@/components/deli-product-card";
import { cn } from "@/lib/cn";

type Props = {
  title?: string;
  subtitle?: string;
  items: DishWithPhoto[];
  gridClassName?: string;
};

/**
 * Grille de plats (sandwichs, salades) : cartes type vitrine e-commerce
 * (photo + bloc texte en dessous), pas d’image carrée avec overlay.
 */
export function FoodPhotoGrid({ title, subtitle, items, gridClassName }: Props) {
  return (
    <div>
      {title ? (
        <div className="mb-5 text-center sm:mb-6">
          <p className="font-[family-name:var(--font-dancing)] text-2xl text-[var(--deli-green)]">{title}</p>
          {subtitle ? <p className="mt-2 text-sm text-[var(--deli-muted)]">{subtitle}</p> : null}
        </div>
      ) : null}
      <ul
        className={cn(
          "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6",
          gridClassName,
        )}
      >
        {items.map((dish, index) => (
          <li key={`${dish.name}-${index}`} className="min-w-0">
            <DeliProductCard item={dish} variant="dish" />
          </li>
        ))}
      </ul>
    </div>
  );
}

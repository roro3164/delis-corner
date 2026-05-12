import type { DishWithPhoto } from "@/lib/dish-showcase";
import { DeliProductCard } from "@/components/deli-product-card";
import { cn } from "@/lib/cn";

type Props = {
  items: DishWithPhoto[];
  /** Classes pour la grille (défaut : 2–3 colonnes selon point de rupture). */
  gridClassName?: string;
};

/**
 * Boissons, formules, sides : mêmes cartes “produit” en format compact,
 * inspirées des grilles de cafés / apps de commande.
 */
export function MenuThumbnailList({ items, gridClassName }: Props) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-3 min-[480px]:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4",
        gridClassName,
      )}
    >
      {items.map((dish) => (
        <li key={dish.name} className="min-w-0">
          <DeliProductCard item={dish} variant="drink" />
        </li>
      ))}
    </ul>
  );
}

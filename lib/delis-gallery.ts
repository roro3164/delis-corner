const GALLERY_N = 34;

/** Numéros de fichiers `deli-galerie-NN.png` à ne pas afficher dans la galerie du site. */
const EXCLUDED_GALLERY_NUMBERS = new Set([2, 12, 31]);

export type DeliGallerySlide = {
  src: string;
  alt: string;
};

function pad2(n: number) {
  return n < 10 ? `0${n}` : String(n);
}

/**
 * Visuels dans `public/images/galerie/deli-galerie-01.png` … jusqu’à `GALLERY_N`.
 * Les entrées listées dans `EXCLUDED_GALLERY_NUMBERS` sont ignorées.
 */
export const deliGalleryItems: DeliGallerySlide[] = Array.from({ length: GALLERY_N }, (_, i) => {
  const n = i + 1;
  if (EXCLUDED_GALLERY_NUMBERS.has(n)) {
    return null;
  }
  return {
    src: `/images/galerie/deli-galerie-${pad2(n)}.png`,
    alt: `Deli’s Corner, moment du lieu et des plats — photo ${n}`,
  };
}).filter((item): item is DeliGallerySlide => item !== null);

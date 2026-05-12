"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type DeliColumnsGalleryImage = {
  src?: string;
  alt: string;
  title?: string;
  video?: string;
};

type Props = {
  images: DeliColumnsGalleryImage[];
  columns?: 2 | 3 | 4;
};

/**
 * Galerie en colonnes verticales (défilement CSS, sans Framer).
 */
export function DeliColumnsGallery({ images, columns = 3 }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const requestedColumns = Math.min(columns || 3, 4);
  const numColumns = isMobile ? 2 : requestedColumns;
  const [pausedColumns, setPausedColumns] = useState<Set<number>>(new Set());
  const [animatingOnClick, setAnimatingOnClick] = useState<Set<number>>(new Set());

  const columnsData: DeliColumnsGalleryImage[][] = (() => {
    const cols: DeliColumnsGalleryImage[][] = Array.from({ length: numColumns }, () => []);
    const n = images.length;
    if (n === 0) return cols;
    const baseCount = Math.floor(n / numColumns);
    const remainder = n % numColumns;
    let start = 0;
    for (let c = 0; c < numColumns; c++) {
      const count = baseCount + (c < remainder ? 1 : 0);
      cols[c] = images.slice(start, start + count);
      start += count;
    }
    return cols;
  })();

  const speeds = [80, 100, 90, 110];
  const directions = [true, false, true, false];

  const handleColumnHover = (colIndex: number, isHovering: boolean) => {
    setPausedColumns((prev) => {
      const next = new Set(prev);
      if (isHovering) next.add(colIndex);
      else next.delete(colIndex);
      return next;
    });
  };

  const handleColumnClick = (colIndex: number) => {
    if (!isMobile) return;
    setAnimatingOnClick((prev) => new Set(prev).add(colIndex));
    setTimeout(() => {
      setAnimatingOnClick((prev) => {
        const n = new Set(prev);
        n.delete(colIndex);
        return n;
      });
    }, 3000);
  };

  return (
    <div className="deli-columns-gallery relative">
      <div className="relative z-10">
        <div
          className={cn("relative h-[560px] md:h-[760px]", isMobile ? "overflow-x-hidden" : "overflow-hidden")}
          style={
            isMobile
              ? undefined
              : {
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                }
          }
        >
          <div className="flex h-full gap-3 md:gap-5">
            {columnsData.map((columnImages, colIndex) => {
              const speed = speeds[colIndex % speeds.length]!;
              const isUp = directions[colIndex % directions.length]!;
              const isPaused = pausedColumns.has(colIndex);
              const isAnimatingOnClick = animatingOnClick.has(colIndex);

              return (
                <div
                  key={colIndex}
                  className={cn(
                    "group/column h-full min-h-0 min-w-0 flex-1",
                    isMobile ? "cursor-pointer overflow-y-auto overflow-x-hidden" : "overflow-hidden",
                  )}
                  onMouseEnter={() => !isMobile && handleColumnHover(colIndex, true)}
                  onMouseLeave={() => !isMobile && handleColumnHover(colIndex, false)}
                  onClick={() => handleColumnClick(colIndex)}
                  role={isMobile ? "button" : undefined}
                  aria-label={isMobile ? "Animer la colonne" : undefined}
                  tabIndex={isMobile ? 0 : undefined}
                  onKeyDown={isMobile ? (e) => e.key === "Enter" && handleColumnClick(colIndex) : undefined}
                >
                  <div
                    className={cn(
                      "deli-col-track flex flex-col gap-3 md:gap-5",
                      !isMobile && (isUp ? "deli-col-animate-up" : "deli-col-animate-down"),
                      !isMobile && isPaused && "deli-col-paused",
                      isMobile && isAnimatingOnClick && (isUp ? "deli-col-up-once" : "deli-col-down-once"),
                      isMobile && !isAnimatingOnClick && "deli-col-static",
                    )}
                    style={{
                      animationDuration: isMobile && isAnimatingOnClick ? "3s" : `${speed}s`,
                      animationDelay: !isMobile ? `${colIndex * 0.8}s` : undefined,
                    }}
                  >
                    {(isMobile && !isAnimatingOnClick ? columnImages : [...columnImages, ...columnImages]).map(
                      (item, index) => (
                        <div
                          key={`${colIndex}-${index}`}
                          className="group relative aspect-[3/2] w-full min-h-[180px] flex-shrink-0 sm:min-h-[200px]"
                        >
                          {item.video ? (
                            <video
                              src={item.video}
                              className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                              autoPlay
                              loop
                              muted
                              playsInline
                              disableRemotePlayback
                            />
                          ) : item.src ? (
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 50vw, 30vw"
                            />
                          ) : null}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

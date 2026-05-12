"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 639px)";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/** Sous `sm` (mobile) : animations plus légères pour le scroll tactile. */
export function useDeliCompactViewport() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

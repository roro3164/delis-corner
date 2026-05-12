/** `whileInView` — déclenchement plus tolérant (mobile / petits écrans) pour éviter blocs restés à opacity 0. */
export const deliWhileInViewViewport = {
  once: true,
  amount: 0.08,
  margin: "0px 0px 72px 0px",
} as const;

export type DeliScrollTriggerViewport = typeof deliWhileInViewViewport;

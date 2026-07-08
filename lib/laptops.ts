/**
 * Laptops & Computers for Sale — gallery data.
 *
 * IMPORTANT (honesty rule): only what is visible in the photos is described.
 * No specifications, conditions, prices or warranty claims are invented.
 *
 * TODO(owner): to advertise real details for a unit, fill in the optional
 * `specs` and `price` fields below — they will automatically appear on the
 * laptop's card. Example:
 *   specs: "Intel Core i7 · 16GB RAM · 512GB SSD",
 *   price: "₦450,000",
 */

export type Laptop = {
  /** Neutral, visible-brand-only label (no invented model claims). */
  name: string;
  image: string;
  alt: string;
  specs?: string; // TODO(owner): add real specs per unit when confirmed
  price?: string; // TODO(owner): add real price per unit when confirmed
};

export const LAPTOPS: Laptop[] = [
  {
    name: "Dell laptop",
    image: "/images/laptops/dell-laptop-open-display.jpg",
    alt: "Slim Dell laptop open on the shop desk showing the Windows lock screen",
  },
  {
    name: "Dell laptop",
    image: "/images/laptops/dell-laptop-lock-screen.jpg",
    alt: "Dell laptop with backlit keyboard open on the shop desk, screen still in protective wrap",
  },
  {
    name: "Dell laptop",
    image: "/images/laptops/dell-laptop-open-shop-desk.jpg",
    alt: "Dell laptop open on the shop desk with its screen in protective wrapping",
  },
  {
    name: "Dell laptop (white lid)",
    image: "/images/laptops/dell-white-lid-closed.jpg",
    alt: "White-lidded Dell laptop closed on the shop desk, still in protective wrap",
  },
  {
    name: "Dell laptop (white lid)",
    image: "/images/laptops/dell-white-lid-closed-2.jpg",
    alt: "White-lidded Dell laptop on the sales desk with other laptops and a POS terminal behind it",
  },
  {
    name: "Lenovo convertible netbooks",
    image: "/images/laptops/lenovo-convertibles-pair.jpg",
    alt: "Two Lenovo convertible netbooks displayed together, one powered on",
  },
  {
    name: "Lenovo netbook",
    image: "/images/laptops/lenovo-netbook-keyboard.jpg",
    alt: "Lenovo netbook held up to show its keyboard and touchpad",
  },
  {
    name: "Lenovo netbook",
    image: "/images/laptops/lenovo-netbook-welcome.jpg",
    alt: "Lenovo netbook powered on at the Windows welcome screen",
  },
  {
    name: "Lenovo convertible (tablet mode)",
    image: "/images/laptops/lenovo-tablet-mode.jpg",
    alt: "Lenovo convertible folded into tablet mode showing the Windows desktop",
  },
  {
    name: "HP laptop",
    image: "/images/laptops/hp-probook-display.jpg",
    alt: "Silver HP laptop open on a display shelf showing the Windows start menu",
  },
];

/** Photos that show bulk/stock availability (used in the bulk-enquiry band). */
export const STOCK_PHOTOS = [
  {
    image: "/images/laptops/laptop-stock-stacks.jpg",
    alt: "Stacks of laptops of various brands piled in the stock room",
  },
  {
    image: "/images/laptops/parts-stock-carton.jpg",
    alt: "Carton packed with rows of new computer stock",
  },
];

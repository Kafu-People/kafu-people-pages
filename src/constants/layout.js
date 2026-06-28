/** Fixed navbar offset (h-16 / 72px bar with logo h-14/h-16). */
export const HEADER_SPACER_CLASS = "h-[64px] sm:h-[72px]";

/** Smooth scroll-state transitions for the fixed header / navbar. */
export const NAV_SCROLL_TRANSITION_CLASS =
  "transition-[background-color,border-color,box-shadow,color] duration-300 ease-in-out";

/** Pull page heroes flush under the fixed header (pair with HEADER_SPACER_CLASS). */
export const HERO_FLUSH_CLASS = "-mt-[64px] sm:-mt-[72px]";

/** Top padding so hero text clears the fixed navbar (use on flushed heroes). */
export const HERO_CONTENT_PT = "pt-[80px] sm:pt-[88px]";

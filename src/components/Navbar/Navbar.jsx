import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import { Link, useLocation } from "react-router-dom";
import kafupeople from "../../assets/images/kafupeople.webp";
import { useNavScroll } from "../../context/NavScrollContext";
import { NAV_SCROLL_TRANSITION_CLASS } from "../../constants/layout";

const menuItems = [
  { title: "HOME", url: "/" },
  { title: "ABOUT", url: "/about" },
  {
    title: "SERVICES",
    url: "/services",
    submenu: [
      { title: "All services", url: "/services" },
      { title: "ChatGPT Ads", url: "/services/chatgpt-ads" },
      { title: "AI Training Coaching", url: "/services/ai-training-coaching" },
    ],
  },
  { title: "PORTFOLIO", url: "/portfolio" },
  { title: "BLOGS", url: "/blogs" },
  { title: "NEWS", url: "/news" },
  { title: "CONTACT", url: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const { pathname } = useLocation();
  const { isScrolledPastTop, useLightNavText } = useNavScroll();
  const isSolid = isScrolledPastTop || isOpen;

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMobileGroup(null);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <nav
      className={`relative z-50 w-full px-4 text-sm font-medium font-inter sm:px-8 md:px-16 lg:px-32 ${NAV_SCROLL_TRANSITION_CLASS} ${
        isSolid
          ? "border-b border-slate-200 bg-cWhite text-slate-900 shadow-sm"
          : `border-0 bg-transparent shadow-none ${
              useLightNavText ? "text-cWhite" : "text-slate-900"
            }`
      } ${!isSolid && useLightNavText ? "[&_.menu-items>a:hover]:bg-white/10 [&_.menu-items>button:hover]:bg-white/10" : ""}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between sm:h-[72px]">
        <Link to="/" className="flex shrink-0 items-center" onClick={closeMenu}>
          <img
            src={kafupeople}
            alt="Kafu People"
            width={1280}
            height={853}
            className="h-14 w-auto max-w-[220px] object-contain object-left sm:h-16 sm:max-w-[280px]"
          />
        </Link>

        <div className="lg:hidden">
          <button
            type="button"
            className={`focus:outline-none p-2 text-2xl font-bold ${
              isSolid ? "text-slate-900" : useLightNavText ? "text-cWhite" : "text-slate-900"
            }`}
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:ml-auto">
          <ul className="flex space-x-6">
            {menuItems.map((menu) => (
              <MenuItems items={menu} key={menu.title} depthLevel={0} />
            ))}
          </ul>
        </div>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-[64px] sm:top-[72px] z-40 bg-slate-900/40"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            className="lg:hidden absolute left-0 right-0 top-full z-50 max-h-[min(32rem,calc(100dvh-5rem))] overflow-y-auto bg-slate-900 shadow-xl border-t border-slate-700 pb-[env(safe-area-inset-bottom)]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col py-2">
              {menuItems.map((menu) => (
                <li key={menu.title} className="border-b border-slate-800/80 last:border-0">
                  {menu.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileGroup((g) => (g === menu.title ? null : menu.title))
                        }
                        aria-expanded={openMobileGroup === menu.title}
                        aria-controls={`mobile-submenu-${menu.title}`}
                        className={`flex w-full min-h-[44px] items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium uppercase tracking-wide transition-colors ${
                          menu.submenu.some((sub) => sub.url === pathname)
                            ? "text-primary-light bg-slate-800/60"
                            : "text-white hover:bg-slate-800 hover:text-primary-light"
                        }`}
                      >
                        {menu.title}
                        <span
                          aria-hidden="true"
                          className={`text-xs transition-transform ${
                            openMobileGroup === menu.title ? "rotate-180" : ""
                          }`}
                        >
                          &#9662;
                        </span>
                      </button>
                      {openMobileGroup === menu.title ? (
                        <ul id={`mobile-submenu-${menu.title}`} className="bg-slate-950/60 pb-1">
                          {menu.submenu.map((sub) => (
                            <li key={sub.url}>
                              <Link
                                to={sub.url}
                                onClick={closeMenu}
                                aria-current={pathname === sub.url ? "page" : undefined}
                                className={`flex min-h-[44px] items-center justify-center px-4 py-3 text-sm transition-colors ${
                                  pathname === sub.url
                                    ? "text-primary-light"
                                    : "text-slate-200 hover:bg-slate-800 hover:text-primary-light"
                                }`}
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  ) : (
                  <Link
                    to={menu.url}
                    onClick={closeMenu}
                    className={`block px-4 py-3.5 text-center text-sm font-medium uppercase tracking-wide transition-colors min-h-[44px] flex items-center justify-center ${
                      pathname === menu.url
                        ? "text-primary-light bg-slate-800/60"
                        : "text-white hover:bg-slate-800 hover:text-primary-light"
                    }`}
                  >
                    {menu.title}
                  </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;

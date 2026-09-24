import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";

// Hover-to-open only on devices with a real pointer; checked inside handlers
// (never during render) so SSR and hydration output stay identical.
const canHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  const isDisabled = !items.url;

  let ref = useRef();

  useEffect(() => {
    if (!dropdown) return undefined;
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setDropdown(false);
        ref.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    canHover() && setDropdown(true);
  };

  const onMouseLeave = () => {
    canHover() && setDropdown(false);
  };

  // Close when keyboard focus leaves the item and its submenu.
  const onBlur = (event) => {
    if (ref.current && !ref.current.contains(event.relatedTarget)) {
      setDropdown(false);
    }
  };

  const closeDropdown = (event) => {
    if (event.target.closest("a")) setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
      onClick={closeDropdown}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span aria-hidden="true">&raquo;</span> : <span className="arrow" aria-hidden="true" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          to={items.url || "#"} // fallback to "#" to avoid empty navigation
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault();
            }
          }}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
          className={isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        >
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;

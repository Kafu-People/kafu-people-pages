import Navbar from "./Navbar";
import { HEADER_SPACER_CLASS, NAV_SCROLL_TRANSITION_CLASS } from "../../constants/layout";
import { useNavScroll } from "../../context/NavScrollContext";
import "../../App.css";

const Header = () => {
  const { isScrolledPastTop, registerSentinel } = useNavScroll();

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 ${NAV_SCROLL_TRANSITION_CLASS} ${
          isScrolledPastTop ? "bg-cWhite" : "bg-transparent"
        }`}
      >
        <Navbar />
      </header>
      <div
        ref={registerSentinel}
        className={`${HEADER_SPACER_CLASS} bg-transparent`}
        aria-hidden="true"
      />
    </>
  );
};

export default Header;

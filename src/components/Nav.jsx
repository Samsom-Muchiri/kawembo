import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import topLogo from "../assets/kawebo-logo-4.png";
import Footer from "./Footer";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".menu") && !menuOpen) {
        setMenuOpen(false);
      }
      if (window.innerWidth > 700) {
        setMenuOpen(true);
      }
    });

    return () => {
      window.removeEventListener("click", () => {
        return;
      });
    };
  }, []);
  return (
    <>
      <nav>
        <img src={topLogo} alt="" />
        <div className="menu" onClick={() => setMenuOpen(true)}>
          <span className="material-symbols-outlined">drag_handle</span>
        </div>
        <div
          className="nav-links"
          style={
            menuOpen ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }
          }
        >
          <ul style={menuOpen ? { transform: "translateX(0%)" } : {}}>
            <li>
              <NavLink to="/">
                home <hr />
              </NavLink>
            </li>
            <li>
              <Link>
                Officials <hr />
              </Link>
            </li>
            <li>
              <Link>
                About <hr />
              </Link>
            </li>
            <li>
              <Link>
                Contacts <hr />
              </Link>
            </li>
            <button>
              Log in <span className="material-symbols-outlined">person</span>
            </button>
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Nav;

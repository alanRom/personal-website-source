/* eslint-disable  */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Site.scss";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from '@fortawesome/free-solid-svg-icons'
import AppRoutes from "./Routes";
import logo from "../../logo.png";
import RouteHandler from "./RouteHandler";
import { lightTheme, darkTheme } from "./themes";
import GlobalStyles from "./globals";
import useDarkMode from "./useDarkMode";

function FrameworkComponent() {
  const [theme, toggleTheme, componentMounted] = useDarkMode() as [
    string,
    () => void,
    boolean
  ];
  const [navmenuShow, toggleNavMenu] = useState(false);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const menuTimeout = 10;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <nav
          className="navbar has-shadow is-transparent borderXwidth"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <div className="navbar-item">
              <NavLink className="title nav-link brand-link " to="/">
                <img
                  src={logo}
                  alt="Logo"
                  width="28px"
                  height="28px"
                  style={{ fontWeight: "lighter", marginRight: "10px" }}
                />
                Alan Romano
              </NavLink>
            </div>

            <div
              role="button"
              className={`navbar-burger burger ${
                navmenuShow ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarMenuItems"
              onClick={() => {
                toggleNavMenu(!navmenuShow);
              }}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>
          <div
            className={`navbar-menu ${navmenuShow ? "is-active" : ""}`}
            id="navbarMenuItems"
          >
            <div className="navbar-start">
              {AppRoutes.filter((rt) => rt.showOnNav).map((rt) => {
                if (rt.sublinks != null && rt.sublinks.length > 0) {
                  // Sublinks
                  return (
                    <div
                      key={`${rt.route}-link`}
                      className="navbar-item has-dropdown is-hoverable "
                    >
                      <NavLink
                        className="navbar-link"
                        activeClassName="is-active"
                        to={rt.route}
                        onClick={() => {
                          setTimeout(() => {
                            toggleNavMenu(!navmenuShow);
                          }, menuTimeout);
                        }}
                      >
                        {rt.title}
                      </NavLink>
                      <div className="navbar-dropdown">
                        {rt.sublinks.map((lnk) => (
                          <NavLink
                            key={`nav-sub-link-${lnk.link}`}
                            className="navbar-link is-arrowless"
                            activeClassName="is-active"
                            onClick={() => {
                              setTimeout(() => {
                                toggleNavMenu(!navmenuShow);
                              }, menuTimeout);
                            }}
                            to={lnk.link}
                          >
                            {lnk.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    className="navbar-item"
                    key={`${rt.route}-link`}
                    onClick={() => {
                      setTimeout(() => {
                        toggleNavMenu(!navmenuShow);
                      }, menuTimeout);
                    }}
                  >
                    <NavLink
                      className="navbar-link is-arrowless"
                      activeClassName="is-active"
                      to={rt.route}
                    >
                      {rt.title}
                    </NavLink>
                  </div>
                );
              })}
              <div
                className="navbar-item is-hidden-desktop"
                onClick={() => {
                  toggleTheme();
                }}
              >
                Switch Theme
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item is-hidden-touch">
              <div className="field">
                <p className="control">
                  <button
                    id="theme-toggle"
                    className="button is-rounded is-small"
                    title="Switch Theme"
                    onClick={() => {
                      toggleTheme();
                    }}
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faSun} />
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <main
          className="container"
          onClick={() => {
            setTimeout(() => {
              toggleNavMenu(false);
            }, menuTimeout);
          }}
        >
          <RouteHandler appRoutes={AppRoutes} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default FrameworkComponent;

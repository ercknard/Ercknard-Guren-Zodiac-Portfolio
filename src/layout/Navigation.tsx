/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  {
    return (
      <section id="menu" className="main-navigation">
        <input type="checkbox" id="responsive-menu" />
        <label></label>
        <div className="main-sec-nav to-width">
          {/* <Link className="the-links" href="/" passHref>
            <span className="to-flex navigation-text-logo">
              {" "}
              <Image
                className="navigation-logo to-left to-hide to-seryo"
                src="/static/images/logos/ad-mrx-pyro.png"
              />{" "}
              <span className="highlight">
                {" "}
                <b className="to-wheat">Ercknard Guren</b>{" "}
              </span>{" "}
            </span>
          </Link> */}
          <div className="navigation-buttons">
            {/* <div className="cover"></div> */}
            <div className="the-links">
              <Link
                className={`${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                ABOUT
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`${pathname === "/skills" ? "active" : ""}`}
                href="/skills"
              >
                SKILLS
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`${pathname === "/experiences" ? "active" : ""}`}
                href="/experiences"
              >
                EXPERIENCES
              </Link>
            </div>
            <Link className={`${pathname === "/" ? "active" : ""}`} href="/">
              <span className="to-flex navigation-text-logo to-hide">
                {/* <Image
                  className="navigation-logo"
                  src="/static/images/bgs/ercknard-head.webp"
                />{" "} */}
                <b className="to-font-color text-motion">Ercknard Guren</b>
              </span>
            </Link>
            <div className="the-links up-to">
              <Link
                className={`${pathname === "/projects" ? "active" : ""}`}
                href="/projects"
              >
                PROJECTS
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`${pathname === "/feedback" ? "active" : ""}`}
                href="/feedback"
              >
                FEEDBACKS
              </Link>
            </div>
            <div className="the-links">
              <Link
                className={`${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

"use client";

import { Mail, Menu, Moon, Sun, X } from "lucide-react";
import { LayoutGroup, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { GlassSpeed } from "@/components/GlassBackground";
import { navigation, navigationDuration, navigationEase, navigationIndex } from "@/content/navigation";
import { profile } from "@/content/profile";

function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.dataset.theme ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const theme = currentTheme === "dark" ? "light" : "dark";

  root.dataset.theme = theme;
  try {
    window.localStorage.setItem("portfolio-theme", theme);
  } catch {
    // The switch still works for this page if storage is unavailable.
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const activeIndex = navigationIndex(pathname);

  function current(index: number, href: string) {
    if (index === activeIndex) return pathname === href ? "page" : "location";
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <nav className="desktop-nav" aria-label="Main navigation">
          <MotionConfig reducedMotion="user">
            <LayoutGroup id="portfolio-nav">
              {navigation.map(({ label, href }, index) => (
                <Link key={href} href={href} aria-current={current(index, href)}>
                  {label}
                  {index === activeIndex && (
                    <motion.span
                      className="nav-indicator"
                      layoutId="active-link"
                      initial={false}
                      transition={{ duration: navigationDuration / 1000, ease: navigationEase }}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </LayoutGroup>
          </MotionConfig>
        </nav>

        <details
          className="mobile-nav"
          onKeyDown={(event) => {
            if (event.key === "Escape" && event.currentTarget.open) {
              event.currentTarget.open = false;
              event.currentTarget.querySelector("summary")?.focus();
            }
          }}
        >
          <summary className="icon-button" aria-label="Navigation menu">
            <Menu className="menu-open-icon" size={22} />
            <X className="menu-close-icon" size={22} />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(({ label, href }, index) => (
              <Link
                key={href}
                href={href}
                aria-current={current(index, href)}
                onClick={(event) => {
                  const menu = event.currentTarget.closest("details");
                  if (menu) menu.open = false;
                }}
              >
                {label}
              </Link>
            ))}
            <GlassSpeed mobile />
          </nav>
        </details>

        <Link className="home-avatar" href="/" aria-label={`${profile.name}, home`}>
          <Image src="/assets/site-mark.webp" alt="" width={48} height={48} unoptimized />
        </Link>

        <div className="header-actions">
          <a className="icon-button" href={profile.github} aria-label="GitHub profile">
            <FaGithub size={20} />
          </a>
          <a className="icon-button header-email" href={`mailto:${profile.email}`} aria-label="Email Khôi">
            <Mail size={19} />
          </a>
          <GlassSpeed />
          <button className="icon-button theme-toggle" type="button" aria-label="Toggle color theme" onClick={toggleTheme}>
            <Moon className="moon-icon" size={19} />
            <Sun className="sun-icon" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

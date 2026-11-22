"use client";

import { Mail, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { profile } from "@/content/profile";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
];

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

  function current(href: string) {
    if (href === pathname) return "page";
    if (href !== "/" && pathname.startsWith(`${href}/`)) return "location";
    return undefined;
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={current(href)}>{label}</Link>
          ))}
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
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={current(href)}
                onClick={(event) => {
                  const menu = event.currentTarget.closest("details");
                  if (menu) menu.open = false;
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </details>

        <Link className="monogram" href="/" aria-label={`${profile.name}, home`}>DK<span aria-hidden="true">.</span></Link>

        <div className="header-actions">
          <a className="icon-button" href={profile.github} aria-label="GitHub profile">
            <FaGithub size={20} />
          </a>
          <a className="icon-button header-email" href={`mailto:${profile.email}`} aria-label="Email Khôi">
            <Mail size={19} />
          </a>
          <button className="icon-button theme-toggle" type="button" aria-label="Toggle color theme" onClick={toggleTheme}>
            <Moon className="moon-icon" size={19} />
            <Sun className="sun-icon" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

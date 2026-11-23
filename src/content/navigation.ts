export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
] as const;

export const navigationDuration = 380;
export const navigationEase = [0.22, 1, 0.36, 1] as const;

export function navigationIndex(pathname: string) {
  return navigation.findIndex(({ href }) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)));
}

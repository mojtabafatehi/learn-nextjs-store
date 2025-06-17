"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { href: "/", label: "صفحه اصلی " },
  { href: "/store", label: "فروشگاه" },
];

export default function navBar() {
  const pathname = usePathname();

  return (
    <nav className="shadow p-4">
      {Links.map((item) => (
        <Link
          className={`m-4 ${pathname == item.href ? "text-sky-500" : ""}`}
          key={item.href}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

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
    <nav className="flex justify-around shadow p-4 ">
      <div>
        {Links.map((item) => (
          <Link
            className={`m-4 ${pathname == item.href ? "text-sky-500" : ""}`}
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div>
        <Link href="/cart">سبد خرید</Link>
      </div>
    </nav>
  );
}

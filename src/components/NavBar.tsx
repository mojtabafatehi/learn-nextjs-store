"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { href: "/", label: "صفحه اصلی " },
  { href: "/store", label: "فروشگاه " },
  { href: "/dashboard", label: "داشبورد" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { totalProductQty } = useShoppingCartContext();

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
        <span className="px-2 py-1 text-white bg-blue-400 rounded-full mx-2">
          {totalProductQty}
        </span>
      </div>
    </nav>
  );
}

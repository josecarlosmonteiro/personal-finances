import Link from "next/link";
import { URL } from "../constants/URL";

export function Navbar() {
  const links = [
    { label: "Início", href: URL.ROOT },
    { label: "Planejamento Mensal", href: URL.MONTHLY_PLANNING },
  ];

  return (
    <nav className="p-2 px-4 flex justify-between items-center bg-gray-900 shadow-md">
      <Link href={URL.ROOT}>
        <div className="text-xl font-semibold text-yellow-500">Finanças Pessoais</div>
      </Link>

      <div className="flex justify-end gap-4">
        {
          links.map(link => (
            <Link
              key={link.label}
              href={link.href}
            >
              <div className="p-2 duration-200 hover:bg-gray-800">
                {link.label}
              </div>
            </Link>
          ))
        }
      </div>
    </nav>
  )
}
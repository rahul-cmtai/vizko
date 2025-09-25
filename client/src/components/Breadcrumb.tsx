import { Link } from "wouter";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-500 mb-6">
      <Link href="/">
        <a className="flex items-center hover:text-primary transition-colors duration-200">
          <Home className="h-4 w-4 mr-1" />
          Home
        </a>
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          {item.href ? (
            <Link href={item.href}>
              <a className="hover:text-primary transition-colors duration-200 capitalize">
                {item.label}
              </a>
            </Link>
          ) : (
            <span className="text-gray-900 font-medium uppercase">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
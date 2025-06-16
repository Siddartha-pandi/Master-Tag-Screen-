"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Tag, 
  FileText, 
  Folder, 
  Database, 
  Package, 
  Users 
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Tags", href: "/tags", icon: Tag },
    { name: "Reports", href: "/reports", icon: FileText },
    { name: "Projects", href: "/projects", icon: Folder },
    { name: "Mast. Catd. Inst.", href: "/master-catalog", icon: Database },
    { name: "MYV", href: "/myv", icon: Package },
    { name: "Users", href: "/users", icon: Users },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 bg-[#1E293B] text-white">
      <div className="px-4 py-5 border-b border-gray-800">
        <h2 className="text-xl font-bold">Navigation</h2>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm hover:bg-gray-700/50 transition-colors",
                    isActive ? "bg-gray-700/50" : ""
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
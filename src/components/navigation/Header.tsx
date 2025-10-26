"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    (() => setMounted(true))();
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // fixed top-0 left-0 right-0 z-50

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              UX Lab
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm lg:text-base transition-colors ${
                  currentPage === item.href
                    ? "text-gray-900 dark:text-gray-100 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {mounted && <ThemeToggle />}
            <Link href="/contact">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 text-sm lg:text-base px-4 lg:px-6">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {mounted && <ThemeToggle />}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.href
                      ? "text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

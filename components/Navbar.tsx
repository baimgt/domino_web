'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Menu, X } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface NavbarProps {
  onOpenDownload: () => void;
}

export default function Navbar({ onOpenDownload }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand Logo & Title */}
        <a href="#hero" className="nav-brand">
          <div className="nav-logo-wrap">
            <Image
              src="/assets/kings_billiards_logo.png"
              alt="Kings Billiards Logo"
              width={44}
              height={44}
              className="nav-logo-img"
              priority
            />
          </div>
          <div className="nav-brand-text">
            <div className="brand-title-row">
              <span className="brand-name">
                KINGS <span className="text-gold">BILLIARDS</span>
              </span>
              <span className="version-pill">
                {APP_CONFIG.version}
              </span>
            </div>
            <div className="brand-subtitle">
              {APP_CONFIG.subtitle}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <a href="#hero" className="nav-item">Beranda</a>
          <a href="#spesifikasi" className="nav-item">Spesifikasi</a>
          <a href="#games" className="nav-item">Permainan</a>
          <a href="#fitur" className="nav-item">Fitur VIP</a>
          <a href="#panduan" className="nav-item">Cara Install</a>
          <a href="#faq" className="nav-item">FAQ</a>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="nav-actions">
          <button
            onClick={onOpenDownload}
            className="btn-gold nav-cta-btn"
          >
            <Download size={16} />
            <span>Unduh APK</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-menu">
          <a
            href="#hero"
            onClick={() => setIsMobileMenuOpen(false)}
            className="drawer-link"
          >
            Beranda
          </a>
          <a
            href="#spesifikasi"
            onClick={() => setIsMobileMenuOpen(false)}
            className="drawer-link"
          >
            Spesifikasi & Keamanan
          </a>
          <a
            href="#games"
            onClick={() => setIsMobileMenuOpen(false)}
            className="drawer-link"
          >
            Daftar Permainan
          </a>
          <a
            href="#fitur"
            onClick={() => setIsMobileMenuOpen(false)}
            className="drawer-link"
          >
            Fitur Unggulan VIP
          </a>
          <a
            href="#panduan"
            onClick={() => setIsMobileMenuOpen(false)}
            className="drawer-link"
          >
            Panduan Cara Install
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="drawer-link"
          >
            FAQ & Bantuan
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenDownload();
            }}
            className="btn-gold drawer-cta-btn"
          >
            <Download size={18} />
            <span>Download APK Resmi (v2.79)</span>
          </button>
        </div>
      )}
    </header>
  );
}

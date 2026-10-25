'use client';

import Image from 'next/image';
import { Download, ShieldCheck, Zap, Star, Users, Smartphone, HardDrive, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface HeroSectionProps {
  onOpenDownload: () => void;
}

export default function HeroSection({ onOpenDownload }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Text & CTA Column */}
          <div className="hero-text-col">
            
            {/* Live Online & Pre-release Badge */}
            <div className="badge-row">
              <div className="live-badge">
                <span className="pulsing-dot" />
                <span>{APP_CONFIG.stats.activeOnlinePlayers} Pemain Online</span>
              </div>
              <div className="prerelease-badge">
                <Zap size={14} className="text-gold" />
                <span>UPDATE RESMI {APP_CONFIG.releaseYear} • PRA-RILIS VIP</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="hero-title">
              Download <span className="text-gold">{APP_CONFIG.appName}</span> APK Versi Terbaru
            </h1>

            {/* Description */}
            <p className="hero-desc">
              Nikmati sensasi bermain <strong>Domino Gaple</strong>, <strong>Qiu Qiu (99)</strong>, <strong>8-Ball Billiards Multiplayer</strong>, dan <strong>Slot Kasino Populer</strong> dalam satu aplikasi ringan, aman, dan tanpa iklan mengganggu. Rasakan keseruan bermain bersama jutaan pemain se-Indonesia!
            </p>

            {/* Download Action Buttons — Placed prominently for instant mobile & desktop conversion */}
            <div className="cta-group" id="download-zone">
              <button onClick={onOpenDownload} className="btn-gold btn-download-hero" id="hero-btn-download">
                <div className="btn-icon-box">
                  <Download size={26} />
                </div>
                <div className="btn-text-box">
                  <div className="btn-main-title">DOWNLOAD APK RESMI</div>
                  <div className="btn-sub-title">Server VIP Kecepatan Tinggi (Langsung Unduh)</div>
                </div>
                <span className="speed-tag">⚡ Super Cepat</span>
              </button>

              <button onClick={onOpenDownload} className="btn-secondary" id="hero-btn-mirror">
                <Zap size={18} className="text-gold" />
                <div className="btn-mirror-text">
                  <div className="btn-mirror-title">Server Alternatif (Mirror)</div>
                  <div className="btn-mirror-sub">Google Drive / Direct Cloud</div>
                </div>
              </button>
            </div>

            {/* Quick Spec Pills */}
            <div className="spec-pills-grid">
              <div className="spec-pill">
                <HardDrive size={18} className="text-gold pill-icon" />
                <div className="pill-content">
                  <div className="spec-label">Ukuran APK</div>
                  <div className="spec-val">{APP_CONFIG.fileSize} (Full HD)</div>
                </div>
              </div>

              <div className="spec-pill">
                <Smartphone size={18} className="text-gold pill-icon" />
                <div className="pill-content">
                  <div className="spec-label">Kompatibilitas</div>
                  <div className="spec-val">{APP_CONFIG.minAndroid}</div>
                </div>
              </div>

              <div className="spec-pill">
                <Zap size={18} className="text-gold pill-icon" />
                <div className="pill-content">
                  <div className="spec-label">Versi Terkini</div>
                  <div className="spec-val">{APP_CONFIG.version} (Terbaru)</div>
                </div>
              </div>

              <div className="spec-pill verified">
                <ShieldCheck size={18} className="text-green pill-icon" />
                <div className="pill-content">
                  <div className="spec-label">Keamanan</div>
                  <div className="spec-val text-green">{APP_CONFIG.safetyRating}</div>
                </div>
              </div>
            </div>

            {/* Trust Proof Bar */}
            <div className="trust-proof">
              <div className="trust-item">
                <div className="trust-stars">
                  <Star size={15} fill="#F5C518" />
                  <Star size={15} fill="#F5C518" />
                  <Star size={15} fill="#F5C518" />
                  <Star size={15} fill="#F5C518" />
                  <Star size={15} fill="#F5C518" />
                </div>
                <span className="trust-text">
                  <strong>4.9 / 5</strong> (58.400+ Ulasan)
                </span>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <Users size={16} className="text-gold" />
                <span className="trust-text">
                  <strong>750.000+</strong> Pengunduh
                </span>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <CheckCircle2 size={16} className="text-green" />
                <span className="trust-text trust-verified">
                  Play Protect Safe
                </span>
              </div>
            </div>

          </div>

          {/* Right Visual 3D Showcase Column */}
          <div className="hero-visual-col">
            <div className="visual-wrapper">
              
              {/* Glowing Aura Ring */}
              <div className="aura-ring" />

              {/* Main Showcase Image Card */}
              <div className="hero-image-card">
                <Image
                  src="/assets/hero_showcase.jpg"
                  alt="Kings Billiards & Domino App Gameplay"
                  width={560}
                  height={560}
                  className="hero-img"
                  priority
                />

                {/* Floating 3D Badges */}
                <div className="floating-badge badge-top-left">
                  <div className="badge-icon-wrap" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
                    🎱
                  </div>
                  <div>
                    <div className="badge-meta">Mode Multiplayer</div>
                    <div className="badge-title">8-Ball & Gaple Real-Time</div>
                  </div>
                </div>

                <div className="floating-badge badge-bottom-right">
                  <div className="badge-icon-wrap" style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)' }}>
                    ⚡
                  </div>
                  <div>
                    <div className="badge-meta">Jackpot Sensational</div>
                    <div className="badge-title text-gold">Gatotkaca & Mahjong Ways</div>
                  </div>
                </div>

                <div className="floating-badge badge-bottom-left">
                  <div className="badge-icon-wrap" style={{ background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' }}>
                    🎁
                  </div>
                  <div>
                    <div className="badge-meta">Bonus Pendaftar Baru</div>
                    <div className="badge-title" style={{ color: '#38BDF8' }}>Gratis 10M Chip Login</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

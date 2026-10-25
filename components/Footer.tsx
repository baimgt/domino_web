'use client';

import Image from 'next/image';
import { Download, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
}

export default function Footer({ onOpenDownload }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Giant Bottom Download Banner */}
        <div className="bottom-cta-banner glass-panel">
          <div className="cta-banner-content">
            <span className="cta-pill">🎉 BONUS AWAL DAFTAR BARU</span>
            <h2 className="cta-banner-title">
              Siap Jadi Sultan Berikutnya? <span className="text-gold">Unduh APK Sekarang!</span>
            </h2>
            <p className="cta-banner-desc">
              Klaim <strong>10.000.000 Chip Gratis</strong> langsung di akun Anda hari ini. Mainkan Domino Gaple, Billiards 8-Ball, dan Slot Kasino favorit tanpa hambatan.
            </p>
          </div>
          <button onClick={onOpenDownload} className="btn-gold cta-banner-btn" id="footer-btn-download">
            <Download size={20} />
            <span>DOWNLOAD APK RESMI v2.79</span>
          </button>
        </div>

        {/* Main Footer Info Grid */}
        <div className="footer-grid">
          
          <div className="footer-col-brand">
            <div className="footer-logo-row">
              <div className="footer-logo-wrap">
                <Image
                  src="/assets/kings_billiards_logo.png"
                  alt="Kings Billiards Logo"
                  width={42}
                  height={42}
                  className="footer-logo-img"
                />
              </div>
              <span className="footer-brand-title">
                KINGS <span className="text-gold">BILLIARDS</span>
              </span>
            </div>
            <p className="footer-brand-desc">
              Platform hiburan permainan kartu Domino Gaple, Qiu Qiu, 8-Ball Billiards online dan slot kasino terbaik di Indonesia dengan sistem keamanan canggih dan gameplay 60 FPS ultra-halus.
            </p>
            <div className="security-pills">
              <span className="sec-tag">🛡️ Google Play Protect Safe</span>
              <span className="sec-tag">🔞 Khusus 18+</span>
            </div>
          </div>

          <div className="footer-col-links">
            <h4 className="footer-col-title">Navigasi Cepat</h4>
            <ul className="footer-list">
              <li><a href="#hero" className="footer-link-item">Beranda</a></li>
              <li><a href="#spesifikasi" className="footer-link-item">Spesifikasi APK</a></li>
              <li><a href="#games" className="footer-link-item">Koleksi Game</a></li>
              <li><a href="#fitur" className="footer-link-item">Fitur Unggulan VIP</a></li>
              <li><a href="#panduan" className="footer-link-item">Cara Install APK</a></li>
              <li><a href="#faq" className="footer-link-item">FAQ & Bantuan</a></li>
            </ul>
          </div>

          <div className="footer-col-links">
            <h4 className="footer-col-title">Permainan Populer</h4>
            <ul className="footer-list">
              <li><a href="#games" className="footer-link-item">Gates of Gatotkaca</a></li>
              <li><a href="#games" className="footer-link-item">8-Ball Billiards Classic</a></li>
              <li><a href="#games" className="footer-link-item">Domino Gaple Balak</a></li>
              <li><a href="#games" className="footer-link-item">Domino Qiu Qiu (99)</a></li>
              <li><a href="#games" className="footer-link-item">Mahjong Ways 2</a></li>
              <li><a href="#games" className="footer-link-item">By One 1v1 PvP</a></li>
            </ul>
          </div>

          <div className="footer-col-links">
            <h4 className="footer-col-title">Keamanan & Privasi</h4>
            <ul className="footer-list">
              <li><span className="footer-static-item">Enkripsi SHA-256 Cloud</span></li>
              <li><span className="footer-static-item">Kebijakan Privasi Resmi</span></li>
              <li><span className="footer-static-item">Syarat & Ketentuan Layanan</span></li>
              <li><span className="footer-static-item">Anti-Cheat Engine Aktif</span></li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            <strong>Disclaimer:</strong> Kings Billiards & Domino adalah aplikasi permainan simulasi hiburan virtual untuk pengguna berusia 18 tahun ke atas. Koin chip dalam permainan adalah aset virtual yang ditujukan semata-mata untuk hiburan di dalam game dan tidak memiliki nilai mata uang riil di dunia nyata. Bermainlah secara bijak dan bertanggung jawab.
          </p>
          <div className="copyright-row">
            <span className="copyright-text">© 2026 Kings Gaming Studio. Seluruh hak cipta dilindungi undang-undang.</span>
            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Kembali ke atas">
              <ArrowUp size={16} />
              <span>Kembali ke Atas</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

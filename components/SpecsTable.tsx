'use client';

import { ShieldCheck, CheckCircle2, XCircle, HardDrive, Smartphone, Layers, Award } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface SpecsTableProps {
  onOpenDownload: () => void;
}

export default function SpecsTable({ onOpenDownload }: SpecsTableProps) {
  return (
    <section id="spesifikasi" className="section-wrapper specs-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Spesifikasi & Keamanan Resmi</span>
          </div>
          <h2 className="section-title">
            Informasi Lengkap <span className="text-gold">File APK {APP_CONFIG.version}</span>
          </h2>
          <p className="section-subtitle">
            Pastikan Anda selalu mendownload file APK resmi langsung dari server terverifikasi untuk menjamin keamanan akun dan koin chip Anda.
          </p>
        </div>

        {/* Top 4 Quick Spec Cards */}
        <div className="spec-cards-grid">
          <div className="glass-panel spec-card">
            <div className="spec-card-icon icon-gold">
              <Layers size={24} />
            </div>
            <div>
              <div className="spec-card-label">Nama Aplikasi</div>
              <div className="spec-card-value">{APP_CONFIG.appName}</div>
              <div className="spec-card-sub">Edisi VIP Casino {APP_CONFIG.releaseYear}</div>
            </div>
          </div>

          <div className="glass-panel spec-card">
            <div className="spec-card-icon icon-cyan">
              <HardDrive size={24} />
            </div>
            <div>
              <div className="spec-card-label">Ukuran Berkas</div>
              <div className="spec-card-value">{APP_CONFIG.fileSize} (Assets Full HD)</div>
              <div className="spec-card-sub">Optimal & Hemat Baterai</div>
            </div>
          </div>

          <div className="glass-panel spec-card">
            <div className="spec-card-icon icon-purple">
              <Smartphone size={24} />
            </div>
            <div>
              <div className="spec-card-label">Sistem Operasi</div>
              <div className="spec-card-value">{APP_CONFIG.minAndroid}</div>
              <div className="spec-card-sub">Mendukung Android 14 & 15</div>
            </div>
          </div>

          <div className="glass-panel spec-card">
            <div className="spec-card-icon icon-green">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="spec-card-label">Status Keamanan</div>
              <div className="spec-card-value text-green">{APP_CONFIG.safetyRating}</div>
              <div className="spec-card-sub">Bebas Trojan & Virus</div>
            </div>
          </div>
        </div>

        {/* Comparison Table: Official vs Unofficial */}
        <div className="comparison-wrap glass-panel">
          <div className="comp-header">
            <h3 className="comp-heading">
              Perbandingan: <span className="text-gold">APK Resmi Kami</span> vs APK Bajakan / Mod
            </h3>
            <span className="safe-badge">
              <ShieldCheck size={16} /> Dijamin Anti-Banned
            </span>
          </div>

          <div className="table-swipe-hint">
            <span>👉 Geser tabel ke samping untuk melihat detail lengkap</span>
          </div>

          <div className="table-responsive">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Fitur & Keamanan</th>
                  <th className="th-official">👑 APK Resmi Kings Billiards v2.79</th>
                  <th className="th-mod">❌ APK Mod / Pihak Ketiga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Koneksi Server Resmi</strong></td>
                  <td className="td-official">
                    <CheckCircle2 size={18} className="text-green" />
                    <span>Terhubung langsung ke Cloud VPS Resmi (Real-time)</span>
                  </td>
                  <td className="td-mod">
                    <XCircle size={18} className="text-red" />
                    <span>Server palsu / rentan disconnect</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Fitur Kirim Koin Bebas Biaya</strong></td>
                  <td className="td-official">
                    <CheckCircle2 size={18} className="text-green" />
                    <span>Aktif 100% (Transfer ke teman tanpa biaya potong)</span>
                  </td>
                  <td className="td-mod">
                    <XCircle size={18} className="text-red" />
                    <span>Tidak bisa transfer koin antar akun</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Keamanan Akun & Koin</strong></td>
                  <td className="td-official">
                    <CheckCircle2 size={18} className="text-green" />
                    <span>Enkripsi SHA-256 & Login Google Resmi</span>
                  </td>
                  <td className="td-mod">
                    <XCircle size={18} className="text-red" />
                    <span>Rentan pencurian kata sandi & koin chip</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Risiko Banned Akun</strong></td>
                  <td className="td-official">
                    <CheckCircle2 size={18} className="text-green" />
                    <span><strong>0% (Aman 100% Anti-Banned)</strong></span>
                  </td>
                  <td className="td-mod">
                    <XCircle size={18} className="text-red" />
                    <span>Tinggi (Akun langsung di-blacklist permanen)</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Iklan Pop-up yang Mengganggu</strong></td>
                  <td className="td-official">
                    <CheckCircle2 size={18} className="text-green" />
                    <span>Bebas Iklan Spam (Gameplay lancar tanpa interupsi)</span>
                  </td>
                  <td className="td-mod">
                    <XCircle size={18} className="text-red" />
                    <span>Banyak adware dan spam pop-up mencurigakan</span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Bonus Harian & Event VIP</strong></td>
                  <td className="td-official">
                    <CheckCircle2 size={18} className="text-green" />
                    <span>Klaim bonus setiap hari hingga miliaran koin</span>
                  </td>
                  <td className="td-mod">
                    <XCircle size={18} className="text-red" />
                    <span>Tidak dapat mengikuti event dan ranking</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comp-footer">
            <button onClick={onOpenDownload} className="btn-gold comp-download-btn">
              Unduh Versi Resmi yang Aman Sekarang
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

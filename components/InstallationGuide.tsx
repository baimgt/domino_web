'use client';

import { useState } from 'react';
import { Smartphone, Download, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

interface InstallationGuideProps {
  onOpenDownload: () => void;
}

export default function InstallationGuide({ onOpenDownload }: InstallationGuideProps) {
  const [selectedBrand, setSelectedBrand] = useState<'samsung' | 'xiaomi' | 'oppo' | 'universal'>('samsung');

  const brandTips = {
    samsung: {
      brandName: 'Samsung (One UI)',
      stepsNote: 'Buka Pengaturan > Biometrik dan Keamanan (atau Privasi) > Instal Aplikasi yang Tidak Dikenal > Pilih Browser (Chrome/Samsung Internet) > Aktifkan "Izinkan dari Sumber Ini".'
    },
    xiaomi: {
      brandName: 'Xiaomi / Redmi / POCO (MIUI & HyperOS)',
      stepsNote: 'Buka Setelan > Perlindungan Privasi > Izin Khusus > Instal Aplikasi yang Tidak Diketahui > Pilih Chrome > Centang "Saya menyadari kemungkinan risiko" lalu tekan OK.'
    },
    oppo: {
      brandName: 'Oppo / Realme (ColorOS & Realme UI)',
      stepsNote: 'Buka Pengaturan > Keamanan > Instal Sumber Tidak Dikenal (atau Manajemen Izin) > Pilih browser pengunduh > Aktifkan tombol izin.'
    },
    universal: {
      brandName: 'Vivo / Infinix / HP Lainnya',
      stepsNote: 'Saat notifikasi unduhan selesai diklik, pilih "Setelan" pada pop-up keamanan Android, lalu geser toggle "Izinkan dari sumber ini" ke posisi aktif.'
    }
  };

  return (
    <section id="panduan" className="section-wrapper">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Smartphone size={14} />
            <span>Panduan Praktis Android</span>
          </div>
          <h2 className="section-title">
            Cara Install File APK di <span className="text-gold">HP Android Anda</span>
          </h2>
          <p className="section-subtitle">
            Ikuti 5 langkah mudah berikut ini agar game dapat terinstal sempurna tanpa kendala perizinan.
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="brand-selector-wrap">
          <span style={{ fontSize: '0.88rem', color: '#A0AEC0', fontWeight: 600 }}>Pilih Merk HP Anda:</span>
          <div className="brand-tabs">
            <button
              onClick={() => setSelectedBrand('samsung')}
              className={`brand-btn ${selectedBrand === 'samsung' ? 'active' : ''}`}
            >
              Samsung
            </button>
            <button
              onClick={() => setSelectedBrand('xiaomi')}
              className={`brand-btn ${selectedBrand === 'xiaomi' ? 'active' : ''}`}
            >
              Xiaomi / POCO
            </button>
            <button
              onClick={() => setSelectedBrand('oppo')}
              className={`brand-btn ${selectedBrand === 'oppo' ? 'active' : ''}`}
            >
              Oppo / Realme
            </button>
            <button
              onClick={() => setSelectedBrand('universal')}
              className={`brand-btn ${selectedBrand === 'universal' ? 'active' : ''}`}
            >
              Vivo / Lainnya
            </button>
          </div>
        </div>

        {/* Specific Brand Tip Box */}
        <div className="brand-tip-box glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FDE047', fontWeight: 800 }}>
            <AlertTriangle size={18} />
            <span>Tips Khusus Pengguna {brandTips[selectedBrand].brandName}:</span>
          </div>
          <p style={{ marginTop: '8px', color: '#E2E8F0', fontSize: '0.94rem', lineHeight: 1.5 }}>
            {brandTips[selectedBrand].stepsNote}
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="steps-grid">
          
          <div className="step-card glass-panel">
            <div className="step-num">1</div>
            <div className="step-content">
              <h4 className="step-title">Unduh File APK</h4>
              <p className="step-desc">
                Tekan tombol <strong>Download APK Resmi</strong> di website ini. File <code>Kings-Billiards-v2.79.apk</code> akan tersimpan di HP Anda.
              </p>
            </div>
          </div>

          <div className="step-card glass-panel">
            <div className="step-num">2</div>
            <div className="step-content">
              <h4 className="step-title">Buka File Manager</h4>
              <p className="step-desc">
                Buka folder <strong>Download</strong> atau klik notifikasi selesai unduh di panel atas layar HP Anda.
              </p>
            </div>
          </div>

          <div className="step-card glass-panel">
            <div className="step-num">3</div>
            <div className="step-content">
              <h4 className="step-title">Izinkan Sumber Tak Dikenal</h4>
              <p className="step-desc">
                Jika muncul peringatan keamanan, masuk ke <strong>Pengaturan</strong> lalu centang <em>"Izinkan dari sumber ini"</em>.
              </p>
            </div>
          </div>

          <div className="step-card glass-panel">
            <div className="step-num">4</div>
            <div className="step-content">
              <h4 className="step-title">Pasang / Install APK</h4>
              <p className="step-desc">
                Tekan tombol <strong>Install</strong> dan tunggu proses pemasangan aplikasi selesai (biasanya hanya 10-15 detik).
              </p>
            </div>
          </div>

          <div className="step-card glass-panel step-final">
            <div className="step-num">5</div>
            <div className="step-content">
              <h4 className="step-title">Buka & Klaim Bonus!</h4>
              <p className="step-desc">
                Buka aplikasi, login menggunakan akun Google atau Guest, lalu klaim chip bonus selamat datang Anda!
              </p>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={onOpenDownload} className="btn-gold" style={{ padding: '16px 36px' }}>
            <Download size={20} />
            <span>Mulai Download APK v2.79 Sekarang</span>
          </button>
        </div>

      </div>
    </section>
  );
}

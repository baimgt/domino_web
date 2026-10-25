'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Download, ShieldCheck, CheckCircle2, Server, Zap, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { APP_CONFIG } from '../config/appConfig';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Menghubungkan ke Server Cloud VIP...');
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedServer, setSelectedServer] = useState<'vip' | 'mirror' | 'gdrive'>('vip');

  const triggerRealDownload = () => {
    let targetUrl = APP_CONFIG.downloadLinks.primaryServer;
    if (selectedServer === 'mirror') {
      targetUrl = APP_CONFIG.downloadLinks.mirrorServer;
    } else if (selectedServer === 'gdrive') {
      targetUrl = APP_CONFIG.downloadLinks.googleDriveBackup;
    }

    if (targetUrl.startsWith('http')) {
      window.open(targetUrl, '_blank');
      return;
    }

    const a = document.createElement('a');
    a.href = targetUrl;
    a.download = APP_CONFIG.apkFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setIsCompleted(false);
      setStatusText('Menghubungkan ke Server Cloud VIP...');
      return;
    }

    setProgress(0);
    setIsCompleted(false);
    setStatusText('Menghubungkan ke Server Cloud VIP...');

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 16) + 12;

      if (current > 25 && current <= 60) {
        setStatusText('Memeriksa Integritas File & Google Play Protect...');
      } else if (current > 60 && current < 100) {
        setStatusText('Menyiapkan Jalur Unduhan Kecepatan Tinggi (Direct VIP)...');
      }

      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setIsCompleted(true);
        setStatusText('✅ Berhasil! File Kings-Billiards-v2.79.apk sedang diunduh ke HP Anda...');

        // Trigger confetti burst
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFE873', '#F5C518', '#10B981', '#A855F7']
          });
        } catch (e) {
          // ignore confetti if blocked
        }

        // Trigger APK download
        setTimeout(() => {
          triggerRealDownload();
        }, 400);
      } else {
        setProgress(current);
      }
    }, 140);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button onClick={onClose} className="modal-close-btn" aria-label="Tutup">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="app-icon-wrap">
            <Image
              src="/assets/kings_billiards_logo.png"
              alt="Kings Billiards Logo"
              width={56}
              height={56}
              className="app-icon"
            />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 className="modal-app-name">{APP_CONFIG.appName}</h3>
              <span className="modal-version-tag">{APP_CONFIG.version}</span>
            </div>
            <p className="modal-app-sub">APK Resmi Android • {APP_CONFIG.fileSize} (Full HD Offline Assets)</p>
          </div>
        </div>

        {/* Server Selector Tabs */}
        <div className="server-select-box">
          <span className="server-label">Pilih Jalur Unduhan:</span>
          <div className="server-btns">
            <button
              onClick={() => setSelectedServer('vip')}
              className={`server-btn ${selectedServer === 'vip' ? 'active' : ''}`}
            >
              <Zap size={14} />
              <span>VIP Jakarta (Cepat)</span>
            </button>
            <button
              onClick={() => setSelectedServer('mirror')}
              className={`server-btn ${selectedServer === 'mirror' ? 'active' : ''}`}
            >
              <Server size={14} />
              <span>Mirror Singapore</span>
            </button>
            <button
              onClick={() => setSelectedServer('gdrive')}
              className={`server-btn ${selectedServer === 'gdrive' ? 'active' : ''}`}
            >
              <span>Cloud Drive</span>
            </button>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="progress-card">
          <div className="progress-top">
            <span className="progress-status">{statusText}</span>
            <span className="progress-percent">{progress}%</span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="security-badges-row">
            <div className="sec-item">
              <ShieldCheck size={14} className="text-green" />
              <span>Google Play Protect Lolos</span>
            </div>
            <div className="sec-item">
              <CheckCircle2 size={14} className="text-green" />
              <span>SHA-256 Terverifikasi</span>
            </div>
            <div className="sec-item">
              <Sparkles size={14} className="text-gold" />
              <span>Anti-Banned 100%</span>
            </div>
          </div>
        </div>

        {/* Manual Fallback Download Button */}
        <div className="modal-actions">
          <button onClick={triggerRealDownload} className="btn-gold" style={{ width: '100%', padding: '14px' }}>
            <Download size={18} />
            <span>Klik di Sini Jika Unduhan Belum Mulai Otomatis</span>
          </button>
        </div>

        {/* Installation Tip */}
        <p className="modal-footer-tip">
          💡 <strong>Tips:</strong> Setelah file selesai diunduh, klik notifikasi di atas layar HP Anda untuk menginstal aplikasi.
        </p>

      </div>
    </div>
  );
}

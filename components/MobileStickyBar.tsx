'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface MobileStickyBarProps {
  onOpenDownload: () => void;
}

export default function MobileStickyBar({ onOpenDownload }: MobileStickyBarProps) {
  return (
    <aside className="mobile-sticky-bar" aria-label="Unduhan Cepat HP">
      <div className="msb-content">
        <div className="msb-info">
          <div className="msb-logo-wrap">
            <Image
              src="/assets/kings_billiards_logo.png"
              alt="Kings Billiards Logo"
              width={38}
              height={38}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="msb-text">
            <span className="msb-title">{APP_CONFIG.appName}</span>
            <span className="msb-meta">
              {APP_CONFIG.version} • {APP_CONFIG.fileSize} • <strong className="text-green">100% Aman</strong>
            </span>
          </div>
        </div>
        <button onClick={onOpenDownload} className="btn-gold msb-btn">
          <span>Unduh APK</span>
          <Download size={15} />
        </button>
      </div>
    </aside>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

export default function LiveDownloadTicker() {
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    city: string;
    timeAgo: string;
    server: string;
  } | null>(null);

  const notifications = [
    { name: 'Rian P.', city: 'Surabaya', timeAgo: 'Baru saja', server: 'Server VIP Jakarta' },
    { name: 'Bagus S.', city: 'Bandung', timeAgo: '12 detik lalu', server: 'Server Cepat #1' },
    { name: 'Fikri A.', city: 'Medan', timeAgo: '28 detik lalu', server: 'Server VIP Cloud' },
    { name: 'Doni K.', city: 'Jakarta Selatan', timeAgo: '45 detik lalu', server: 'Server VIP Jakarta' },
    { name: 'Wahyu T.', city: 'Makassar', timeAgo: '1 menit lalu', server: 'Server Cepat #2' },
    { name: 'Arief M.', city: 'Semarang', timeAgo: '2 menit lalu', server: 'Server VIP Cloud' }
  ];

  useEffect(() => {
    let index = 0;
    const showNext = () => {
      setCurrentNotification(notifications[index]);
      index = (index + 1) % notifications.length;

      // Hide after 4.5s
      setTimeout(() => {
        setCurrentNotification(null);
      }, 4500);
    };

    // Initial delay then loop every 8 seconds
    const initialTimer = setTimeout(showNext, 2500);
    const interval = setInterval(showNext, 8500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification) return null;

  return (
    <div className="live-ticker-wrap">
      <div className="ticker-card glass-panel">
        <div className="ticker-icon">
          <Download size={16} />
        </div>
        <div>
          <div className="ticker-title">
            <strong>{currentNotification.name}</strong> ({currentNotification.city})
          </div>
          <div className="ticker-sub">
            Mendownload APK v2.79 • <span style={{ color: '#34D399' }}>{currentNotification.timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

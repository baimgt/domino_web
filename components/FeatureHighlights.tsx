'use client';

import { Send, Server, Gift, Crown, ShieldAlert, MessageSquare, Sparkles } from 'lucide-react';

export default function FeatureHighlights() {
  const features = [
    {
      icon: <Send size={26} />,
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.12)',
      title: 'Kirim Koin Bebas Biaya',
      desc: 'Kirim dan terima chip koin ke teman sesama ID pemain secara instan tanpa potongan komisi yang rumit.'
    },
    {
      icon: <Server size={26} />,
      color: '#06B6D4',
      bg: 'rgba(6, 182, 212, 0.12)',
      title: 'Server Cloud VPS Super Cepat',
      desc: 'Didukung infrastruktur server cloud berlatensi rendah (<25ms) sehingga pertandingan billiard dan gaple anti-lag.'
    },
    {
      icon: <Crown size={26} />,
      color: '#F5C518',
      bg: 'rgba(245, 197, 24, 0.12)',
      title: 'Kustomisasi Avatar & Bingkai VIP',
      desc: 'Pamerkan status sultan dengan bingkai mahkota emas, sayap bercahaya, dan efek aura khusus di profil Anda.'
    },
    {
      icon: <ShieldAlert size={26} />,
      color: '#8B5CF6',
      bg: 'rgba(139, 92, 246, 0.12)',
      title: 'Sistem Anti-Cheat & Fair Play',
      desc: 'Dilindungi teknologi keamanan canggih anti-bot dan enkripsi database yang menjaga akun dari kecurangan.'
    },
    {
      icon: <MessageSquare size={26} />,
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.12)',
      title: 'Fitur Pesan Inbox & Emote Interaktif',
      desc: 'Kirim pesan inbox pribadi ke teman, bagikan emotikon lucu saat pertandingan berlangsung di meja taruhan.'
    }
  ];

  return (
    <section id="fitur" className="section-wrapper" style={{ background: 'rgba(9, 12, 19, 0.5)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Fitur Unggulan Terbaik</span>
          </div>
          <h2 className="section-title">
            Mengapa Memilih <span className="text-gold">Kings Billiards & Domino?</span>
          </h2>
          <p className="section-subtitle">
            Kombinasi sempurna antara keseruan bermain kartu gaple, kompetisi billiard online, dan keuntungan slot kasino tanpa batas.
          </p>
        </div>

        {/* Feature 6-Grid */}
        <div className="features-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-card glass-panel">
              <div className="feature-icon-box" style={{ background: item.bg, color: item.color }}>
                {item.icon}
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Gamepad2, Play, Flame, Trophy, Sparkles, Download } from 'lucide-react';

interface GameShowcaseProps {
  onOpenDownload: () => void;
}

interface GameItem {
  id: string;
  name: string;
  category: 'billiards' | 'slots' | 'pvp';
  categoryLabel: string;
  image: string;
  badge: string;
  badgeColor: string;
  activePlayers: string;
  rtpOrWinRate: string;
  description: string;
}

export default function GameShowcase({ onOpenDownload }: GameShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'billiards' | 'slots' | 'pvp'>('all');

  const games: GameItem[] = [
    {
      id: 'gatotkaca',
      name: 'Gates of Gatotkaca',
      category: 'slots',
      categoryLabel: 'Slot Kasino VIP',
      image: '/assets/zeus_real.png',
      badge: 'JACKPOT x5000',
      badgeColor: '#EF4444',
      activePlayers: '5.240 Pemain',
      rtpOrWinRate: '98.8% RTP Gacor',
      description: 'Rasakan sambaran petir pengali hingga 5000x dengan simbol scatters melimpah!'
    },
    {
      id: 'billiard-8ball',
      name: '8-Ball Billiards Classic',
      category: 'billiards',
      categoryLabel: 'Billiard Multiplayer',
      image: '/assets/billiard_lounge_bg.jpg',
      badge: 'TERPOPULER',
      badgeColor: '#10B981',
      activePlayers: '4.890 Pemain',
      rtpOrWinRate: 'Real Fisika 60 FPS',
      description: 'Pertarungan stik billiard online dengan grafis meja 3D dan garis bidik akurat.'
    },
    {
      id: 'byone',
      name: 'By One 1v1 Billiards Duel',
      category: 'pvp',
      categoryLabel: '1v1 Taruhan Koin',
      image: '/assets/byone_banner.jpg',
      badge: 'TARUHAN VIP',
      badgeColor: '#F59E0B',
      activePlayers: '3.120 Pemain',
      rtpOrWinRate: 'Hadiah 2x Lipat',
      description: 'Adu keahlian satu lawan satu dengan pemain lain untuk memperebutkan koin chip besar.'
    },
    {
      id: 'mahjong-ways',
      name: 'Mahjong Ways 2',
      category: 'slots',
      categoryLabel: 'Slot Kasino VIP',
      image: '/assets/slot_loading_bg.jpg',
      badge: 'MULTI-WAYS',
      badgeColor: '#A855F7',
      activePlayers: '4.150 Pemain',
      rtpOrWinRate: '98.5% RTP Maxwin',
      description: 'Fitur spin gratis bertingkat dengan simbol emas beruntun yang mudah menang.'
    },
    {
      id: 'domino-gaple',
      name: 'Domino Gaple Tradisional',
      category: 'billiards',
      categoryLabel: 'Kartu Domino',
      image: '/assets/lobby_bg.jpg',
      badge: 'FAVORIT INDO',
      badgeColor: '#06B6D4',
      activePlayers: '6.700 Pemain',
      rtpOrWinRate: 'Multiplayer 4 Orang',
      description: 'Game kartu balak Domino Gaple paling digemari dengan room santai dan VIP.'
    },
    {
      id: 'qiuqiu',
      name: 'Domino Qiu Qiu (99)',
      category: 'billiards',
      categoryLabel: 'Kartu Domino',
      image: '/assets/hero_showcase.jpg',
      badge: 'HIGH ROLLER',
      badgeColor: '#EC4899',
      activePlayers: '3.800 Pemain',
      rtpOrWinRate: 'Kombinasi 6 Dewa',
      description: 'Trik dan strategi kartu Domino 99 untuk memenangkan chip lawan di meja taruhan.'
    }
  ];

  const filteredGames = activeTab === 'all' ? games : games.filter(g => g.category === activeTab);

  return (
    <section id="games" className="section-wrapper">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Gamepad2 size={14} />
            <span>Koleksi Permainan Lengkap</span>
          </div>
          <h2 className="section-title">
            Satu Aplikasi, <span className="text-gold">Semua Game Favorit</span>
          </h2>
          <p className="section-subtitle">
            Pilih dari puluhan permainan kartu tradisional, arena billiard online, hingga slot kasino berhadiah jackpot melimpah.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab('all')}
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          >
            🔥 Semua Permainan
          </button>
          <button
            onClick={() => setActiveTab('billiards')}
            className={`tab-btn ${activeTab === 'billiards' ? 'active' : ''}`}
          >
            🎱 Billiard & Domino
          </button>
          <button
            onClick={() => setActiveTab('slots')}
            className={`tab-btn ${activeTab === 'slots' ? 'active' : ''}`}
          >
            🎰 Slot Kasino VIP
          </button>
          <button
            onClick={() => setActiveTab('pvp')}
            className={`tab-btn ${activeTab === 'pvp' ? 'active' : ''}`}
          >
            ⚔️ 1v1 By One PvP
          </button>
        </div>

        {/* Games Grid */}
        <div className="games-grid">
          {filteredGames.map((game) => (
            <div key={game.id} className="game-card glass-panel">
              
              {/* Card Image Container */}
              <div className="game-thumb-box">
                <Image
                  src={game.image}
                  alt={game.name}
                  width={380}
                  height={220}
                  className="game-thumb"
                />
                <div className="game-thumb-overlay">
                  <button onClick={onOpenDownload} className="play-overlay-btn">
                    <Play size={20} fill="#000" />
                  </button>
                </div>

                {/* Badge Overlay */}
                <span className="game-badge" style={{ backgroundColor: game.badgeColor }}>
                  {game.badge}
                </span>

                {/* Category Tag */}
                <span className="game-cat-tag">
                  {game.categoryLabel}
                </span>
              </div>

              {/* Card Content */}
              <div className="game-content">
                <h3 className="game-name">{game.name}</h3>
                <p className="game-desc">{game.description}</p>

                {/* Game Stats */}
                <div className="game-stats">
                  <div className="stat-pill">
                    <Flame size={14} className="text-gold" />
                    <span>{game.activePlayers}</span>
                  </div>
                  <div className="stat-pill" style={{ color: '#34D399' }}>
                    <Sparkles size={14} />
                    <span>{game.rtpOrWinRate}</span>
                  </div>
                </div>

                {/* Play / Download CTA */}
                <button onClick={onOpenDownload} className="btn-game-download">
                  <Download size={16} />
                  <span>Mainkan Sekarang</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc, Music } from 'lucide-react';

export default function MusicPlayer({ isPlaying, onTogglePlay }) {
  const [isMuted, setIsMuted] = useState(false);
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  const videoId = "bqh0RRH8Kz8"; // YouTube short: "I found a love | Ed Sheeran - Perfect"

  useEffect(() => {
    // Load YouTube IFrame Player API dynamically
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    }

    function initPlayer() {
      if (playerRef.current) return;
      playerRef.current = new window.YT.Player('yt-bg-player', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: videoId,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            setPlayerReady(true);
            if (isPlaying) {
              event.target.playVideo();
            }
          },
        },
      });
    }
  }, []);

  // Handle play/pause toggle
  useEffect(() => {
    if (playerRef.current && playerRef.current.playVideo) {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [isPlaying]);

  // Handle mute toggle
  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (playerRef.current) {
      if (nextMute) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
      }
    }
  };

  return (
    <>
      {/* Hidden YouTube Iframe Container */}
      <div className="hidden pointer-events-none">
        <div id="yt-bg-player"></div>
      </div>

      {/* Floating Music Widget (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 bg-[#2C2623]/95 backdrop-blur-md text-white p-2.5 pr-5 rounded-full shadow-2xl border border-[#C5A059]/40 hover:scale-105 transition-all">
        {/* Disc Icon / Equalizer */}
        <div
          onClick={onTogglePlay}
          className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-[#8B263E] to-[#C5A059] flex items-center justify-center cursor-pointer overflow-hidden shadow-inner group"
        >
          <Disc
            className={`w-6 h-6 text-white ${isPlaying ? 'animate-spin-slow' : ''}`}
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-[#8B263E]/40 flex items-center justify-center gap-0.5">
              <span className="w-1 bg-[#E5C384] animate-pulse h-3"></span>
              <span className="w-1 bg-[#E5C384] animate-pulse h-5" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-1 bg-[#E5C384] animate-pulse h-2" style={{ animationDelay: '0.4s' }}></span>
            </div>
          )}
        </div>

        {/* Song Info */}
        <div className="hidden sm:flex flex-col cursor-pointer" onClick={onTogglePlay}>
          <span className="text-[10px] uppercase font-cinzel text-[#E5C384] tracking-wider flex items-center gap-1">
            <Music className="w-3 h-3 animate-bounce" /> Wedding Song
          </span>
          <span className="text-xs font-serif font-medium tracking-wide truncate max-w-[150px]">
            Ed Sheeran — Perfect ("I Found A Love")
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 border-l border-white/20 pl-3">
          <button
            onClick={onTogglePlay}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#E5C384] transition-colors"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </>
  );
}

'use client'
import React, { useState } from 'react';
import Picture from '@/assets/Reklam.webp'
import '@/styles/Video.css';
import Image from 'next/image';
import { AiOutlinePlayCircle } from 'react-icons/ai'

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleStopVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className='video-container'>
      {!showVideo && (
        <div className='thumbnail-container relative' onClick={handlePlayVideo}>
          <Image
            className='thumbnail-image'
            src={Picture}
            alt='Video Thumbnail'
          />
          <AiOutlinePlayCircle size={100} className='text-[#00FF00] play-button' />
        </div>
      )}

      {showVideo && (
        <div className='video-wrapper'>
          <iframe
            className='video-iframe bg-black p-10'
            src='https://www.youtube.com/embed/0cu23VMqiuk?autoplay=1'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <button className='close-button' onClick={handleStopVideo}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;

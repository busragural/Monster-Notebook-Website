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
    <div className='video-container relative pl-5 pr-5 w-full h-0 '>
      {!showVideo && (
        <div className='thumbnail-container absolute top-0 left-0 w-full h-full cursor-pointer pl-5 pr-5' onClick={handlePlayVideo}>
          <Image
            className='thumbnail-image w-full h-full object-cover '
            src={Picture}
            alt='Video Thumbnail'
          />
          <AiOutlinePlayCircle size={100} className='play-button text-[#00FF00] absolute cursor-pointer' />
        </div>
      )}

      {showVideo && (
        <div className='video-wrapper relative w-full h-0 '>
          <iframe
            className='video-iframe absolute bg-black p-10 top-0 left-0 w-full h-full'
            src='https://www.youtube.com/embed/0cu23VMqiuk?autoplay=1'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <button className='close-button absolute text-white bg-[#00FF00] cursor-pointer' onClick={handleStopVideo}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;

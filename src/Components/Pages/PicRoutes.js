import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AllPhotos from './AllPhotos';
import ElectionPics from './ElectionPics';
import PublicMeetPics from './PublicMeetPics';
import LeaderPics from './LeaderPics';
import InagurationsPics from './InagurationsPics';
import SpiritualPics from './SpiritualPics';
import Others from './Others';

function PicRoutes() {
  return (
    <div>

        <Routes>
        <Route path="/" element={<AllPhotos/>} />
        <Route path="/all-pics" element={<AllPhotos/>} />
        <Route path="/elections-pics" element={<ElectionPics/>} />
        <Route path="/others-pics" element={<Others/>} />
        <Route path="/leader-pics" element={<LeaderPics/>} />
        <Route path="/inagurations-pics" element={<InagurationsPics/>} />
        <Route path="/public-meet-pics" element={<PublicMeetPics/>} />
        <Route path="/spiritual-pics" element={<SpiritualPics/>} />

        </Routes>
        <br/>
    </div>
  )
}

export default PicRoutes
"use client";
import React from 'react';
import { useEffect } from 'react';
import MetricCard from '@/components/MetricCard';
import { Users, Play, DollarSign } from 'lucide-react';
import { useDashboardStore } from '@/store/useDashboardStore';
import Navbar from '@/components/Navbar';

const Dashboard: React.FC = () => {

  const { 
    initializeWithDummyData, 
    totalUsers, 
    activeUsers, 
    totalStreams, 
    revenue, 
    topArtist 
  } = useDashboardStore(state => ({
    initializeWithDummyData: state.initializeWithDummyData,
    totalUsers: state.totalUsers,
    activeUsers: state.activeUsers,
    totalStreams: state.totalStreams,
    revenue: state.revenue,
    topArtist: state.topArtist,
  }));

  useEffect(() => {
    initializeWithDummyData();
  }, [initializeWithDummyData]);

  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navbar />
      <div className="grid grid-cols-5 gap-4">
        <MetricCard title="Total Users" value={totalUsers} icon={<Users size={20} />} />
        <MetricCard title="Active Users" value={activeUsers} icon={<Users size={20} />} />
        <MetricCard title="Total Streams" value={totalStreams} icon={<Play size={20} />} />
        <MetricCard title="Revenue" value={`$${revenue.toLocaleString()}`} icon={<DollarSign size={20} />} />
        <MetricCard title="Top Artist" value={topArtist} />
      </div>
    </div>
  );
};

export default Dashboard;
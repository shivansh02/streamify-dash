

"use client";
import React from 'react';
import { useEffect } from 'react';
import MetricCard from '@/components/MetricCard';
import { Play, DollarSign, User } from 'lucide-react';
import { useDashboardStore } from '@/store/useDashboardStore';
import Navbar from '@/components/Navbar';
import { UserGrowth } from '@/components/UserG';
import { Revenue } from '@/components/Revenue';
import { DataTableDemo } from '@/components/DataTable';
import { TopStreamed } from '@/components/TopStreamed';

const Dashboard: React.FC = () => {
  const { 
    initializeWithDummyData, 
    TotalUsers, 
    ActiveUsers, 
    TotalStreams, 
    revenue, 
    topArtist 
  } = useDashboardStore(state => ({
    initializeWithDummyData: state.initializeWithDummyData,
    TotalUsers: state.TotalUsers,
    ActiveUsers: state.ActiveUsers,
    TotalStreams: state.TotalStreams,
    revenue: state.revenue,
    topArtist: state.topArtist,
  }));

  useEffect(() => {
    initializeWithDummyData();
  }, [initializeWithDummyData]);

  return (
    <div className="h-screen bg-background text-foreground px-4">
      <Navbar />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 grid grid-cols-3 gap-2">
          <MetricCard title="Total Streams" value={TotalStreams.toLocaleString()} icon={<Play size={20} />} />
          <MetricCard title="Revenue" value={`$${revenue.toLocaleString()}`} icon={<DollarSign size={20} />} />
          <MetricCard title="Top Artist" value={topArtist}  icon={<User size={20} /> } />
        </div>
        <div className="col-span-2 row-span-3 flex flex-col">
          <div className="flex-grow">
            <Revenue />
          </div>
          <div className="flex-grow">
          <TopStreamed />
          </div>
        </div>
        <div className="col-span-4">  
          <UserGrowth />
        </div>
        <div className="col-span-4 bg-card text-card-foreground shadow-md">
          {/* <h2 className="text-lg font-semibold">Most streamed 5 songs</h2> */}
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
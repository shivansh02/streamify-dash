// "use client";
// import React from 'react';
// import { useEffect } from 'react';
// import MetricCard from '@/components/MetricCard';
// import { Users, Play, DollarSign } from 'lucide-react';
// import { useDashboardStore } from '@/store/useDashboardStore';
// import Navbar from '@/components/Navbar';
// // import { Component } from '@/components/UserGrowthChart';
// import {UserGrowth} from '@/components/UserG';
// import { Revenue } from '@/components/Revenue';

// const Dashboard: React.FC = () => {

//   const { 
//     initializeWithDummyData, 
//     totalUsers, 
//     activeUsers, 
//     totalStreams, 
//     revenue, 
//     topArtist 
//   } = useDashboardStore(state => ({
//     initializeWithDummyData: state.initializeWithDummyData,
//     totalUsers: state.totalUsers,
//     activeUsers: state.activeUsers,
//     totalStreams: state.totalStreams,
//     revenue: state.revenue,
//     topArtist: state.topArtist,
//   }));

//   useEffect(() => {
//     initializeWithDummyData();
//   }, [initializeWithDummyData]);

//   return (
//     <div className="min-h-screen bg-background text-foreground p-4">
//       <Navbar />
//       <div className="grid grid-cols-4 gap-4">
//         <MetricCard title="Total Streams" value={totalStreams.toLocaleString()} icon={<Play size={20} />} />
//         <MetricCard title="Revenue" value={`$${revenue.toLocaleString()}`} icon={<DollarSign size={20} />} />
//         <MetricCard title="Top Artist" value={topArtist} />
//         <div className="row-span-2">
//           <Revenue />
//         </div>
//         <div className="col-span-3">  
//           <UserGrowth />
//         </div>
//         <div className="col-span-2">
//           <h2 className="text-lg font-semibold mb-2">Most streamed 5 songs</h2>
//           <h1 >Top Songs</h1>
//         </div>
//         <div className="col-span-2">
//           <h2 className="text-lg font-semibold mb-2">Data table</h2>
//           <h1>Data table</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// "use client";
// import React from 'react';
// import { useEffect } from 'react';
// import MetricCard from '@/components/MetricCard';
// import { Users, Play, DollarSign } from 'lucide-react';
// import { useDashboardStore } from '@/store/useDashboardStore';
// import Navbar from '@/components/Navbar';
// import { UserGrowth } from '@/components/UserG';
// import { Revenue } from '@/components/Revenue';
// import { DataTableDemo } from '@/components/DataTable';

// const Dashboard: React.FC = () => {
//   const { 
//     initializeWithDummyData, 
//     totalUsers, 
//     activeUsers, 
//     totalStreams, 
//     revenue, 
//     topArtist 
//   } = useDashboardStore(state => ({
//     initializeWithDummyData: state.initializeWithDummyData,
//     totalUsers: state.totalUsers,
//     activeUsers: state.activeUsers,
//     totalStreams: state.totalStreams,
//     revenue: state.revenue,
//     topArtist: state.topArtist,
//   }));

//   useEffect(() => {
//     initializeWithDummyData();
//   }, [initializeWithDummyData]);

//   return (
//     <div className="min-h-screen bg-background text-foreground p-4">
//       <Navbar />
//       <div className="grid grid-cols-4 gap-2">
//         <MetricCard title="Total Streams" value={totalStreams.toLocaleString()} icon={<Play size={20} />} />
//         <MetricCard title="Revenue" value={`$${revenue.toLocaleString()}`} icon={<DollarSign size={20} />} />
//         <MetricCard title="Top Artist" value={topArtist} />
//         <div className="row-span-3 flex flex-col">
//           <div className="flex-grow">
//             <Revenue />
//           </div>
//           <div className="flex-grow">
//             <DataTableDemo />
//           </div>
//         </div>
//         <div className="col-span-3">  
//           <UserGrowth />
//         </div>
//         <div className="col-span-3">
//           <h2 className="text-lg font-semibold mb-2">Most streamed 5 songs</h2>
//           <h1>Top Songs</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

"use client";
import React from 'react';
import { useEffect } from 'react';
import MetricCard from '@/components/MetricCard';
import { Users, Play, DollarSign } from 'lucide-react';
import { useDashboardStore } from '@/store/useDashboardStore';
import Navbar from '@/components/Navbar';
import { UserGrowth } from '@/components/UserG';
import { Revenue } from '@/components/Revenue';
import { DataTableDemo } from '@/components/DataTable';
import { TopStreamed } from '@/components/TopStreamed';

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
    <div className="min-h-screen bg-background text-foreground px-4">
      <Navbar />
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5 grid grid-cols-3 gap-2">
          <MetricCard title="Total Streams" value={totalStreams.toLocaleString()} icon={<Play size={20} />} />
          <MetricCard title="Revenue" value={`$${revenue.toLocaleString()}`} icon={<DollarSign size={20} />} />
          <MetricCard title="Top Artist" value={topArtist} />
        </div>
        <div className="col-span-2 row-span-3 flex flex-col">
          <div className="flex-grow mb-4">
            <Revenue />
          </div>
          <div className="flex-grow">
          <TopStreamed />
          </div>
        </div>
        <div className="col-span-4 h-64">  
          <UserGrowth />
        </div>
        <div className="col-span-4 mt-12 p-4 bg-card text-card-foreground shadow-md">
          {/* <h2 className="text-lg font-semibold mb-2">Most streamed 5 songs</h2> */}
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
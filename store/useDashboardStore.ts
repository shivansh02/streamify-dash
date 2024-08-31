import { create } from 'zustand'

type Artist = {
  name: string
  streams: number
}

type Song = {
  title: string
  artist: string
  streams: number
}

type RevenueData = {
  category: string
  value: number
}

type UserGrowthData = {
  date: string
  Total: number
  Active: number
}

interface DashboardState {
  TotalUsers: number
  ActiveUsers: number
  TotalStreams: number
  revenue: number
  topArtist: string
  userGrowthData: UserGrowthData[]
  revenuePieChartData: RevenueData[]
  mostStreamedSongs: Song[]
  setMetrics: (metrics: Partial<DashboardState>) => void
  setUserGrowthData: (data: UserGrowthData[]) => void
  setRevenuePieChartData: (data: RevenueData[]) => void
  setMostStreamedSongs: (songs: Song[]) => void
  initializeWithDummyData: () => void
}

const dummyUserGrowthData: UserGrowthData[] = [
  { date: "2023-07-14", Total: 10500, Active: 7800 },
  { date: "2023-08-01", Total: 10200, Active: 6200 },
  { date: "2023-09-18", Total: 11800, Active: 8700 },
  { date: "2023-10-22", Total: 12500, Active: 9100 },
  { date: "2023-11-11", Total: 10200, Active: 11500 },
  { date: "2023-12-07", Total: 14800, Active: 9900 },
  { date: "2024-01-03", Total: 14500, Active: 10300 },
  { date: "2024-02-14", Total: 17200, Active: 15800 },
  { date: "2024-03-21", Total: 12800, Active: 10200 },
  { date: "2024-04-30", Total: 16500, Active: 11700 },
  { date: "2024-05-19", Total: 17200, Active: 9100 },
  { date: "2024-06-25", Total: 17800, Active: 12600 },
  { date: "2024-07-08", Total: 20500, Active: 13000 },
  { date: "2024-08-30", Total: 19200, Active: 13500 },
];

const dummyRevenuePieChartData: RevenueData[] = [
  { category: 'Subscriptions', value: 7500000 },
  { category: 'Advertisements', value: 2000000 },
  { category: 'Merchandise', value: 500000 },
  { category: 'Other', value: 2020 },
]

const dummyMostStreamedSongs: Song[] = [
  { title: 'Shake It Off', artist: 'Talor sift', streams: 1500000 },
  { title: 'Blinding Lights', artist: 'The Weekend', streams: 1400000 },
  { title: 'Shape of You', artist: 'Ed Sheeran', streams: 1300000 },
  { title: 'Dance Monkey', artist: 'Tones and I', streams: 1200000 },
  { title: 'Someone Like You', artist: 'Adele', streams: 1100000 },
]

export const useDashboardStore = create<DashboardState>((set) => ({
  TotalUsers: 0,
  ActiveUsers: 0,
  TotalStreams: 0,
  revenue: 0,
  topArtist: '',
  userGrowthData: [],
  revenuePieChartData: [],
  mostStreamedSongs: [],

  setMetrics: (metrics) => set((state) => ({ ...state, ...metrics })),
  setUserGrowthData: (data) => set({ userGrowthData: data }),
  setRevenuePieChartData: (data) => set({ revenuePieChartData: data }),
  setMostStreamedSongs: (songs) => set({ mostStreamedSongs: songs }),

  initializeWithDummyData: () => set({
    TotalUsers: 10002020,
    ActiveUsers: 10002020,
    TotalStreams: 121000,
    revenue: 8020,
    topArtist: 'Drake',
    userGrowthData: dummyUserGrowthData,
    revenuePieChartData: dummyRevenuePieChartData,
    mostStreamedSongs: dummyMostStreamedSongs,
  }),
}))
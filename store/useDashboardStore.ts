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
  users: number
}

interface DashboardState {
  totalUsers: number
  activeUsers: number
  totalStreams: number
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
  { date: '2024-01', users: 8000000 },
  { date: '2024-02', users: 8500000 },
  { date: '2024-03', users: 9000000 },
  { date: '2024-04', users: 9500000 },
  { date: '2024-05', users: 10002020 },
]

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
  totalUsers: 0,
  activeUsers: 0,
  totalStreams: 0,
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
    totalUsers: 10002020,
    activeUsers: 10002020,
    totalStreams: 10002020,
    revenue: 10002020,
    topArtist: 'Talor sift',
    userGrowthData: dummyUserGrowthData,
    revenuePieChartData: dummyRevenuePieChartData,
    mostStreamedSongs: dummyMostStreamedSongs,
  }),
}))
import React from 'react';
import { useDashboardStore } from '../store/useDashboardStore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
const StreamsDataTable: React.FC = () => {
  const { recentStreams } = useDashboardStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Song Name</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead>Date Streamed</TableHead>
              <TableHead>Stream Count</TableHead>
              <TableHead>User ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentStreams.map((stream, index) => (
              <TableRow key={index}>
                <TableCell>{stream.songName}</TableCell>
                <TableCell>{stream.artist}</TableCell>
                <TableCell>{stream.dateStreamed}</TableCell>
                <TableCell>{stream.streamCount}</TableCell>
                <TableCell>{stream.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StreamsDataTable;
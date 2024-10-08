import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MetricCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon }) => {
  return (
    <Card className="bg-card text-card-foreground shadow-md h-18 p-2 ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold px-2 text-foreground">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
      </CardContent>
    </Card>
  );
};



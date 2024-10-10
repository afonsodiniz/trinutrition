import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RaceType {
  name: string;
  swim: number;
  bike: number;
  run: number;
  swimPercent: number;
  bikePercent: number;
  runPercent: number;
  t1Percent: number;
  t2Percent: number;
}

const raceTypes: RaceType[] = [
  { name: 'Sprint', swim: 0.75, bike: 20, run: 5, swimPercent: 16, bikePercent: 41, runPercent: 33, t1Percent: 5, t2Percent: 5 },
  { name: 'Olympic', swim: 1.5, bike: 40, run: 10, swimPercent: 16, bikePercent: 39, runPercent: 35, t1Percent: 5, t2Percent: 5 },
  { name: 'Half Ironman / 70.3', swim: 1.9, bike: 90, run: 21.1, swimPercent: 9, bikePercent: 45, runPercent: 36, t1Percent: 5, t2Percent: 5 },
  { name: 'Ironman', swim: 3.8, bike: 180, run: 42.2, swimPercent: 8, bikePercent: 45, runPercent: 37, t1Percent: 5, t2Percent: 5 },
]

interface RaceTimelineProps {
  selectedRace: string;
}

export default function RaceTimeline({ selectedRace }: RaceTimelineProps) {
  const race = raceTypes.find(r => r.name === selectedRace) || raceTypes[0]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Race Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-20 w-full rounded-full overflow-hidden bg-gray-200 mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-gray-600 flex items-center justify-center text-white text-sm font-medium" 
            style={{ width: `${race.swimPercent}%` }}
          >
            {race.swim} km
          </div>
          <div 
            className="absolute top-0 h-full bg-gray-300 flex items-center justify-center text-black text-sm font-medium" 
            style={{ left: `${race.swimPercent}%`, width: `${race.t1Percent}%` }}
          >
            T1
          </div>
          <div 
            className="absolute top-0 h-full bg-gray-400 flex items-center justify-center text-black text-sm font-medium" 
            style={{ left: `${race.swimPercent + race.t1Percent}%`, width: `${race.bikePercent}%` }}
          >
            {race.bike} km
          </div>
          <div 
            className="absolute top-0 h-full bg-gray-300 flex items-center justify-center text-black text-sm font-medium" 
            style={{ left: `${race.swimPercent + race.t1Percent + race.bikePercent}%`, width: `${race.t2Percent}%` }}
          >
            T2
          </div>
          <div 
            className="absolute top-0 h-full bg-gray-500 flex items-center justify-center text-white text-sm font-medium" 
            style={{ left: `${race.swimPercent + race.t1Percent + race.bikePercent + race.t2Percent}%`, width: `${race.runPercent}%` }}
          >
            {race.run} km
          </div>
        </div>
        <div className="relative w-full mt-2 text-sm font-medium">
          <span className="absolute left-0">Start</span>
          <span className="absolute" style={{ left: `${race.swimPercent / 2}%`, transform: 'translateX(-50%)' }}>Swim</span>
          <span className="absolute" style={{ left: `${race.swimPercent + race.t1Percent / 2}%`, transform: 'translateX(-50%)' }}>T1</span>
          <span className="absolute" style={{ left: `${race.swimPercent + race.t1Percent + race.bikePercent / 2}%`, transform: 'translateX(-50%)' }}>Bike</span>
          <span className="absolute" style={{ left: `${race.swimPercent + race.t1Percent + race.bikePercent + race.t2Percent / 2}%`, transform: 'translateX(-50%)' }}>T2</span>
          <span className="absolute" style={{ left: `${race.swimPercent + race.t1Percent + race.bikePercent + race.t2Percent + race.runPercent / 2}%`, transform: 'translateX(-50%)' }}>Run</span>
          <span className="absolute right-0">Finish</span>
        </div>
      </CardContent>
    </Card>
  )
}
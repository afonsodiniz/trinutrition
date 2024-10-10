"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface RaceType {
  name: string;
  swim: number;
  bike: number;
  run: number;
}

const raceTypes: RaceType[] = [
  { name: 'Sprint', swim: 0.75, bike: 20, run: 5 },
  { name: 'Olympic', swim: 1.5, bike: 40, run: 10 },
  { name: 'Half Ironman / 70.3', swim: 1.9, bike: 90, run: 21.1 },
  { name: 'Ironman', swim: 3.8, bike: 180, run: 42.2 },
]

interface RaceInformationProps {
  onRaceChange: (raceName: string) => void;
}

export default function Component({ onRaceChange }: RaceInformationProps) {
  const [selectedRace, setSelectedRace] = useState<RaceType>(raceTypes[0])

  const handleRaceChange = (race: RaceType) => {
    setSelectedRace(race)
    onRaceChange(race.name)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Race Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="race-type">Race Type</Label>
          <div className="flex flex-wrap gap-2" id="race-type" role="radiogroup">
            {raceTypes.map((race) => (
              <Button
                key={race.name}
                variant={selectedRace.name === race.name ? "default" : "outline"}
                onClick={() => handleRaceChange(race)}
                aria-checked={selectedRace.name === race.name}
                role="radio"
              >
                {race.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Race Distances</Label>
          <div className="grid grid-cols-2 gap-2 text-sm bg-muted p-4 rounded-md">
            <div>Swim:</div>
            <div>{selectedRace.swim} km</div>
            <div>Bike:</div>
            <div>{selectedRace.bike} km</div>
            <div>Run:</div>
            <div>{selectedRace.run} km</div>
            <div className="font-semibold">Total:</div>
            <div className="font-semibold">{(selectedRace.swim + selectedRace.bike + selectedRace.run).toFixed(1)} km</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
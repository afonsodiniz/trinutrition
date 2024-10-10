"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RaceInformation from '@/components/RaceInformation'
import RaceTimeline from '@/components/Racetimeline'

export default function Component() {
  const [selectedRace, setSelectedRace] = useState('Sprint')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-8">Triathlon Nutrition Planner</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RaceInformation onRaceChange={setSelectedRace} />
          <Card>
            <CardHeader>
              <CardTitle>Nutrition Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nutrition items and carbs per hour settings will go here.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Race Nutrition Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <RaceTimeline selectedRace={selectedRace} />
              <p className="mt-4">Drag and drop interface for planning nutrition will go here.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
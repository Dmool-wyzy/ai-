"use client"

import { useState, useEffect } from "react"
import { Sun, Cloud, CloudRain, Snowflake } from "lucide-react"

export function DateTimeWeather() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [weather, setWeather] = useState({
    condition: "sunny", // sunny, cloudy, rainy, snowy
    temperature: 25,
    location: "模拟城市",
  })

  useEffect(() => {
    // 更新时间
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // 模拟天气更新（每分钟随机更新一次，或根据时间段变化）
    const weatherSimulator = setInterval(() => {
      const conditions = ["sunny", "cloudy", "rainy", "snowy"]
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
      const randomTemp = Math.floor(Math.random() * 20) + 10 // 10-30度

      setWeather({
        condition: randomCondition,
        temperature: randomTemp,
        location: "模拟城市",
      })
    }, 60000) // 每分钟更新一次

    return () => {
      clearInterval(timer)
      clearInterval(weatherSimulator)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "short" })
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-4 w-4 text-yellow-500" />
      case "cloudy":
        return <Cloud className="h-4 w-4 text-slate-400" />
      case "rainy":
        return <CloudRain className="h-4 w-4 text-blue-500" />
      case "snowy":
        return <Snowflake className="h-4 w-4 text-cyan-500" />
      default:
        return <Sun className="h-4 w-4 text-yellow-500" />
    }
  }

  return (
    <div className="flex items-center space-x-4 text-sm text-slate-600">
      <div className="flex items-center space-x-1">
        {getWeatherIcon(weather.condition)}
        <span>{weather.temperature}°C</span>
      </div>
      <span>{formatTime(currentTime)}</span>
      <span>{formatDate(currentTime)}</span>
    </div>
  )
}

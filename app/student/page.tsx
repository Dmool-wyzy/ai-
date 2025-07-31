"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Activity,
  Target,
  Clock,
  Play,
  Pause,
  MapPin,
  AlertTriangle,
  Brain,
  Camera,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"
import { ModeSwitcher } from "@/components/mode-switcher"

export default function StudentDashboard() {
  const [isTraining, setIsTraining] = useState(false)
  const [heartRate, setHeartRate] = useState(78)
  const [bloodOxygen, setBloodOxygen] = useState(98)
  const [trainingTime, setTrainingTime] = useState(0)
  const [showModeSwitcher, setShowModeSwitcher] = useState(false)

  // 模拟实时数据更新
  const startTraining = () => {
    setIsTraining(true)
    const interval = setInterval(() => {
      setHeartRate((prev) => Math.round(Math.min(180, prev + Math.random() * 10 - 5)))
      setBloodOxygen((prev) => Math.round(Math.max(95, Math.min(100, prev + Math.random() * 2 - 1))))
      setTrainingTime((prev) => prev + 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(interval)
      setIsTraining(false)
    }, 30000) // 30秒演示
  }

  // 训练计划数据和筛选状态
  const [trainingPlans, setTrainingPlans] = useState([
    { day: "周一", activity: "有氧运动", duration: "30分钟", status: "completed", type: "cardio", date: "2024-07-29" },
    {
      day: "周二",
      activity: "力量训练",
      duration: "25分钟",
      status: "completed",
      type: "strength",
      date: "2024-07-30",
    },
    {
      day: "周三",
      activity: "柔韧性训练",
      duration: "20分钟",
      status: "current",
      type: "flexibility",
      date: "2024-07-31",
    },
    {
      day: "周四",
      activity: "球类运动",
      duration: "40分钟",
      status: "pending",
      type: "ball_sports",
      date: "2024-08-01",
    },
    { day: "周五", activity: "综合训练", duration: "35分钟", status: "pending", type: "mixed", date: "2024-08-02" },
    { day: "周六", activity: "休息", duration: "0分钟", status: "pending", type: "rest", date: "2024-08-03" },
    { day: "周日", activity: "户外跑步", duration: "60分钟", status: "pending", type: "cardio", date: "2024-08-04" },
  ])
  const [filterPlanType, setFilterPlanType] = useState("all")
  const [filterPlanStatus, setFilterPlanStatus] = useState("all")

  const filteredTrainingPlans = trainingPlans.filter((plan) => {
    const matchesType = filterPlanType === "all" || plan.type === filterPlanType
    const matchesStatus = filterPlanStatus === "all" || plan.status === filterPlanStatus
    return matchesType && matchesStatus
  })

  // 历史记录数据和筛选状态
  const [historyRecords, setHistoryRecords] = useState([
    { date: "2024-07-25", activity: "有氧运动", duration: "30分钟", type: "cardio", intensity: "中" },
    { date: "2024-07-20", activity: "力量训练", duration: "25分钟", type: "strength", intensity: "高" },
    { date: "2024-07-15", activity: "柔韧性训练", duration: "20分钟", type: "flexibility", intensity: "低" },
    { date: "2024-07-10", activity: "球类运动", duration: "40分钟", type: "ball_sports", intensity: "中" },
    { date: "2024-07-05", activity: "综合训练", duration: "35分钟", type: "mixed", intensity: "高" },
    { date: "2024-06-30", activity: "休息", duration: "0分钟", type: "rest", intensity: "低" },
    { date: "2024-06-28", activity: "户外跑步", duration: "60分钟", type: "cardio", intensity: "中" },
    { date: "2024-06-25", activity: "力量训练", duration: "30分钟", type: "strength", intensity: "高" },
    { date: "2024-06-20", activity: "柔韧性训练", duration: "20分钟", type: "flexibility", intensity: "低" },
  ])
  const [historyFilterType, setHistoryFilterType] = useState("all")
  const [historyFilterIntensity, setHistoryFilterIntensity] = useState("all")
  const [historyFilterDate, setHistoryFilterDate] = useState("") // 用于日期筛选

  const filteredHistoryRecords = historyRecords.filter((record) => {
    const matchesType = historyFilterType === "all" || record.type === historyFilterType
    const matchesIntensity = historyFilterIntensity === "all" || record.intensity === historyFilterIntensity
    const matchesDate = historyFilterDate === "" || record.date === historyFilterDate
    return matchesType && matchesIntensity && matchesDate
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800">AI Sports</span>
            </Link>
            <Badge className="bg-blue-50 text-blue-700 border-blue-200">普通学生</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-slate-600">欢迎回来，张同学</div>
            <Button variant="outline" size="sm" onClick={() => setShowModeSwitcher(true)}>
              <Users className="h-4 w-4 mr-2" />
              切换模式
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左侧主要内容 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 实时健康监测 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span>实时健康监测</span>
                    </CardTitle>
                    <CardDescription>运动手环数据 • 大数据分析 • 智能预警</CardDescription>
                  </div>
                  <Badge className={`${isTraining ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`}>
                    {isTraining ? "监测中" : "待机"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">{heartRate}</div>
                    <div className="text-sm text-slate-600">心率 (BPM)</div>
                    <Progress value={(heartRate / 180) * 100} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-500 mb-2">{bloodOxygen}%</div>
                    <div className="text-sm text-slate-600">血氧饱和度</div>
                    <Progress value={bloodOxygen} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">
                      {Math.floor(trainingTime / 60)}:{(trainingTime % 60).toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-slate-600">运动时长</div>
                    <div className="mt-2 flex justify-center">
                      <Button
                        size="sm"
                        onClick={startTraining}
                        disabled={isTraining}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      >
                        {isTraining ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 紧急救助系统 */}
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-medium text-orange-800">智能紧急救助系统</div>
                      <div className="text-sm text-orange-600">异常数据自动触发 • GPS定位 • 就近调用师生和AED设备</div>
                    </div>
                    <Button size="sm" variant="outline" className="border-orange-300 text-orange-700 bg-transparent">
                      <MapPin className="h-4 w-4 mr-2" />
                      定位状态
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 个性化训练方案 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  <span>AI个性化训练方案</span>
                </CardTitle>
                <CardDescription>大语言模型生成 • 体育老师把关 • 自我强化学习优化</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="current" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="current">当前方案</TabsTrigger>
                    <TabsTrigger value="history">历史记录</TabsTrigger>
                    <TabsTrigger value="generate">生成新方案</TabsTrigger>
                  </TabsList>

                  <TabsContent value="current" className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-slate-800 mb-4">本周训练计划</h3>
                      {/* 筛选器 */}
                      <div className="flex gap-4 mb-4">
                        <select
                          className="w-full p-2 border border-slate-300 rounded-lg text-sm text-slate-700"
                          value={filterPlanType}
                          onChange={(e) => setFilterPlanType(e.target.value)}
                        >
                          <option value="all">所有类型</option>
                          <option value="cardio">有氧运动</option>
                          <option value="strength">力量训练</option>
                          <option value="flexibility">柔韧性训练</option>
                          <option value="ball_sports">球类运动</option>
                          <option value="mixed">综合训练</option>
                          <option value="rest">休息</option>
                        </select>
                        <select
                          className="w-full p-2 border border-slate-300 rounded-lg text-sm text-slate-700"
                          value={filterPlanStatus}
                          onChange={(e) => setFilterPlanStatus(e.target.value)}
                        >
                          <option value="all">所有状态</option>
                          <option value="completed">已完成</option>
                          <option value="current">进行中</option>
                          <option value="pending">待完成</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        {filteredTrainingPlans.length > 0 ? (
                          filteredTrainingPlans.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-3 h-3 rounded-full ${
                                    item.status === "completed"
                                      ? "bg-green-500"
                                      : item.status === "current"
                                        ? "bg-blue-500"
                                        : "bg-slate-300"
                                  }`}
                                ></div>
                                <div>
                                  <div className="font-medium text-slate-800">
                                    {item.day} - {item.activity}
                                  </div>
                                  <div className="text-sm text-slate-600">{item.duration}</div>
                                </div>
                              </div>
                              <Badge variant={item.status === "completed" ? "default" : "secondary"}>
                                {item.status === "completed"
                                  ? "已完成"
                                  : item.status === "current"
                                    ? "进行中"
                                    : "待完成"}
                              </Badge>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8 text-slate-500">
                            <p>没有匹配的训练计划</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="space-y-4">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-slate-800 mb-4">训练历史记录</h3>
                      {/* 历史记录筛选器 */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <select
                          className="w-full p-2 border border-slate-300 rounded-lg text-sm text-slate-700"
                          value={historyFilterType}
                          onChange={(e) => setHistoryFilterType(e.target.value)}
                        >
                          <option value="all">所有类型</option>
                          <option value="cardio">有氧运动</option>
                          <option value="strength">力量训练</option>
                          <option value="flexibility">柔韧性训练</option>
                          <option value="ball_sports">球类运动</option>
                          <option value="mixed">综合训练</option>
                          <option value="rest">休息</option>
                        </select>
                        <select
                          className="w-full p-2 border border-slate-300 rounded-lg text-sm text-slate-700"
                          value={historyFilterIntensity}
                          onChange={(e) => setHistoryFilterIntensity(e.target.value)}
                        >
                          <option value="all">所有强度</option>
                          <option value="高">高</option>
                          <option value="中">中</option>
                          <option value="低">低</option>
                        </select>
                        <input
                          type="date"
                          className="w-full p-2 border border-slate-300 rounded-lg text-sm text-slate-700"
                          value={historyFilterDate}
                          onChange={(e) => setHistoryFilterDate(e.target.value)}
                        />
                      </div>
                      {filteredHistoryRecords.length > 0 ? (
                        <div className="space-y-3">
                          {filteredHistoryRecords.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-white rounded-lg border"
                            >
                              <div>
                                <div className="font-medium text-slate-800">
                                  {item.date} - {item.activity}
                                </div>
                                <div className="text-sm text-slate-600">
                                  {item.duration} • 强度: {item.intensity}
                                </div>
                              </div>
                              <Badge variant="secondary">{item.type}</Badge>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-slate-500">
                          <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>没有匹配的历史记录</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="generate" className="space-y-4">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-slate-800 mb-4">生成新的训练方案</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">训练目标</label>
                          <select className="w-full p-2 border border-slate-300 rounded-lg">
                            <option>提高体能</option>
                            <option>减重塑形</option>
                            <option>增强力量</option>
                            <option>提升柔韧性</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">可用时间</label>
                          <select className="w-full p-2 border border-slate-300 rounded-lg">
                            <option>每天30分钟</option>
                            <option>每天45分钟</option>
                            <option>每天60分钟</option>
                          </select>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                          <Brain className="h-4 w-4 mr-2" />
                          AI生成方案
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* 运动姿态矫正 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-green-500" />
                  <span>基础姿态矫正</span>
                </CardTitle>
                <CardDescription>OpenPose技术 • 实时检测 • 动作指导</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-100 rounded-lg p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Camera className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">摄像头姿态检测</h3>
                  <p className="text-slate-600 mb-4">开启摄像头进行实时动作分析和姿态矫正</p>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                    <Play className="h-4 w-4 mr-2" />
                    开始检测
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧边栏 */}
          <div className="space-y-6">
            {/* 今日概览 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">今日概览</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">训练完成度</span>
                  <span className="font-semibold">60%</span>
                </div>
                <Progress value={60} />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">消耗卡路里</span>
                  <span className="font-semibold">245 kcal</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">运动时长</span>
                  <span className="font-semibold">45 分钟</span>
                </div>
              </CardContent>
            </Card>

            {/* 教师反馈 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">教师反馈</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">李</span>
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">李老师</div>
                      <div className="text-sm text-slate-600 mt-1">"本周训练表现不错，建议增加一些核心力量练习。"</div>
                      <div className="text-xs text-slate-500 mt-2">2小时前</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 快捷操作 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">快捷操作</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Target className="h-4 w-4 mr-2" />
                  设置训练目标
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Clock className="h-4 w-4 mr-2" />
                  查看训练历史
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Activity className="h-4 w-4 mr-2" />
                  健康数据导出
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ModeSwitcher open={showModeSwitcher} onOpenChange={setShowModeSwitcher} currentMode="student" />
    </div>
  )
}

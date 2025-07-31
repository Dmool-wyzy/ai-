"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Play, Brain, Camera, Zap, Shield, Clock, Activity, Cpu, Database, Heart } from "lucide-react"
import Link from "next/link"
import { UserModeSelector } from "@/components/user-mode-selector"
import { DateTimeWeather } from "@/components/date-time-weather" // 导入新的组件

export default function Component() {
  const [showModeSelector, setShowModeSelector] = useState(false)
  const [isDaytime, setIsDaytime] = useState(true) // 新增状态，用于判断白天/夜晚

  useEffect(() => {
    const updateDaytimeStatus = () => {
      const hour = new Date().getHours()
      setIsDaytime(hour >= 6 && hour < 18) // 假设早上6点到晚上6点是白天
    }

    updateDaytimeStatus() // 初始化
    const interval = setInterval(updateDaytimeStatus, 60000) // 每分钟更新一次

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-1000 ${
        isDaytime ? "bg-slate-50" : "bg-slate-950 text-slate-50" // 根据白天/夜晚切换背景色
      }`}
    >
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-32 h-32 border rotate-45 opacity-30 transition-colors duration-1000 ${
            isDaytime ? "border-cyan-200" : "border-cyan-700"
          }`}
        ></div>
        <div
          className={`absolute top-40 right-20 w-24 h-24 clip-path-triangle opacity-20 transition-colors duration-1000 ${
            isDaytime ? "bg-blue-100" : "bg-blue-900"
          }`}
        ></div>
        <div
          className={`absolute bottom-40 left-20 w-40 h-40 border-2 rounded-full opacity-20 transition-colors duration-1000 ${
            isDaytime ? "border-slate-200" : "border-slate-700"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-28 h-28 transform rotate-12 opacity-30 transition-colors duration-1000 ${
            isDaytime ? "bg-cyan-50" : "bg-cyan-900"
          }`}
        ></div>
      </div>

      {/* Header */}
      <header
        className={`relative z-50 px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md transition-colors duration-1000 ${
          isDaytime ? "border-slate-200 bg-white/80" : "border-slate-800 bg-slate-900/80"
        }`}
      >
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border border-cyan-400 rotate-45"></div>
          </div>
          <span className={`font-bold text-xl ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>AI Sports</span>
        </Link>
        <nav className="ml-auto flex gap-8">
          <Link
            href="#features"
            className={`text-sm font-medium hover:text-cyan-600 transition-colors ${
              isDaytime ? "text-slate-600" : "text-slate-50"
            }`}
          >
            功能
          </Link>
          <Link
            href="#technology"
            className={`text-sm font-medium hover:text-cyan-600 transition-colors ${
              isDaytime ? "text-slate-600" : "text-slate-50"
            }`}
          >
            技术
          </Link>
          <Link
            href="#pricing"
            className={`text-sm font-medium hover:text-cyan-600 transition-colors ${
              isDaytime ? "text-slate-600" : "text-slate-50"
            }`}
          >
            定价
          </Link>
          <Link
            href="/chat"
            className={`text-sm font-medium hover:text-cyan-600 transition-colors ${
              isDaytime ? "text-slate-600" : "text-slate-50"
            }`}
          >
            AI问答
          </Link>
        </nav>
        <div className="ml-8 flex items-center space-x-3">
          <DateTimeWeather /> {/* 新增的时间/天气组件 */}
          <Button variant="ghost" size="sm" className={`${isDaytime ? "text-slate-600" : "text-slate-50"}`}>
            登录
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            onClick={() => setShowModeSelector(true)}
          >
            开始使用
          </Button>
        </div>
      </header>

      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-cyan-50 text-cyan-700 border-cyan-200 font-medium">AI驱动 • 精准分析</Badge>
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    智能体育
                    <br />
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      科学训练
                    </span>
                  </h1>
                  <p className={`text-xl leading-relaxed max-w-lg ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                    基于大语言模型和OpenPose视觉技术的智能体育教学平台，为普通学生和专业运动员提供个性化训练和实时姿态矫正
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                    onClick={() => setShowModeSelector(true)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    立即体验
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`border-slate-300 hover:bg-slate-50 bg-transparent ${
                      isDaytime ? "text-slate-700" : "text-slate-300 border-slate-700 hover:bg-slate-800"
                    }`}
                  >
                    <Activity className="mr-2 h-5 w-5" />
                    查看演示
                  </Button>
                </div>
                <div className="flex items-center space-x-8 pt-4">
                  <div className={`flex items-center space-x-2 ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm">实时分析</span>
                  </div>
                  <div className={`flex items-center space-x-2 ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">AI指导</span>
                  </div>
                  <div className={`flex items-center space-x-2 ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span className="text-sm">数据驱动</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Geometric decorations */}
                <div
                  className={`absolute -top-8 -left-8 w-16 h-16 border-2 rotate-45 transition-colors duration-1000 ${
                    isDaytime ? "border-cyan-200" : "border-cyan-700"
                  }`}
                ></div>
                <div
                  className={`absolute -bottom-8 -right-8 w-12 h-12 rotate-12 transition-colors duration-1000 ${
                    isDaytime ? "bg-blue-100" : "bg-blue-900"
                  }`}
                ></div>
                <div className="absolute top-1/2 -right-12 w-24 h-1 bg-gradient-to-r from-cyan-300 to-transparent"></div>

                {/* Main visual */}
                <div
                  className={`relative rounded-2xl p-8 border transition-colors duration-1000 ${
                    isDaytime
                      ? "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-200"
                      : "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
                  }`}
                >
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-12 rounded-lg ${
                          i === 4
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                            : isDaytime
                              ? "bg-slate-300"
                              : "bg-slate-700"
                        } ${i === 1 || i === 7 ? (isDaytime ? "bg-blue-200" : "bg-blue-800") : ""}`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className={`w-3 h-3 rounded-full ${isDaytime ? "bg-slate-400" : "bg-slate-600"}`}></div>
                    </div>
                    <div className={`text-xs font-mono ${isDaytime ? "text-slate-500" : "text-slate-400"}`}>
                      AI ANALYSIS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className={`py-20 relative transition-colors duration-1000 ${isDaytime ? "bg-white" : "bg-slate-900"}`}
        >
          <div className="container px-6 mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-4">核心技术</Badge>
              <h2 className={`text-4xl font-bold mb-4 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                AI驱动的智能分析
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                结合计算机视觉、深度学习和运动科学，提供精准的动作分析和个性化指导
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  isDaytime ? "bg-white" : "bg-slate-800"
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Camera className="h-7 w-7 text-cyan-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-cyan-300 rotate-45"></div>
                  </div>
                  <CardTitle className={`text-xl ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                    智能训练方案制定
                  </CardTitle>
                  <CardDescription className={`${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                    基于LLM的个性化训练方案生成，体育老师把关，实时数据反馈动态优化
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>自我强化学习</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>动态方案更新</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>专业教师监督</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  isDaytime ? "bg-white" : "bg-slate-800"
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Cpu className="h-7 w-7 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-100 rotate-12"></div>
                  </div>
                  <CardTitle className={`text-xl ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                    OpenPose姿态矫正
                  </CardTitle>
                  <CardDescription className={`${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                    基于开源OpenPose模型和外接摄像头，实时检测和矫正运动姿态
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>实时姿态检测</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>技术动作分析</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                        多姿态融合分析
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  isDaytime ? "bg-white" : "bg-slate-800"
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Database className="h-7 w-7 text-slate-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border border-slate-300 rounded-full"></div>
                  </div>
                  <CardTitle className={`text-xl ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                    实时健康监测
                  </CardTitle>
                  <CardDescription className={`${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                    运动手环接入大数据技术栈，监测心率血氧，紧急情况智能定位救助
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>实时生理监测</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>智能定位</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                      <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>紧急救助调用</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User Scenarios Section */}
        <section
          className={`py-20 relative transition-colors duration-1000 ${isDaytime ? "bg-slate-50" : "bg-slate-950"}`}
        >
          <div className="container px-6 mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-4">用户场景</Badge>
              <h2 className={`text-4xl font-bold mb-4 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                不同人群，同样适用
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                  普通学生
                </h3>
                <CardContent className="space-y-6">
                  {/* 保持现有的功能介绍内容 */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                          个性化训练方案制定
                        </h4>
                        <p className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                          LLM生成个性化方案，体育老师把关，自我强化学习持续优化
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                          实时健康监测
                        </h4>
                        <p className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                          运动手环监测心率血氧，大数据分析，智能定位紧急救助
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Camera className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                          基础姿态矫正
                        </h4>
                        <p className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                          OpenPose实时检测，基础动作指导和纠错提醒
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`pt-4 border-t ${isDaytime ? "border-slate-100" : "border-slate-800"}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        自我强化学习
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        实时监测
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        紧急救助
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        教师监督
                      </Badge>
                    </div>
                    <Link href="/student">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                        进入学生模式
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                  专业运动员
                </h3>
                <CardContent className="space-y-6">
                  {/* 保持现有的功能介绍内容 */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Camera className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                          高精度姿态矫正
                        </h4>
                        <p className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                          OpenPose+外接摄像头，多姿态融合分析，精准识别技术缺陷
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="h-5 w-5 text-pink-600" />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                          专业饮食调控
                        </h4>
                        <p className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                          体脂率实时监测，AI生成专业食谱推荐和营养配比
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                          综合缺陷分析
                        </h4>
                        <p className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                          视觉理解结合身体状况，深度分析运动员技术短板
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`pt-4 border-t ${isDaytime ? "border-slate-100" : "border-slate-800"}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        多姿态融合
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        体脂监测
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        营养配比
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        缺陷识别
                      </Badge>
                    </div>
                    <Link href="/athlete">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        进入专业模式
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section
          id="technology"
          className={`py-20 relative transition-colors duration-1000 ${isDaytime ? "bg-slate-50" : "bg-slate-900"}`}
        >
          <div className="container px-6 mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-slate-100 text-slate-700 border-slate-200 mb-4">技术架构</Badge>
              <h2 className={`text-4xl font-bold mb-4 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                先进的技术栈
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "大语言模型", desc: "GPT + 自我强化学习", icon: "🧠" },
                { name: "视觉识别", desc: "OpenPose + 外接摄像头", icon: "👁️" },
                { name: "实时监测", desc: "IoT传感器 + 大数据", icon: "⚡" },
                { name: "智能定位", desc: "GPS + 紧急救助系统", icon: "☁️" },
              ].map((tech, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-md hover:shadow-lg transition-shadow text-center p-6 ${
                    isDaytime ? "bg-white" : "bg-slate-800"
                  }`}
                >
                  <div className="text-3xl mb-4">{tech.icon}</div>
                  <h3 className={`font-semibold mb-2 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                    {tech.name}
                  </h3>
                  <p className={`text-sm font-mono ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>{tech.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-20 transition-colors duration-1000 ${isDaytime ? "bg-white" : "bg-slate-900"}`}>
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "25个", label: "关键点检测", color: "text-cyan-600" },
                { number: "30ms", label: "响应延迟", color: "text-blue-600" },
                { number: "LLM+OpenPose", label: "核心技术", color: isDaytime ? "text-slate-600" : "text-slate-300" },
                { number: "24/7", label: "智能监护", color: isDaytime ? "text-slate-600" : "text-slate-300" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className={`text-4xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className={`text-sm uppercase tracking-wide ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                    {stat.label}
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className={`py-20 transition-colors duration-1000 ${isDaytime ? "bg-slate-50" : "bg-slate-950"}`}
        >
          <div className="container px-6 mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-4">定价方案</Badge>
              <h2 className={`text-4xl font-bold mb-4 ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                选择适合的方案
              </h2>
              <p className={`text-xl ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>简单透明的定价，无隐藏费用</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "基础版",
                  price: "免费",
                  period: "",
                  features: ["基础动作分析", "3个训练模式", "每日1小时", "社区支持"],
                  popular: false,
                },
                {
                  name: "专业版",
                  price: "¥99",
                  period: "/月",
                  features: ["高级AI分析", "无限训练时间", "个性化计划", "专属教练", "详细报告", "优先支持"],
                  popular: true,
                },
                {
                  name: "企业版",
                  price: "¥299",
                  period: "/月",
                  features: ["团队管理", "API接口", "定制开发", "专属服务", "数据导出", "SLA保障"],
                  popular: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? "ring-2 ring-cyan-500 scale-105" : ""
                  } ${isDaytime ? "bg-white" : "bg-slate-800"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">推荐</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className={`text-xl ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className={`text-4xl font-bold ${isDaytime ? "text-slate-800" : "text-slate-50"}`}>
                        {plan.price}
                      </span>
                      <span className={`${isDaytime ? "text-slate-600" : "text-slate-300"}`}>{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                          <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                          : isDaytime
                            ? "border-slate-300 text-slate-700 hover:bg-slate-50"
                            : "border-slate-700 text-slate-300 hover:bg-slate-700"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.price === "免费" ? "立即开始" : "选择方案"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
          {/* Geometric background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400/20 rotate-45"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-400/20 rotate-12"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-gradient-to-b from-cyan-400/30 to-transparent"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/10 rotate-45"></div>
          </div>

          <div className="container px-6 mx-auto text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">开启智能运动新时代</h2>
              <p className="text-xl text-slate-300">加入数万名用户，体验AI驱动的个性化体育教学</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="输入邮箱地址"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 backdrop-blur-sm"
                />
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                  onClick={() => setShowModeSelector(true)}
                >
                  免费开始
                </Button>
              </div>
              <div className="flex justify-center space-x-8 pt-8">
                <div className="flex items-center space-x-2 text-slate-300">
                  <Zap className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">即时部署</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">数据安全</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <span className="text-sm">7×24支持</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`border-t py-8 transition-colors duration-1000 ${isDaytime ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"}`}
      >
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className={`text-sm ${isDaytime ? "text-slate-600" : "text-slate-300"}`}>
                © 2024 AI Sports. 保留所有权利
              </span>
            </div>
            <nav className="flex space-x-6">
              <Link
                href="#"
                className={`text-sm hover:text-cyan-600 transition-colors ${
                  isDaytime ? "text-slate-600" : "text-slate-300"
                }`}
              >
                服务条款
              </Link>
              <Link
                href="#"
                className={`text-sm hover:text-cyan-600 transition-colors ${
                  isDaytime ? "text-slate-600" : "text-slate-300"
                }`}
              >
                隐私政策
              </Link>
              <Link
                href="#"
                className={`text-sm hover:text-cyan-600 transition-colors ${
                  isDaytime ? "text-slate-600" : "text-slate-300"
                }`}
              >
                技术支持
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      <UserModeSelector open={showModeSelector} onOpenChange={setShowModeSelector} />
    </div>
  )
}

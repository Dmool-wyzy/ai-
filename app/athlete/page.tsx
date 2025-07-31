"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Trophy,
  Camera,
  Brain,
  Activity,
  BarChart3,
  Settings,
  TrendingUp,
  Zap,
  Users,
  Apple,
  Scale,
} from "lucide-react"
import Link from "next/link"
import { ModeSwitcher } from "@/components/mode-switcher"

export default function AthleteDashboard() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [bodyFat, setBodyFat] = useState(12.5)
  const [analysisScore, setAnalysisScore] = useState(87)
  const [showModeSwitcher, setShowModeSwitcher] = useState(false)

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisScore(Math.floor(Math.random() * 20) + 80)
    }, 3000)
  }

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
            <Badge className="bg-purple-50 text-purple-700 border-purple-200">专业运动员</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-slate-600">欢迎回来，王教练</div>
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
            {/* 高精度姿态分析 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Camera className="h-5 w-5 text-purple-500" />
                      <span>高精度姿态分析</span>
                    </CardTitle>
                    <CardDescription>OpenPose + 外接摄像头 • 多姿态融合 • 技术动作分析</CardDescription>
                  </div>
                  <Badge className={`${isAnalyzing ? "bg-purple-100 text-purple-700" : "bg-slate-100 text-slate-700"}`}>
                    {isAnalyzing ? "分析中" : "待机"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 实时分析区域 */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        {isAnalyzing ? (
                          <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
                        ) : (
                          <Camera className="h-16 w-16 text-purple-600" />
                        )}
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">实时姿态检测</h3>
                      <p className="text-sm text-slate-600 mb-4">25个关键点检测 • 3D姿态重建</p>
                      <Button
                        onClick={startAnalysis}
                        disabled={isAnalyzing}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        {isAnalyzing ? "分析中..." : "开始分析"}
                      </Button>
                    </div>
                  </div>

                  {/* 分析结果 */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">技术评分</span>
                        <span className="text-2xl font-bold text-purple-600">{analysisScore}</span>
                      </div>
                      <Progress value={analysisScore} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                        <span className="text-sm text-slate-600">动作稳定性</span>
                        <Badge variant="secondary">优秀</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                        <span className="text-sm text-slate-600">力量输出</span>
                        <Badge variant="secondary">良好</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                        <span className="text-sm text-slate-600">协调性</span>
                        <Badge className="bg-orange-100 text-orange-700">需改进</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 缺陷分析 */}
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-medium text-orange-800 mb-2">AI缺陷识别</h4>
                  <div className="text-sm text-orange-700">
                    • 左肩略高，建议加强左侧肌群训练
                    <br />• 核心稳定性不足，推荐增加平衡训练
                    <br />• 动作幅度可以更大，注意拉伸训练
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 专业饮食调控 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Apple className="h-5 w-5 text-green-500" />
                  <span>专业饮食调控</span>
                </CardTitle>
                <CardDescription>体脂率监测 • AI营养配比 • 专业食谱推荐</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="monitoring" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="monitoring">体脂监测</TabsTrigger>
                    <TabsTrigger value="nutrition">营养配比</TabsTrigger>
                    <TabsTrigger value="recipes">食谱推荐</TabsTrigger>
                  </TabsList>

                  <TabsContent value="monitoring" className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                        <Scale className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">{bodyFat}%</div>
                        <div className="text-sm text-slate-600">体脂率</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                        <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">68.5kg</div>
                        <div className="text-sm text-slate-600">体重</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                        <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-600">42.1kg</div>
                        <div className="text-sm text-slate-600">肌肉量</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-medium text-slate-800 mb-2">本周趋势</h4>
                      <div className="h-32 bg-white rounded border flex items-center justify-center">
                        <TrendingUp className="h-8 w-8 text-slate-400" />
                        <span className="ml-2 text-slate-500">体脂率趋势图</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="nutrition" className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <div className="text-xl font-bold text-red-600">35%</div>
                        <div className="text-sm text-slate-600">蛋白质</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-xl font-bold text-yellow-600">45%</div>
                        <div className="text-sm text-slate-600">碳水化合物</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">20%</div>
                        <div className="text-sm text-slate-600">脂肪</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="recipes" className="space-y-4">
                    <div className="space-y-3">
                      {[
                        { meal: "早餐", food: "燕麦粥 + 鸡蛋 + 牛奶", calories: "450 kcal" },
                        { meal: "午餐", food: "鸡胸肉 + 糙米 + 蔬菜", calories: "650 kcal" },
                        { meal: "晚餐", food: "三文鱼 + 红薯 + 沙拉", calories: "550 kcal" },
                        { meal: "加餐", food: "蛋白粉 + 香蕉", calories: "200 kcal" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                          <div>
                            <div className="font-medium text-slate-800">{item.meal}</div>
                            <div className="text-sm text-slate-600">{item.food}</div>
                          </div>
                          <Badge variant="secondary">{item.calories}</Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* 综合缺陷分析 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  <span>综合缺陷分析</span>
                </CardTitle>
                <CardDescription>视觉理解 + 身体状况 • 深度分析 • 专业建议</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-800">技术分析</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">动作精准度</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={85} className="w-20" />
                            <span className="text-sm font-medium">85%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">力量平衡</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={72} className="w-20" />
                            <span className="text-sm font-medium">72%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">柔韧性</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={90} className="w-20" />
                            <span className="text-sm font-medium">90%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-800">身体状况</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">肌肉发达度</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={88} className="w-20" />
                            <span className="text-sm font-medium">88%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">体脂控制</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={95} className="w-20" />
                            <span className="text-sm font-medium">95%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">恢复能力</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={78} className="w-20" />
                            <span className="text-sm font-medium">78%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">AI专业建议</h4>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>• 建议增加左侧肌群的针对性训练，改善力量不平衡问题</p>
                      <p>• 核心稳定性训练需要加强，推荐平板支撑和瑜伽球训练</p>
                      <p>• 恢复能力有待提升，建议优化睡眠质量和营养补充</p>
                      <p>• 整体表现优秀，继续保持当前训练强度</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧边栏 */}
          <div className="space-y-6">
            {/* 今日表现 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">今日表现</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">训练强度</span>
                  <span className="font-semibold text-purple-600">高强度</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">技术评分</span>
                  <span className="font-semibold">{analysisScore}/100</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">消耗卡路里</span>
                  <span className="font-semibold">850 kcal</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">训练时长</span>
                  <span className="font-semibold">120 分钟</span>
                </div>
              </CardContent>
            </Card>

            {/* 专业数据 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">专业数据</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <Trophy className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-purple-600">专业级</div>
                  <div className="text-sm text-slate-600">运动员等级</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">VO2 Max</span>
                    <span className="font-semibold">58.2 ml/kg/min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">静息心率</span>
                    <span className="font-semibold">45 BPM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">肌肉质量</span>
                    <span className="font-semibold">42.1 kg</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 快捷操作 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">专业工具</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Camera className="h-4 w-4 mr-2" />
                  高精度分析
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Apple className="h-4 w-4 mr-2" />
                  营养计划
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  数据报告
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  设备校准
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ModeSwitcher open={showModeSwitcher} onOpenChange={setShowModeSwitcher} currentMode="athlete" />
    </div>
  )
}

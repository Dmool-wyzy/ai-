"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Heart, Camera, Brain, Activity, ArrowRight, RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation"

interface ModeSwitcherProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentMode: "student" | "athlete"
}

export function ModeSwitcher({ open, onOpenChange, currentMode }: ModeSwitcherProps) {
  const router = useRouter()

  const handleModeSwitch = (mode: "student" | "athlete") => {
    // 添加一个短暂的延迟，让关闭动画有时间播放
    onOpenChange(false)
    setTimeout(() => {
      router.push(`/${mode}`)
    }, 300) // 延迟300ms，与DialogContent的动画时长匹配
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        // 添加 key 属性，确保在 open 状态变化时组件重新挂载，触发动画
        key={open ? "open-mode-switcher" : "closed-mode-switcher"}
        className="max-w-3xl p-0 bg-slate-50 border-0
                   data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95
                   data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95
                   duration-300 ease-out"
      >
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 flex items-center justify-center space-x-2">
            <RefreshCw className="h-6 w-6 text-cyan-600" />
            <span>切换模式</span>
          </DialogTitle>
          <DialogDescription className="text-center text-slate-600">
            当前：{currentMode === "student" ? "普通学生模式" : "专业运动员模式"}
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* 当前模式 */}
            <Card
              className={`border-0 shadow-lg relative overflow-hidden opacity-60 ${
                currentMode === "student"
                  ? "bg-gradient-to-br from-blue-50 to-cyan-50"
                  : "bg-gradient-to-br from-purple-50 to-pink-50"
              }`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 ${
                  currentMode === "student"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              ></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      currentMode === "student"
                        ? "bg-gradient-to-br from-blue-100 to-cyan-100"
                        : "bg-gradient-to-br from-purple-100 to-pink-100"
                    }`}
                  >
                    {currentMode === "student" ? (
                      <Users className="h-6 w-6 text-blue-600" />
                    ) : (
                      <Trophy className="h-6 w-6 text-purple-600" />
                    )}
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200">当前模式</Badge>
                </div>
                <CardTitle className="text-lg text-slate-800">
                  {currentMode === "student" ? "普通学生" : "专业运动员"}
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm">
                  {currentMode === "student" ? "基础体育教学与健康监护" : "高精度分析与专业指导"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentMode === "student" ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-slate-600">个性化训练方案</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-cyan-600" />
                        <span className="text-sm text-slate-600">实时健康监测</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Camera className="h-4 w-4 text-slate-600" />
                        <span className="text-sm text-slate-600">基础姿态矫正</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center space-x-2">
                        <Camera className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-slate-600">高精度姿态分析</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-pink-600" />
                        <span className="text-sm text-slate-600">专业饮食调控</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4 text-slate-600" />
                        <span className="text-sm text-slate-600">综合缺陷分析</span>
                      </div>
                    </>
                  )}
                </div>
                <Button disabled className="w-full mt-4 opacity-50">
                  当前使用中
                </Button>
              </CardContent>
            </Card>

            {/* 切换到的模式 */}
            <Card
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
              onClick={() => handleModeSwitch(currentMode === "student" ? "athlete" : "student")}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 ${
                  (currentMode === "student" ? "athlete" : "student") === "student"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              ></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                      (currentMode === "student" ? "athlete" : "student") === "student"
                        ? "bg-gradient-to-br from-blue-100 to-cyan-100"
                        : "bg-gradient-to-br from-purple-100 to-pink-100"
                    }`}
                  >
                    {(currentMode === "student" ? "athlete" : "student") === "student" ? (
                      <Users className="h-6 w-6 text-blue-600" />
                    ) : (
                      <Trophy className="h-6 w-6 text-purple-600" />
                    )}
                  </div>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">切换到</Badge>
                </div>
                <CardTitle className="text-lg text-slate-800">
                  {(currentMode === "student" ? "athlete" : "student") === "student" ? "普通学生" : "专业运动员"}
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm">
                  {(currentMode === "student" ? "athlete" : "student") === "student"
                    ? "基础体育教学与健康监护"
                    : "高精度分析与专业指导"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {(currentMode === "student" ? "athlete" : "student") === "student" ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-slate-600">个性化训练方案</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-cyan-600" />
                        <span className="text-sm text-slate-600">实时健康监测</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Camera className="h-4 w-4 text-slate-600" />
                        <span className="text-sm text-slate-600">基础姿态矫正</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center space-x-2">
                        <Camera className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-slate-600">高精度姿态分析</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-pink-600" />
                        <span className="text-sm text-slate-600">专业饮食调控</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4 text-slate-600" />
                        <span className="text-sm text-slate-600">综合缺陷分析</span>
                      </div>
                    </>
                  )}
                </div>
                <Button
                  className={`w-full mt-4 group-hover:shadow-lg transition-all ${
                    (currentMode === "student" ? "athlete" : "student") === "student"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  } text-white`}
                >
                  切换到此模式
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* 底部说明 */}
          <div className="mt-6 text-center">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2 text-slate-600">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm">数据自动同步</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">无缝切换</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-sm">随时可切换</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Heart, Camera, Brain, Activity, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface UserModeSelectorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserModeSelector({ open, onOpenChange }: UserModeSelectorProps) {
  const router = useRouter()

  const handleModeSelect = (mode: "student" | "athlete") => {
    onOpenChange(false)
    router.push(`/${mode}`)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 bg-slate-50 border-0">
        <DialogHeader className="p-8 pb-4">
          <DialogTitle className="text-3xl font-bold text-center text-slate-800">选择您的身份</DialogTitle>
          <DialogDescription className="text-center text-slate-600 text-lg">
            根据您的身份选择合适的AI体育教学模式
          </DialogDescription>
        </DialogHeader>

        <div className="px-8 pb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* 普通学生模式 */}
            <Card
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
              onClick={() => handleModeSelect("student")}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">推荐新手</Badge>
                </div>
                <CardTitle className="text-2xl text-slate-800">普通学生</CardTitle>
                <CardDescription className="text-slate-600">
                  基础体育教学与健康监护，适合学校体育课和日常锻炼
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Brain className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">个性化训练方案</div>
                      <div className="text-xs text-slate-600">AI生成，老师把关</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center">
                      <Heart className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">实时健康监测</div>
                      <div className="text-xs text-slate-600">心率血氧，紧急救助</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Camera className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">基础姿态矫正</div>
                      <div className="text-xs text-slate-600">OpenPose技术支持</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white group-hover:shadow-lg transition-all">
                    开始学习之旅
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    免费试用
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    教师监督
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    安全保障
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* 专业运动员模式 */}
            <Card
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
              onClick={() => handleModeSelect("athlete")}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="h-8 w-8 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200">专业级</Badge>
                </div>
                <CardTitle className="text-2xl text-slate-800">专业运动员</CardTitle>
                <CardDescription className="text-slate-600">
                  高精度分析与专业指导，适合专业训练和竞技体育
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                      <Camera className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">高精度姿态分析</div>
                      <div className="text-xs text-slate-600">25个关键点检测</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center">
                      <Activity className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">专业饮食调控</div>
                      <div className="text-xs text-slate-600">体脂监测，营养配比</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Brain className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">综合缺陷分析</div>
                      <div className="text-xs text-slate-600">深度技术分析</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white group-hover:shadow-lg transition-all">
                    开启专业训练
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    高精度分析
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    专业指导
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    数据导出
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 底部说明 */}
          <div className="mt-8 text-center">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2 text-slate-600">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm">7天免费试用</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">随时切换模式</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-sm">专业技术支持</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

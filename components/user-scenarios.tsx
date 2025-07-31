import { Badge } from "@/components/ui/badge"
import { Users, Trophy } from "lucide-react"

// 由于这个组件现在不再使用，我们可以将其转换为一个更简洁的功能展示组件
// 或者完全移除它。让我们将其改造为一个简洁的功能对比组件

// 1. 将组件重命名为 FeatureComparison
// 2. 简化内容，专注于核心功能对比
// 3. 移除重复的详细描述

export function FeatureComparison() {
  return (
    <section className="py-16 bg-white relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-slate-100 text-slate-700 border-slate-200 mb-4">功能对比</Badge>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">不同需求，精准匹配</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">普通学生</h3>
              <p className="text-slate-600 text-sm mb-4">基础教学 • 健康监护 • 安全保障</p>
              <div className="flex justify-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  AI训练方案
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  实时监测
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  紧急救助
                </Badge>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">专业运动员</h3>
              <p className="text-slate-600 text-sm mb-4">高精度分析 • 专业指导 • 数据驱动</p>
              <div className="flex justify-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  姿态分析
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  营养配比
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  缺陷识别
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

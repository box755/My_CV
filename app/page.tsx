import Image from "next/image"
import profilePic from "../public/profile.jpg"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Languages,
  FolderGit2,
  MapPin,
  Calendar,
  Trophy,
  BookOpen,
  FlaskConical,
  Coins,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-4 py-12">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-32 w-32 shrink-0">
              <AvatarImage src={profilePic.src} alt="傅聖祐" className="scale-125" />
              <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white text-4xl font-mono">
                SY
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold font-mono">傅聖祐</h1>
              <p className="text-zinc-400 font-mono text-sm md:text-base">
                Full-Stack Developer
              </p>
              <div className="flex items-center gap-2 mt-1 text-zinc-500 text-sm">
                <GraduationCap size={14} />
                <span>國立中央大學 資訊管理學系</span>
              </div>
            </div>
          </div>
          <p className="text-zinc-300 text-lg font-mono">
            <span className="text-emerald-400">const</span>{" "}
            <span className="text-blue-400">developer</span> = {"{"}
            <br />
            &nbsp;&nbsp;passion:{" "}
            <span className="text-amber-300">
              {'"Building full-stack applications with modern technologies"'}
            </span>
            ,
            <br />
            &nbsp;&nbsp;goal:{" "}
            <span className="text-amber-300">
              {'"Becoming a versatile full-stack engineer"'}
            </span>
            <br />
            {"}"};
          </p>
        </section>

        <Separator className="bg-zinc-800" />

        {/* Education Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> 學歷
          </h2>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-bold text-zinc-100 text-lg">
                    國立中央大學
                  </h3>
                  <p className="text-zinc-400">資訊管理學系 - 大學日間部</p>
                </div>
                <div className="flex items-center gap-1 text-zinc-500 text-sm shrink-0">
                  <Calendar size={14} />
                  <span>2023/9 ~ 2027/6</span>
                </div>
              </div>
              <Badge
                variant="outline"
                className="bg-emerald-500/10 text-emerald-400 border-emerald-400/30"
              >
                就讀中
              </Badge>
            </CardContent>
          </Card>
        </section>

        {/* Academic Performance Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> 學業表現
          </h2>

          {/* Awards & Honors */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-amber-400" />
                <h3 className="font-bold text-zinc-100">榮譽與獎項</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-amber-500/5 border border-amber-400/20 rounded-lg p-3 flex items-start gap-3">
                  <div className="bg-amber-500/10 rounded-full p-1.5 mt-0.5 shrink-0">
                    <Trophy size={14} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-zinc-200 font-medium text-sm">
                      書卷獎
                    </p>
                    <p className="text-zinc-500 text-xs">
                      112-2、114-1 學期
                    </p>
                  </div>
                </div>
                <div className="bg-amber-500/5 border border-amber-400/20 rounded-lg p-3 flex items-start gap-3">
                  <div className="bg-amber-500/10 rounded-full p-1.5 mt-0.5 shrink-0">
                    <Trophy size={14} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-zinc-200 font-medium text-sm">
                      院長獎
                    </p>
                    <p className="text-zinc-500 text-xs">112-2 學期</p>
                  </div>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-400/20 rounded-lg p-3 flex items-start gap-3">
                  <div className="bg-emerald-500/10 rounded-full p-1.5 mt-0.5 shrink-0">
                    <GraduationCap size={14} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-zinc-200 font-medium text-sm">
                      累計班排名
                    </p>
                    <p className="text-emerald-400 font-mono font-bold text-lg">
                      1 / 49
                    </p>
                  </div>
                </div>
                <div className="bg-blue-500/5 border border-blue-400/20 rounded-lg p-3 flex items-start gap-3">
                  <div className="bg-blue-500/10 rounded-full p-1.5 mt-0.5 shrink-0">
                    <FlaskConical size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-zinc-200 font-medium text-sm">
                      研究助理
                    </p>
                    <p className="text-zinc-500 text-xs">
                      國防部先進科學研究計畫
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Grades */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-emerald-400" />
                <h3 className="font-bold text-zinc-100">專業科目表現</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { name: "Java 程式設計進階", score: 100 },
                  { name: "Python 程式設計", score: 100 },
                  { name: "資料庫管理", score: 100 },
                  { name: "資訊管理導論", score: 99 },
                  { name: "網頁程式設計", score: 98 },
                  { name: "初階程式設計", score: 98 },
                  { name: "AI 人工智慧導論", score: 97 },
                  { name: "企業資料通訊", score: 95 },
                  { name: "資料視覺化", score: 93 },
                  { name: "系統分析與設計", score: 92 },
                ].map((course) => (
                  <div
                    key={course.name}
                    className="flex items-center justify-between bg-zinc-800/50 rounded-lg px-3 py-2"
                  >
                    <span className="text-zinc-300 text-sm">{course.name}</span>
                    <span
                      className={`font-mono font-bold text-sm ${course.score === 100
                        ? "text-amber-400"
                        : course.score >= 95
                          ? "text-emerald-400"
                          : "text-blue-400"
                        }`}
                    >
                      {course.score}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Job Preferences Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> 求職條件
          </h2>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm">希望職稱</p>
                  <p className="text-zinc-200 font-medium">全端開發工程師</p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm">希望性質</p>
                  <p className="text-zinc-200 font-medium">實習工作</p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm flex items-center gap-1">
                    <MapPin size={12} />
                    希望地點
                  </p>
                  <p className="text-zinc-200 font-medium">
                    台北市、桃園市、新北市
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm">可上班日</p>
                  <p className="text-zinc-200 font-medium">
                    2026 年 6 月 ~ 9 月
                  </p>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <p className="text-zinc-500 text-sm">希望職類</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className="bg-zinc-800 text-zinc-300 border-zinc-700"
                    >
                      後端工程師
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-zinc-800 text-zinc-300 border-zinc-700"
                    >
                      前端工程師
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-zinc-800 text-zinc-300 border-zinc-700"
                    >
                      全端工程師
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-zinc-800 text-zinc-300 border-zinc-700"
                    >
                      資料科學家
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-zinc-800 text-zinc-300 border-zinc-700"
                    >
                      資料工程師
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> 專長技能
          </h2>
          <div className="space-y-3">
            <h3 className="text-sm text-zinc-500 font-mono flex items-center gap-2">
              <Code2 size={14} />
              Full-stack Development
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                Node.js
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                Vue.js
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                Python
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                Java
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                MySQL
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                CSS
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                Git
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                GitHub
              </Badge>
              <Badge
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                資料庫程式設計
              </Badge>
            </div>
          </div>
        </section>

        {/* Language Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> 語文能力
          </h2>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <Languages size={18} className="text-emerald-400" />
                <h3 className="font-bold text-zinc-100">英文</h3>
              </div>

              {/* Overall Score + CEFR + TOEIC Conversion */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-lg px-4 py-2 text-center">
                  <p className="text-zinc-500 text-[10px] mb-0.5">CEFR</p>
                  <p className="text-emerald-400 font-bold font-mono text-lg">
                    C1
                  </p>
                  <p className="text-emerald-400/70 text-[10px]">Advanced</p>
                </div>
                <div className="text-zinc-600 font-mono text-sm">{"="}</div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-2 text-center">
                  <p className="text-zinc-500 text-[10px] mb-0.5">IELTS</p>
                  <p className="text-zinc-100 font-bold font-mono text-lg">
                    7.0
                  </p>
                  <p className="text-zinc-500 text-[10px]">Overall</p>
                </div>
                <div className="text-zinc-600 font-mono text-sm">{"~"}</div>
                <div className="bg-amber-500/10 border border-amber-400/30 rounded-lg px-4 py-2 text-center">
                  <p className="text-zinc-500 text-[10px] mb-0.5">TOEIC</p>
                  <p className="text-amber-400 font-bold font-mono text-lg">
                    945+
                  </p>
                  <p className="text-amber-400/70 text-[10px]">Equivalent</p>
                </div>
              </div>

              <Separator className="bg-zinc-800" />

              {/* Individual Scores */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-zinc-800/50 rounded-lg p-3 text-center space-y-1">
                  <p className="text-zinc-500 text-xs">Listening</p>
                  <p className="text-zinc-100 font-bold text-xl font-mono">
                    7.5
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-emerald-500/10 text-emerald-400 border-emerald-400/30 text-[10px] px-1.5 py-0"
                  >
                    C1 Advanced
                  </Badge>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3 text-center space-y-1">
                  <p className="text-zinc-500 text-xs">Reading</p>
                  <p className="text-zinc-100 font-bold text-xl font-mono">
                    8.0
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-emerald-500/10 text-emerald-400 border-emerald-400/30 text-[10px] px-1.5 py-0"
                  >
                    C1 Advanced
                  </Badge>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3 text-center space-y-1">
                  <p className="text-zinc-500 text-xs">Writing</p>
                  <p className="text-zinc-100 font-bold text-xl font-mono">
                    6.5
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-blue-500/10 text-blue-400 border-blue-400/30 text-[10px] px-1.5 py-0"
                  >
                    B2 Upper-Int.
                  </Badge>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3 text-center space-y-1">
                  <p className="text-zinc-500 text-xs">Speaking</p>
                  <p className="text-zinc-100 font-bold text-xl font-mono">
                    6.0
                  </p>
                  <Badge
                    variant="outline"
                    className="bg-blue-500/10 text-blue-400 border-blue-400/30 text-[10px] px-1.5 py-0"
                  >
                    B2 Upper-Int.
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> 專案成就
          </h2>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <FolderGit2 size={18} className="text-emerald-400" />
                  <h3 className="font-bold text-zinc-100 text-lg">
                    2025 新生資訊網
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://ncufresh.ncu.edu.tw/life"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Site</span>
                  </a>
                  <span className="text-zinc-700">|</span>
                  <div className="flex items-center gap-1 text-zinc-500 text-sm">
                    <Calendar size={14} />
                    <span>2025/5 ~ 2025/7</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-zinc-400 text-sm">
                  <span className="text-zinc-300 font-medium">
                    擔任角色：
                  </span>
                  前端開發工程師 (Front-End Developer)
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Vue.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Tailwind CSS
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Docker
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  GitLab CI/CD
                </Badge>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                與校內團隊共同開發 2025
                年中央大學新生知訊網，將繁雜的註冊、選課、住宿與校園生活資訊，轉化為具備溫柔手繪風格且易於瀏覽的網頁。專案最終成功部署至雲端，實際服務大一與研究所新生。
              </p>

              <Separator className="bg-zinc-800" />

              <div className="space-y-3">
                <h4 className="text-zinc-300 font-medium text-sm">
                  核心開發與貢獻
                </h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        獨立開發核心資訊模組 (NCU Life)：
                      </span>
                      負責統籌並開發「中大生活」關鍵頁面，涵蓋宿舍介紹、科系探索、社團推薦及交通流程等四大區塊。利用
                      Vue.js 進行元件化開發，提升程式碼的重用性與維護性。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        實現響應式網頁設計 (RWD)：
                      </span>
                      使用 Tailwind CSS
                      刻劃符合專案手繪風格的 UI
                      版面，並實作完整的 RWD 響應式設計，確保跨裝置的一致使用者體驗。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        導入 DevOps 協作與自動化部署：
                      </span>
                      使用 Docker
                      建立標準化的容器開發環境，並透過 GitLab
                      進行版本控制與 CI/CD Pipeline
                      建置，確保程式碼品質與雲端部署的流暢度。
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* SimLens - Innovation Platform */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Lightbulb size={18} className="text-amber-400" />
                  <h3 className="font-bold text-zinc-100 text-lg">
                    SimLens 觀眾行為模擬平台
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://ssp.moe.gov.tw/cases/1484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>成功案例</span>
                  </a>
                  <span className="text-zinc-700">|</span>
                  <div className="flex items-center gap-1 text-zinc-500 text-sm">
                    <Calendar size={14} />
                    <span>114 年度</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-amber-500/20 text-amber-400 border-none">
                  教育部創新創業實戰模擬學習平台
                </Badge>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-none">
                  資通訊領域 成功案例
                </Badge>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 rounded-lg px-3 py-1.5">
                  <Coins size={14} className="text-amber-400" />
                  <span className="text-amber-400 font-mono font-bold text-sm">
                    $7,551,000
                  </span>
                  <span className="text-zinc-500 text-xs">創新幣募資</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5">
                  <span className="text-zinc-400 text-xs">含業師注資</span>
                  <span className="text-zinc-200 font-mono font-bold text-sm">
                    540 萬
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-lg px-3 py-1.5">
                  <span className="text-blue-400 text-xs">專案經費</span>
                  <span className="text-blue-400 font-mono font-bold text-sm">
                    20 萬
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-zinc-400 text-sm">
                  <span className="text-zinc-300 font-medium">
                    擔任角色：
                  </span>
                  產品規劃與技術架構
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  AI 模型整合
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  大語言模型 (LLM)
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  系統架構設計
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  產品功能定義
                </Badge>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                參與 114
                年度創新創業實戰模擬學習平台，負責「SimLens
                觀眾行為模擬平台」的產品功能定義與技術架構規劃。專案最終於資通訊領域通過商業驗證，募得
                $7,551,000 創新幣（含業師注資 540 萬）。
              </p>

              <Separator className="bg-zinc-800" />

              <div className="space-y-3">
                <h4 className="text-zinc-300 font-medium text-sm">
                  核心開發與貢獻
                </h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        規劃預測系統架構：
                      </span>
                      針對影音創作者試錯成本高的問題，設計「發布前預測」的系統機制。規劃如何透過
                      AI 模擬觀眾行為，提供影片上線前的修改依據。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        定義核心分析模組：
                      </span>
                      統籌並設計系統的四大功能指標，包含：留存曲線預測、情緒熱力圖、Hook
                      Score（吸引力評分）及精華片段建議，將觀眾行為轉化為可量化的數據。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        評估技術可行性與整合藍圖：
                      </span>
                      構想系統底層技術架構，評估如何串接多平台數據庫與 AI
                      模型（如大語言模型），確保預測邏輯的合理性，為產品的商業模式提供技術基礎。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        技術提案與商業驗證：
                      </span>
                      負責撰寫專案中的功能與技術構想說明，將技術架構轉化為具體的產品價值，協助團隊在平台上獲得超過
                      750 萬創新幣的募資。
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* E-commerce Platform */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <FolderGit2 size={18} className="text-emerald-400" />
                  <h3 className="font-bold text-zinc-100 text-lg">
                    電子商務平台
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://www.water-mare-shop.it.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Site</span>
                  </a>
                  <span className="text-zinc-700">|</span>
                  <div className="flex items-center gap-1 text-zinc-500 text-sm">
                    <Calendar size={14} />
                    <span>2025/1 ~ 2025/2</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-zinc-400 text-sm">
                  <span className="text-zinc-300 font-medium">
                    擔任角色：
                  </span>
                  全端開發工程師 (獨立開發)
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Vue.js 3
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Pinia
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Express
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Sequelize ORM
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  MySQL
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  SCSS
                </Badge>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                個人全端開發練習計畫，旨在深入磨練 Vue 3 與 Node.js
                的整合應用。透過手打一個具備商品分類、會員登入與購物車緩存的電商雛形，完整走過從資料庫設計、API
                撰寫到前端 UI 渲染的開發全流程。
              </p>

              <Separator className="bg-zinc-800" />

              <div className="space-y-3">
                <h4 className="text-zinc-300 font-medium text-sm">
                  核心開發與學習紀錄
                </h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        Vue 3 與 Pinia 狀態管理：
                      </span>
                      實作複雜的使用者狀態與購物車邏輯，利用 Pinia
                      達成跨組件的資料同步，並結合 LocalStorage
                      實現頁面重新整理後的資料持久化。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        Node.js Express API 開發：
                      </span>
                      建立 RESTful API 規範，透過 Sequelize ORM 進行 MySQL
                      資料庫操作，掌握多對多關聯（如：商品與規格）的資料查詢處理。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        前後端分離實踐與 UI 整合：
                      </span>
                      使用 SCSS 進行響應式版面配置，整合 Element Plus
                      組件庫，解決跨域請求 (CORS)
                      問題，並實作圖片懶載入等前端效能優化技巧。
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Seat Drawing System */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <FolderGit2 size={18} className="text-emerald-400" />
                  <h3 className="font-bold text-zinc-100 text-lg">
                    抽籤選位系統
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://chou-chian-sys.it.com/admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Site</span>
                  </a>
                  <span className="text-zinc-700">|</span>
                  <div className="flex items-center gap-1 text-zinc-500 text-sm">
                    <Calendar size={14} />
                    <span>2025/6 ~ 2025/7</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-zinc-400 text-sm">
                  <span className="text-zinc-300 font-medium">
                    擔任角色：
                  </span>
                  全端開發工程師 (獨立開發)
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Vue.js 3
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Java
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Jakarta EE
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  MySQL
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  JWT
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-zinc-800 text-blue-400 border-blue-400/30"
                >
                  Maven
                </Badge>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                解決校內教職員會議時手動安排座次效率低下且公正性不足的問題。根據校方需求，開發出一套包含視覺化佈局編輯、即時選位與自動化抽籤的數位平台，大幅縮短行政人員安排會議座次的時間。
              </p>

              <Separator className="bg-zinc-800" />

              <div className="space-y-3">
                <h4 className="text-zinc-300 font-medium text-sm">
                  核心開發與技術重點
                </h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        視覺化座位編輯系統：
                      </span>
                      使用 Vue.js
                      實作動態佈局功能，管理員可針對不同會議室規格彈性調整行列數與座位編號，並透過前端路由守衛
                      (Route Guard) 嚴格管控行政管理權限。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        穩健的 Java 後端 API：
                      </span>
                      基於 Jakarta EE
                      架構開發，負責處理活動邏輯、報名與抽籤演算法。確保在高併發存取下（教職員同時選位），資料庫異動與抽籤結果的準確性。
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{">"}</span>
                    <span>
                      <span className="text-zinc-200 font-medium">
                        安全性與資料導出：
                      </span>
                      整合 JWT
                      認證機制保障行政資料安全，並實作結果導出功能。管理員可一鍵產出
                      Excel/CSV
                      清單，方便教職員會議的出勤記錄與後續歸檔。
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-zinc-800" />

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> 聯絡方式
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-emerald-400"
              asChild
            >
              <a
                href="https://github.com/box755"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-blue-500"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/%E8%81%96%E7%A5%90-%E5%82%85-b16162319/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-amber-400"
              asChild
            >
              <a href="mailto:kk20031022@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-4 text-center text-zinc-500 text-sm">
          <p>
            {"// "}
            {new Date().getFullYear()} 傅聖祐. All rights reserved.
          </p>
          <p className="font-mono mt-1">
            {"// Built with Next.js & TailwindCSS"}
          </p>
        </footer>
      </div>
    </main>
  )
}

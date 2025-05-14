import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Search, Star } from "lucide-react"
import Link from "next/link"

export default function MentorsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">멘토 찾기</h1>
        <p className="text-muted-foreground">다양한 필터를 사용하여 나에게 맞는 멘토를 찾아보세요</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters */}
        <Card className="md:col-span-1 h-fit shadow-md">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3 text-primary">검색</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="멘토 이름 검색" className="pl-8" />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3 text-primary">과정</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="swm" className="text-primary" />
                    <Label htmlFor="swm">SW마에스트로</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="woowacourse" className="text-highlight" />
                    <Label htmlFor="woowacourse">우아한테크코스</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="boostcamp" className="text-success" />
                    <Label htmlFor="boostcamp">부스트캠프</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3 text-primary">주제</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="coding-test" className="text-primary" />
                    <Label htmlFor="coding-test">코딩테스트</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="resume" className="text-primary" />
                    <Label htmlFor="resume">자소서</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interview" className="text-primary" />
                    <Label htmlFor="interview">면접</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="portfolio" className="text-primary" />
                    <Label htmlFor="portfolio">포트폴리오</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3 text-primary">합격 시기</h3>
                <RadioGroup defaultValue="all">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" className="text-primary" />
                    <Label htmlFor="all">전체</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recent" id="recent" className="text-primary" />
                    <Label htmlFor="recent">최근 6개월</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="year" id="year" className="text-primary" />
                    <Label htmlFor="year">1년 이내</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3 text-primary">가격</h3>
                <RadioGroup defaultValue="all">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="price-all" className="text-primary" />
                    <Label htmlFor="price-all">전체</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="price-low" className="text-primary" />
                    <Label htmlFor="price-low">~10,000원</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mid" id="price-mid" className="text-primary" />
                    <Label htmlFor="price-mid">10,000원~20,000원</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="price-high" className="text-primary" />
                    <Label htmlFor="price-high">20,000원~</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">필터 적용</Button>
            </div>
          </CardContent>
        </Card>

        {/* Mentor List */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    alt={`멘토 ${i + 1}`}
                    className="object-cover w-full h-full"
                    height="225"
                    src={`/placeholder.svg?height=225&width=300&text=Mentor+${i + 1}`}
                    width="300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">김멘토 {i + 1}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-warning text-warning mr-1" />
                      <span className="text-sm font-medium">4.{9 - (i % 5)}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${i % 3 === 0 ? "swm-badge" : i % 3 === 1 ? "woowa-badge" : "boost-badge"}`}
                    >
                      {i % 3 === 0 ? "SW마에스트로" : i % 3 === 1 ? "우아한테크코스" : "부스트캠프"}
                    </span>
                    <span className="text-sm ml-2 text-muted-foreground">
                      {i % 3 === 0 ? "14기" : i % 3 === 1 ? "5기" : "7기"}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CheckCircle className="h-4 w-4 mr-1 text-success" />
                    <span>
                      {i % 4 === 0
                        ? "코딩테스트, 자소서"
                        : i % 4 === 1
                          ? "면접, 포트폴리오"
                          : i % 4 === 2
                            ? "코딩테스트, 면접"
                            : "자소서, 포트폴리오"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-highlight">₩{((i % 3) + 1) * 5 + 10},000 / 30분</span>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <Link href={`/mentors/${i + 1}`}>프로필 보기</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

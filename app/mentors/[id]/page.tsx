import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function MentorProfilePage({ params }: { params: { id: string } }) {
  const mentorId = params.id

  // Mock data - would come from API in real app
  const mentor = {
    id: mentorId,
    name: `김멘토 ${mentorId}`,
    program: "SW마에스트로",
    badge: "swm-badge",
    batch: "14기",
    topics: ["코딩테스트", "자소서", "면접"],
    bio: "SW마에스트로 14기 합격자로, 3번의 지원 끝에 합격한 경험이 있습니다. 코딩테스트와 면접 준비에 대한 실질적인 조언을 제공합니다.",
    experience:
      "백엔드 개발자로 2년간 근무 중이며, 알고리즘 스터디를 1년간 운영했습니다. 우아한테크코스 최종 면접까지 경험했으며, 부스트캠프 지원 경험도 있습니다.",
    rating: 4.9,
    reviewCount: 24,
    price30min: 15000,
    price60min: 25000,
    availability: "주중 저녁 7시-10시, 주말 오전 10시-오후 6시",
  }

  // Mock reviews
  const reviews = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    mentee: `이멘티 ${i + 1}`,
    program: i % 2 === 0 ? "SW마에스트로 지원자" : "우아한테크코스 지원자",
    rating: 5 - (i % 2),
    content:
      "실제 합격자의 조언을 들을 수 있어서 정말 좋았습니다. 코딩테스트 준비 방법과 면접 팁이 매우 유용했고, 덕분에 자신감을 얻을 수 있었습니다.",
    date: "2023년 12월",
  }))

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mentor Profile */}
        <div className="md:col-span-2">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <Avatar className="w-24 h-24 border-4 border-primary/20">
              <AvatarImage src={`/placeholder.svg?height=96&width=96&text=Mentor+${mentorId}`} alt={mentor.name} />
              <AvatarFallback className="bg-primary/10 text-primary">{mentor.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold gradient-text">{mentor.name}</h1>
              <div className="flex items-center gap-2">
                <span className={`text-sm px-2 py-1 rounded-full ${mentor.badge}`}>{mentor.program}</span>
                <span className="text-sm text-muted-foreground">{mentor.batch}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-warning text-warning mr-1" />
                  <span className="text-sm font-medium">{mentor.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({mentor.reviewCount}개 리뷰)</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 mr-1 text-success" />
                <span>{mentor.topics.join(", ")}</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="mb-4 bg-muted/50">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                소개
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                리뷰 ({mentor.reviewCount})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6">
              <Card className="shadow-md">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-primary">멘토 소개</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{mentor.bio}</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-primary">경험</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{mentor.experience}</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-primary">가능한 주제</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {mentor.topics.map((topic, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${review.id}`} alt="멘티 이미지" />
                        <AvatarFallback className="bg-success/10 text-success">멘티</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{review.mentee}</CardTitle>
                        <CardDescription>{review.program}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "fill-warning text-warning" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.content}</p>
                    <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking Card */}
        <div>
          <Card className="sticky top-6 shadow-lg border-t-4 border-t-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary">멘토링 예약</CardTitle>
              <CardDescription>원하는 시간과 세션 길이를 선택하세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
              <div>
                <h3 className="font-medium mb-2 text-primary">세션 길이</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-between border-primary text-primary hover:bg-primary/10">
                    30분
                    <span className="font-semibold">₩{mentor.price30min.toLocaleString()}</span>
                  </Button>
                  <Button variant="outline" className="justify-between border-primary text-primary hover:bg-primary/10">
                    60분
                    <span className="font-semibold">₩{mentor.price60min.toLocaleString()}</span>
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2 text-primary">가능한 시간대</h3>
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mt-0.5 text-highlight" />
                  <span>{mentor.availability}</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 border-highlight text-highlight hover:bg-highlight/10"
                >
                  <Calendar className="h-4 w-4" />
                  <span>날짜 및 시간 선택하기</span>
                </Button>
              </div>

              <Separator />

              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link href={`/booking/${mentorId}`}>예약하기</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

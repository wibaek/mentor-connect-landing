import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, CreditCard } from "lucide-react"
import Link from "next/link"

export default function BookingPage({ params }: { params: { id: string } }) {
  const mentorId = params.id

  // Mock data - would come from API in real app
  const mentor = {
    id: mentorId,
    name: `김멘토 ${mentorId}`,
    program: "SW마에스트로",
    badge: "swm-badge",
    batch: "14기",
    price30min: 15000,
    price60min: 25000,
  }

  return (
    <div className="container py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 gradient-text">멘토링 예약</h1>

      <div className="grid gap-6">
        <Card className="shadow-md border-t-4 border-t-primary">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-primary">멘토 정보</CardTitle>
            <CardDescription>선택한 멘토의 정보를 확인하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  alt={mentor.name}
                  className="object-cover w-full h-full"
                  src={`/placeholder.svg?height=64&width=64&text=Mentor+${mentorId}`}
                />
              </div>
              <div>
                <h3 className="font-bold text-primary">{mentor.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${mentor.badge}`}>{mentor.program}</span>
                  <span className="text-xs text-muted-foreground">{mentor.batch}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-t-4 border-t-highlight">
          <CardHeader className="bg-highlight/5">
            <CardTitle className="text-highlight">세션 정보</CardTitle>
            <CardDescription>멘토링 세션 길이와 시간을 선택하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="session-length" className="mb-2 block text-highlight">
                세션 길이
              </Label>
              <RadioGroup defaultValue="30" id="session-length">
                <div className="flex items-center justify-between space-x-2 border p-4 rounded-md hover:border-highlight/50 transition-colors">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="30" id="r1" className="text-highlight" />
                    <Label htmlFor="r1">30분</Label>
                  </div>
                  <span className="font-semibold text-highlight">₩{mentor.price30min.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between space-x-2 border p-4 rounded-md hover:border-highlight/50 transition-colors">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="60" id="r2" className="text-highlight" />
                    <Label htmlFor="r2">60분</Label>
                  </div>
                  <span className="font-semibold text-highlight">₩{mentor.price60min.toLocaleString()}</span>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div>
              <Label className="mb-2 block text-highlight">날짜 및 시간</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="justify-start gap-2 border-highlight text-highlight hover:bg-highlight/10"
                >
                  <Calendar className="h-4 w-4" />
                  <span>날짜 선택하기</span>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start gap-2 border-highlight text-highlight hover:bg-highlight/10"
                >
                  <Clock className="h-4 w-4" />
                  <span>시간 선택하기</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-t-4 border-t-success">
          <CardHeader className="bg-success/5">
            <CardTitle className="text-success">질문 준비</CardTitle>
            <CardDescription>멘토에게 미리 질문하고 싶은 내용을 작성하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="border p-4 rounded-md hover:border-success/50 transition-colors">
                <Label className="font-medium text-success">지원 과정에 대해 어떤 준비를 하셨나요?</Label>
                <p className="text-sm text-muted-foreground mt-1">멘토님의 지원 과정 준비 방법과 팁을 알고 싶습니다.</p>
              </div>

              <div className="border p-4 rounded-md hover:border-success/50 transition-colors">
                <Label className="font-medium text-success">코딩테스트는 어떻게 준비하셨나요?</Label>
                <p className="text-sm text-muted-foreground mt-1">코딩테스트 준비 방법과 추천 문제를 알고 싶습니다.</p>
              </div>

              <div className="border p-4 rounded-md hover:border-success/50 transition-colors">
                <Label className="font-medium text-success">면접에서 어떤 질문을 받으셨나요?</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  실제 면접에서 받은 질문과 대답 방법을 알고 싶습니다.
                </p>
              </div>

              <div className="border p-4 rounded-md hover:border-success/50 transition-colors">
                <Label className="font-medium text-success">자소서는 어떻게 작성하셨나요?</Label>
                <p className="text-sm text-muted-foreground mt-1">자소서 작성 팁과 주의할 점을 알고 싶습니다.</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-question" className="text-success">
                추가 질문
              </Label>
              <Textarea
                id="custom-question"
                placeholder="멘토에게 추가로 질문하고 싶은 내용을 작성하세요"
                className="min-h-[100px] focus-visible:ring-success"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-t-4 border-t-info">
          <CardHeader className="bg-info/5">
            <CardTitle className="text-info">결제 정보</CardTitle>
            <CardDescription>안전한 결제를 위해 정보를 입력하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="card-number" className="text-info">
                카드 번호
              </Label>
              <Input id="card-number" placeholder="0000 0000 0000 0000" className="focus-visible:ring-info" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry" className="text-info">
                  만료일
                </Label>
                <Input id="expiry" placeholder="MM/YY" className="focus-visible:ring-info" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc" className="text-info">
                  CVC
                </Label>
                <Input id="cvc" placeholder="123" className="focus-visible:ring-info" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-info">
                카드 소유자 이름
              </Label>
              <Input id="name" placeholder="홍길동" className="focus-visible:ring-info" />
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>세션 비용 (30분)</span>
                <span className="text-highlight">₩{mentor.price30min.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>총 결제 금액</span>
                <span className="text-highlight">₩{mentor.price30min.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground">* 세션 24시간 전까지 취소 시 전액 환불됩니다.</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full gap-2 bg-info hover:bg-info/90">
              <CreditCard className="h-4 w-4" />
              <span>결제하기</span>
            </Button>
            <Button variant="outline" className="w-full border-info text-info hover:bg-info/10" asChild>
              <Link href={`/mentors/${mentorId}`}>뒤로 가기</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BecomeMentorPage() {
  return (
    <div className="container py-8 max-w-3xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">멘토 되기</h1>
        <p className="text-muted-foreground">당신의 경험을 공유하고 다른 지원자들을 도와주세요</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>멘토 혜택</CardTitle>
            <CardDescription>멘토가 되면 얻을 수 있는 혜택을 확인하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">추가 수입 창출</h3>
                  <p className="text-sm text-muted-foreground">
                    멘토링 세션을 통해 추가 수입을 얻을 수 있습니다. 30분당 5,000원~30,000원의 수입이 발생합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">네트워킹 기회</h3>
                  <p className="text-sm text-muted-foreground">
                    다양한 배경을 가진 멘티들과 네트워킹할 수 있는 기회를 얻을 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">지식 공유</h3>
                  <p className="text-sm text-muted-foreground">
                    자신의 경험과 지식을 공유하며 다른 사람들의 성장을 도울 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">커뮤니케이션 스킬 향상</h3>
                  <p className="text-sm text-muted-foreground">
                    멘토링을 통해 자신의 커뮤니케이션 스킬을 향상시킬 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>기본 정보</CardTitle>
            <CardDescription>멘토 프로필에 표시될 기본 정보를 입력하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">이름</Label>
                <Input id="first-name" placeholder="홍길동" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">자기소개</Label>
              <Textarea
                id="bio"
                placeholder="멘티들에게 보여질 간단한 자기소개를 작성하세요"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>합격 정보</CardTitle>
            <CardDescription>합격한 과정에 대한 정보를 입력하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>합격한 과정</Label>
              <RadioGroup defaultValue="swm">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="swm" id="swm" />
                  <Label htmlFor="swm">SW마에스트로</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="woowacourse" id="woowacourse" />
                  <Label htmlFor="woowacourse">우아한테크코스</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="boostcamp" id="boostcamp" />
                  <Label htmlFor="boostcamp">부스트캠프</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="batch">기수</Label>
              <Input id="batch" placeholder="예: 14기" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="acceptance-date">합격 시기</Label>
              <Input id="acceptance-date" type="month" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">합격 경험</Label>
              <Textarea
                id="experience"
                placeholder="지원 과정과 합격 경험에 대해 자세히 작성해주세요"
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>멘토링 정보</CardTitle>
            <CardDescription>멘토링 주제와 가능한 시간대를 설정하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>멘토링 가능 주제</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="coding-test" />
                  <Label htmlFor="coding-test">코딩테스트</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="resume" />
                  <Label htmlFor="resume">자소서</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="interview" />
                  <Label htmlFor="interview">면접</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="portfolio" />
                  <Label htmlFor="portfolio">포트폴리오</Label>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="availability">가능한 시간대</Label>
              <Textarea
                id="availability"
                placeholder="예: 주중 저녁 7시-10시, 주말 오전 10시-오후 6시"
                className="min-h-[100px]"
              />
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>세션 가격 설정</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price-30min">30분 세션 가격 (원)</Label>
                  <Input id="price-30min" type="number" placeholder="15000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price-60min">60분 세션 가격 (원)</Label>
                  <Input id="price-60min" type="number" placeholder="25000" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">* 플랫폼 수수료 20%가 차감됩니다.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>계좌 정보</CardTitle>
            <CardDescription>멘토링 수익을 받을 계좌 정보를 입력하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bank">은행명</Label>
              <Input id="bank" placeholder="예: 신한은행" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="account-number">계좌번호</Label>
              <Input id="account-number" placeholder="예: 110-123-456789" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="account-holder">예금주</Label>
              <Input id="account-holder" placeholder="예: 홍길동" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full">멘토 신청하기</Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">취소</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

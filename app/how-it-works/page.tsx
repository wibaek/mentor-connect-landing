import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, Clock, CreditCard, Search, Star, Users } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl gradient-text">이용 방법</h1>
          <p className="text-xl text-muted-foreground">MentorConnect를 통해 멘토링을 시작하는 방법을 알아보세요</p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8">
        <Tabs defaultValue="mentee" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger
              value="mentee"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              멘티로 시작하기
            </TabsTrigger>
            <TabsTrigger
              value="mentor"
              className="data-[state=active]:bg-success data-[state=active]:text-success-foreground"
            >
              멘토로 시작하기
            </TabsTrigger>
          </TabsList>

          {/* Mentee Tab */}
          <TabsContent value="mentee" className="mt-6">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 text-primary">멘티로 시작하기</h2>
                <p className="text-muted-foreground">
                  SW마에스트로, 우아한테크코스, 부스트캠프 합격을 위한 멘토링을 받아보세요
                </p>
              </div>

              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary mb-4">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">1. 멘토 찾기</h3>
                  <p className="text-muted-foreground mb-4">
                    다양한 필터를 사용하여 나에게 맞는 멘토를 찾아보세요. 과정(SW마에스트로, 우아한테크코스,
                    부스트캠프), 주제(코딩테스트, 자소서, 면접 등), 합격 시기 등으로 필터링할 수 있습니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>멘토의 프로필, 경험, 리뷰를 확인하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>멘토의 가격과 가용 시간을 비교해보세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>멘토의 전문 분야와 내가 필요한 도움이 일치하는지 확인하세요</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    alt="멘토 찾기"
                    className="rounded-lg w-full shadow-lg"
                    height="300"
                    src="/placeholder.svg?height=300&width=500&text=Find+Mentors"
                    width="500"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <img
                    alt="시간 예약"
                    className="rounded-lg w-full shadow-lg"
                    height="300"
                    src="/placeholder.svg?height=300&width=500&text=Book+Time"
                    width="500"
                  />
                </div>
                <div className="order-2">
                  <div className="inline-flex items-center justify-center rounded-full bg-highlight/10 p-2 text-highlight mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-highlight">2. 시간 예약</h3>
                  <p className="text-muted-foreground mb-4">
                    멘토의 가용 시간 중 나에게 맞는 시간을 선택하고 세션 길이(30분 또는 60분)를 결정하세요. 멘토링 세션
                    전에 미리 질문을 준비하여 효율적인 시간을 보낼 수 있습니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-highlight mt-0.5 shrink-0" />
                      <span>멘토의 가용 시간 중에서 선택하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-highlight mt-0.5 shrink-0" />
                      <span>30분 또는 60분 세션 중 선택하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-highlight mt-0.5 shrink-0" />
                      <span>미리 질문을 준비하여 멘토에게 전달하세요</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center rounded-full bg-success/10 p-2 text-success mb-4">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-success">3. 결제하기</h3>
                  <p className="text-muted-foreground mb-4">
                    안전한 결제 시스템으로 멘토링 세션 비용을 지불하고 예약을 확정하세요. 세션 24시간 전까지 취소 시
                    전액 환불됩니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                      <span>안전한 결제 시스템으로 비용을 지불하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                      <span>세션 24시간 전까지 취소 시 전액 환불됩니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                      <span>결제 후 예약이 확정되며 멘토에게 알림이 전송됩니다</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    alt="결제하기"
                    className="rounded-lg w-full shadow-lg"
                    height="300"
                    src="/placeholder.svg?height=300&width=500&text=Payment"
                    width="500"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <img
                    alt="멘토링 참여"
                    className="rounded-lg w-full shadow-lg"
                    height="300"
                    src="/placeholder.svg?height=300&width=500&text=Join+Mentoring"
                    width="500"
                  />
                </div>
                <div className="order-2">
                  <div className="inline-flex items-center justify-center rounded-full bg-info/10 p-2 text-info mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-info">4. 멘토링 참여</h3>
                  <p className="text-muted-foreground mb-4">
                    예약된 시간에 화상 통화로 멘토와 1:1 커피챗을 진행하고 실질적인 조언을 받아보세요. 세션 후에는
                    멘토에 대한 리뷰와 평점을 남겨주세요.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-info mt-0.5 shrink-0" />
                      <span>예약 시간에 화상 통화로 멘토와 연결됩니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-info mt-0.5 shrink-0" />
                      <span>준비한 질문을 바탕으로 멘토링을 진행하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-info mt-0.5 shrink-0" />
                      <span>세션 후 멘토에 대한 리뷰와 평점을 남겨주세요</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/mentors">멘토 찾기 시작하기</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Mentor Tab */}
          <TabsContent value="mentor" className="mt-6">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 text-success">멘토로 시작하기</h2>
                <p className="text-muted-foreground">당신의 경험을 공유하고 다른 지원자들을 도와주세요</p>
              </div>

              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center rounded-full bg-success/10 p-2 text-success mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-success">1. 멘토 신청하기</h3>
                  <p className="text-muted-foreground mb-4">
                    SW마에스트로, 우아한테크코스, 부스트캠프 합격자라면 멘토 신청이 가능합니다. 회원가입 후 멘토
                    프로필을 작성하세요.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                      <span>회원가입 후 멘토 신청을 진행하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                      <span>합격 증명 자료를 제출하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                      <span>멘토 승인 후 프로필을 작성할 수 있습니다</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    alt="멘토 신청"
                    className="rounded-lg w-full shadow-lg"
                    height="300"
                    src="/placeholder.svg?height=300&width=500&text=Apply+as+Mentor"
                    width="500"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <img
                    alt="프로필 작성"
                    className="rounded-lg w-full shadow-lg"
                    height="300"
                    src="/placeholder.svg?height=300&width=500&text=Create+Profile"
                    width="500"
                  />
                </div>
                <div className="order-2">
                  <div className="inline-flex items-center justify-center rounded-full bg-highlight/10 p-2 text-highlight mb-4">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-highlight">2. 프로필 작성하기</h3>
                  <p className="text-muted-foreground mb-4">
                    멘티들에게 보여질 프로필을 작성하세요. 합격 경험, 전문 분야, 자기소개 등을 상세히 작성할수록 더 많은
                    멘티들이 관심을 가질 것입니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-highlight mt-0.5 shrink-0" />
                      <span>합격 과정과 기수를 정확히 입력하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-highlight mt-0.5 shrink-0" />
                      <span>멘토링 가능한 주제를 선택하세요 (코딩테스트, 자소서, 면접 등)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-highlight mt-0.5 shrink-0" />
                      <span>자신의 경험과 강점을 상세히 작성하세요</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">3. 가용 시간 설정하기</h3>
                  <p className="text-muted-foreground mb-4">
                    멘토링이 가능한 시간대를 설정하고 세션 가격을 결정하세요. 유연한 스케줄 관리로 자신에게 맞는 시간에
                    멘토링을 진행할 수 있습니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>주중/주말, 오전/오후/저녁 등 가능한 시간대를 설정하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>30분/60분 세션 가격을 설정하세요 (5,000원~30,000원 범위)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>언제든지 가용 시간을 수정할 수 있습니다</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    alt="가용 시간 설정"
                    className="rounded-lg w-full shadow-lg"
                    height="300"
                    src="/placeholder.svg?height=300&width=500&text=Set+Availability"
                    width="500"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <img
                    alt="멘토링 진행"
                    className="rounded-lg w-full shadow-lg"
                    height="300"
                    src="/placeholder.svg?height=300&width=500&text=Conduct+Mentoring"
                    width="500"
                  />
                </div>
                <div className="order-2">
                  <div className="inline-flex items-center justify-center rounded-full bg-info/10 p-2 text-info mb-4">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-info">4. 멘토링 진행 및 수익 창출</h3>
                  <p className="text-muted-foreground mb-4">
                    예약된 시간에 화상 통화로 멘티와 1:1 멘토링을 진행하세요. 멘토링 세션이 완료되면 수익이 정산되어
                    등록한 계좌로 입금됩니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-info mt-0.5 shrink-0" />
                      <span>예약된 시간에 화상 통화로 멘티와 연결됩니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-info mt-0.5 shrink-0" />
                      <span>멘티의 질문에 답변하고 실질적인 조언을 제공하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-info mt-0.5 shrink-0" />
                      <span>세션 완료 후 수익이 정산됩니다 (수수료 20% 차감)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-success hover:bg-success/90" asChild>
                  <Link href="/become-mentor">멘토 되기 시작하기</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">자주 묻는 질문</h2>
          <div className="grid gap-4">
            {[
              {
                question: "멘토가 되기 위한 자격 요건은 무엇인가요?",
                answer:
                  "SW마에스트로, 우아한테크코스, 부스트캠프 중 하나 이상의 과정에 합격한 경험이 있어야 합니다. 합격 증명 자료를 제출하면 검토 후 멘토로 승인됩니다.",
                color: "primary",
              },
              {
                question: "멘토링 비용은 어떻게 결정되나요?",
                answer:
                  "멘토가 직접 30분/60분 세션의 가격을 설정합니다. 일반적으로 5,000원~30,000원 범위 내에서 설정되며, 멘토의 경험과 전문성에 따라 달라질 수 있습니다.",
                color: "highlight",
              },
              {
                question: "멘토링 세션은 어떻게 진행되나요?",
                answer:
                  "멘토링 세션은 화상 통화로 진행됩니다. 예약된 시간에 플랫폼 내 화상 통화 시스템을 통해 멘토와 멘티가 연결되어 1:1 커피챗을 진행합니다.",
                color: "success",
              },
              {
                question: "멘토링 세션을 취소할 수 있나요?",
                answer:
                  "네, 세션 24시간 전까지 취소하면 전액 환불됩니다. 24시간 이내 취소 시에는 환불이 불가능하니 일정을 신중하게 선택해주세요.",
                color: "info",
              },
              {
                question: "멘토의 수익은 어떻게 정산되나요?",
                answer:
                  "멘토링 세션이 완료되면 멘토에게 수익이 정산됩니다. 플랫폼 수수료 20%가 차감된 금액이 멘토가 등록한 계좌로 입금됩니다. 정산은 주 1회 진행됩니다.",
                color: "primary",
              },
            ].map((faq, i) => (
              <Card key={i} className={`shadow-md border-l-4 border-l-${faq.color}`}>
                <CardHeader className={`bg-${faq.color}/5`}>
                  <CardTitle className={`text-lg text-${faq.color}`}>{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-foreground">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 gradient-bg text-white rounded-lg my-8">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">지금 바로 시작하세요</h2>
          <p className="text-xl max-w-2xl mx-auto">
            멘토를 찾아 실질적인 조언을 받거나, 멘토가 되어 당신의 경험을 공유하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/mentors">멘토 찾기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/become-mentor">멘토 되기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

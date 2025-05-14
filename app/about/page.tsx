import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Quote } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl gradient-text">MentorConnect 소개</h1>
          <p className="text-xl text-muted-foreground">SW 개발자 커리어 성장을 위한 1:1 멘토링 플랫폼</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">우리의 미션</h2>
            <p className="text-lg mb-4">
              MentorConnect는 SW마에스트로, 우아한테크코스, 부스트캠프와 같은 국내 최고의 개발자 양성 과정 합격자들과
              예비 지원자들을 연결하여 실질적인 조언과 멘토링을 제공하는 플랫폼입니다.
            </p>
            <p className="text-lg mb-4">
              우리는 개발자 커뮤니티 내에서 지식과 경험의 선순환을 만들어 더 많은 사람들이 성장할 수 있는 기회를
              제공하고자 합니다.
            </p>
            <p className="text-lg">
              실제 합격 경험이 있는 멘토들의 생생한 조언을 통해 지원자들은 더 효율적으로 준비하고, 멘토들은 자신의
              경험을 공유하며 추가 수입을 얻을 수 있습니다.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              alt="팀 미션 이미지"
              className="w-full h-auto object-cover"
              height="400"
              src="/placeholder.svg?height=400&width=600&text=Our+Mission"
              width="600"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl font-bold mb-10 text-center gradient-text">왜 MentorConnect인가요?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg border-t-4 border-t-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary">검증된 멘토</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                모든 멘토는 SW마에스트로, 우아한테크코스, 부스트캠프 합격자로 검증된 경험을 가지고 있습니다. 실제 합격
                경험을 바탕으로 한 실질적인 조언을 제공합니다.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-t-4 border-t-highlight">
            <CardHeader className="bg-highlight/5">
              <CardTitle className="text-highlight">맞춤형 멘토링</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                코딩테스트, 자소서, 면접 등 다양한 주제에 대해 멘티의 필요에 맞는 맞춤형 멘토링을 제공합니다. 멘토의
                가용 시간 중 원하는 시간을 선택할 수 있습니다.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-t-4 border-t-success">
            <CardHeader className="bg-success/5">
              <CardTitle className="text-success">안전한 결제</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                안전한 결제 시스템을 통해 멘토링 비용을 지불하고, 세션 24시간 전까지 취소 시 전액 환불됩니다. 투명한
                리뷰 시스템으로 멘토의 품질을 확인할 수 있습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl font-bold mb-10 text-center gradient-text">팀 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "홍길동 1", role: "CEO & 공동창업자", program: "SW마에스트로", color: "primary" },
            { name: "홍길동 2", role: "CTO & 공동창업자", program: "우아한테크코스", color: "highlight" },
            { name: "홍길동 3", role: "COO & 공동창업자", program: "부스트캠프", color: "success" },
          ].map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Avatar className={`h-32 w-32 mb-4 border-4 border-${member.color}/20`}>
                <AvatarImage src={`/placeholder.svg?height=128&width=128&text=Team+${i + 1}`} alt={`팀원 ${i + 1}`} />
                <AvatarFallback className={`bg-${member.color}/10 text-${member.color}`}>팀</AvatarFallback>
              </Avatar>
              <h3 className={`text-xl font-bold mb-1 text-${member.color}`}>{member.name}</h3>
              <p className="text-muted-foreground mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                {i === 0
                  ? "SW마에스트로 13기 출신으로, 개발자 커뮤니티 활성화에 관심이 많습니다. 모든 개발자가 성장할 수 있는 기회를 만들고자 합니다."
                  : i === 1
                    ? "우아한테크코스 4기 출신으로, 기술적 역량과 함께 멘토링의 중요성을 경험했습니다. 기술 공유 문화를 확산시키고자 합니다."
                    : "부스트캠프 6기 출신으로, 교육과 멘토링 시스템에 관심이 많습니다. 효율적인 학습 경로를 만들어 더 많은 개발자를 양성하고자 합니다."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Success Stories */}
      <section className="py-12 md:py-16 bg-muted rounded-lg my-8">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center gradient-text">성공 사례</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-background shadow-lg">
                <CardHeader className={`bg-${i === 1 ? "primary" : "highlight"}/5`}>
                  <div className="flex items-center gap-4">
                    <Quote className={`h-8 w-8 text-${i === 1 ? "primary" : "highlight"}`} />
                    <div>
                      <CardTitle>이멘티 {i}</CardTitle>
                      <CardDescription>
                        {i === 1 ? "SW마에스트로 14기 합격" : "우아한테크코스 5기 합격"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {i === 1
                      ? "MentorConnect를 통해 SW마에스트로 13기 멘토님과 3회의 멘토링 세션을 가졌습니다. 코딩테스트 준비 방법과 면접 팁을 얻을 수 있었고, 실제 합격 후에도 계속해서 조언을 구하고 있습니다."
                      : "우아한테크코스 4기 멘토님의 조언으로 자소서와 포트폴리오를 완전히 개선할 수 있었습니다. 특히 기술 면접 준비에 큰 도움이 되었고, 덕분에 자신감을 가지고 면접에 임할 수 있었습니다."}
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">{i === 1 ? "코딩테스트 합격률 향상" : "자소서 작성 스킬 향상"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">{i === 1 ? "면접 자신감 상승" : "기술 면접 준비 완료"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">{i === 1 ? "멘토와의 지속적인 네트워킹" : "포트폴리오 퀄리티 향상"}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text">문의하기</h2>
          <p className="text-lg text-muted-foreground">더 궁금한 점이 있으시면 언제든지 문의해주세요.</p>
          <p className="text-lg">
            이메일: <span className="font-medium text-primary">contact@mentorconnect.kr</span>
          </p>
        </div>
      </section>
    </div>
  )
}

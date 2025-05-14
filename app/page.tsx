import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  CreditCard,
  Search,
  Star,
  Users,
} from "lucide-react";
import SubscribeForm from "./components/subscribe-form";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  SW 개발자 커리어 성장을 위한 1:1 멘토링
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  SW마에스트로, 우아한테크코스, 부스트캠프 합격자들과 직접
                  커피챗을 통해 실질적인 조언을 얻어보세요.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/mentors">멘토 찾기</Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/become-mentor">멘토 되기</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mr-0">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  alt="멘토링 이미지"
                  className="aspect-video object-cover w-full"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Subscribe */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                베타 서비스 알림
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                서비스 출시 소식을 가장 먼저 받아보세요.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-md mt-8">
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                이용 방법
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                간단한 4단계로 멘토와 연결되어 커리어 성장을 위한 조언을
                받아보세요.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card className="flex flex-col items-center text-center border-t-4 border-t-primary">
              <CardHeader className="flex flex-col items-center">
                <Search className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>멘토 찾기</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  과정, 주제, 합격 시기 등 다양한 필터로 나에게 맞는 멘토를
                  찾아보세요.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center border-t-4 border-t-highlight">
              <CardHeader className="flex flex-col items-center">
                <Clock className="h-10 w-10 mb-2 text-highlight" />
                <CardTitle>시간 예약</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  멘토의 가용 시간 중 나에게 맞는 시간을 선택하고 질문을
                  준비하세요.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center border-t-4 border-t-success">
              <CardHeader className="flex flex-col items-center">
                <CreditCard className="h-10 w-10 mb-2 text-success" />
                <CardTitle>결제하기</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  안전한 결제 시스템으로 멘토링 세션 비용을 지불하고 예약을
                  확정하세요.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center border-t-4 border-t-info">
              <CardHeader className="flex flex-col items-center">
                <Users className="h-10 w-10 mb-2 text-info" />
                <CardTitle>멘토링 참여</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  화상 통화로 멘토와 1:1 커피챗을 진행하고 실질적인 조언을
                  받아보세요.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                인기 멘토
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                멘티들에게 높은 평가를 받은 멘토들을 만나보세요.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] relative">
                    <img
                      alt={`멘토 ${i}`}
                      className="object-cover w-full h-full"
                      height="225"
                      src={`/placeholder.svg?height=225&width=300&text=Mentor+${i}`}
                      width="300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">김멘토</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-warning text-warning mr-1" />
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        i % 3 === 0
                          ? "swm-badge"
                          : i % 3 === 1
                          ? "woowa-badge"
                          : "boost-badge"
                      }`}
                    >
                      {i % 3 === 0
                        ? "SW마에스트로"
                        : i % 3 === 1
                        ? "우아한테크코스"
                        : "부스트캠프"}
                    </span>
                    <span className="text-sm ml-2 text-muted-foreground">
                      {i % 3 === 0 ? "14기" : i % 3 === 1 ? "5기" : "7기"}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CheckCircle className="h-4 w-4 mr-1 text-success" />
                    <span>코딩테스트, 자소서, 면접</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    SW마에스트로 14기 합격자로, 코딩테스트와 면접 준비에 대한
                    실질적인 조언을 제공합니다.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-highlight">
                      ₩15,000 / 30분
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <Link href={`/mentors/${i}`}>프로필 보기</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/mentors">모든 멘토 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                멘티 후기
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                실제 멘토링을 받은 멘티들의 생생한 후기를 확인해보세요.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40&text=${i}`}
                        alt="멘티 이미지"
                      />
                      <AvatarFallback>멘티</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">이멘티</CardTitle>
                      <CardDescription>SW마에스트로 지원자</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "실제 합격자의 조언을 들을 수 있어서 정말 좋았습니다.
                    코딩테스트 준비 방법과 면접 팁이 매우 유용했고, 덕분에
                    자신감을 얻을 수 있었습니다."
                  </p>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground pt-0">
                  2023년 12월
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                지금 바로 시작하세요
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SW 개발자 커리어의 첫 걸음, MentorConnect와 함께하세요.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/mentors">멘토 찾기</Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/become-mentor">멘토 되기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

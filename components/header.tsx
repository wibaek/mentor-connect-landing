import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"

export default function Header() {
  // This is a placeholder for authentication state
  const isAuthenticated = false

  return (
    <header className="border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold gradient-text">MentorConnect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/mentors" className="text-sm font-medium transition-colors hover:text-primary">
            멘토 찾기
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            이용 방법
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            소개
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <UserNav />
          ) : (
            <>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                <Link href="/login">로그인</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/signup">회원가입</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

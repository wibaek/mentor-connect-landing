import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">MentorConnect</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} MentorConnect. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            이용약관
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            개인정보처리방침
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            문의하기
          </Link>
        </div>
      </div>
    </footer>
  )
}

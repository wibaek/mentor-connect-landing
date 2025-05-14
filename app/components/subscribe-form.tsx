"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("유효한 이메일을 입력해주세요.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        "https://qmoo5rzm0h.execute-api.ap-northeast-2.amazonaws.com/prod/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.statusCode === 200) {
        setStatus("success");
        setMessage("구독해 주셔서 감사합니다! 곧 소식을 전해드리겠습니다.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "구독 처리 중 오류가 발생했습니다.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("서버 연결 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-indigo-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            className="w-full border-indigo-200 focus:border-indigo-400"
            disabled={status === "loading" || status === "success"}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "처리 중..." : "베타 알림 받기"}
        </Button>

        {status === "success" && (
          <p className="text-green-600 text-sm">{message}</p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm">{message}</p>
        )}
      </form>
    </div>
  );
}

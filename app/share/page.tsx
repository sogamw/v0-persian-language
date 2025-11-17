'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Share2, ArrowRight } from 'lucide-react'

export default function SharePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 p-8">
      <div className="container mx-auto max-w-2xl">
        <Link href="/" className="inline-block mb-6">
          <Button variant="ghost">
            <ArrowRight className="w-4 h-4 ml-2" />
            بازگشت
          </Button>
        </Link>

        <div className="text-center mb-12">
          <Share2 className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-2">اشتراک تجربه</h1>
          <p className="text-muted-foreground">تجاربتان را با دیگران به اشتراک بگذارید</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>اشتراک‌گذاری تجربیات شخصی</CardTitle>
            <CardDescription>کمک به دیگر زنان از طریق تجاربتان</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">شروع اشتراک</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

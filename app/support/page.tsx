'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, ArrowRight } from 'lucide-react'

export default function SupportPage() {
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
          <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-2">پشتیبانی آنلاین</h1>
          <p className="text-muted-foreground">ما در اینجا برای کمک هستیم</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>تماس با پشتیبانی</CardTitle>
            <CardDescription>تیم پشتیبانی ما ۲۴/۷ آماده کمک است</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-pink-50 rounded-lg">
              <p className="text-sm font-semibold">شماره تماس:</p>
              <p className="text-lg">۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
            <Button className="w-full">شروع چت آنلاین</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

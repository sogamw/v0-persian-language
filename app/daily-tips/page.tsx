'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, ArrowRight } from 'lucide-react'

export default function DailyTipsPage() {
  const tips = [
    { icon: '💧', title: 'نوشیدن آب', description: 'حداقل 8 لیوان آب روزانه' },
    { icon: '🥗', title: 'تغذیه سالم', description: 'مصرف میوه و سبزیجات' },
    { icon: '🏃', title: 'فعالیت جسمانی', description: '30 دقیقه حرکت روزانه' },
    { icon: '😴', title: 'خواب سالم', description: '7-9 ساعت خواب' },
  ]

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
          <Lightbulb className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-2">توصیه روزانه</h1>
          <p className="text-muted-foreground">نکات سلامتی برای هر روز</p>
        </div>

        <div className="grid gap-4">
          {tips.map((tip, i) => (
            <Card key={i} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tip.icon}</span>
                  <div>
                    <CardTitle>{tip.title}</CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

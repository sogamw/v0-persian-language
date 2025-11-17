'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, ArrowRight } from 'lucide-react'

export default function ArticlesPage() {
  const articles = [
    { title: 'تغییرات بدن در نوجوانی', category: 'نوجوان' },
    { title: 'سلامت عاطفی و روانی', category: 'سلامت' },
    { title: 'تغذیه در دوران بارداری', category: 'بارداری' },
    { title: 'مراقبت پوست', category: 'زیبایی' },
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
          <BookOpen className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-2">مقالات</h1>
          <p className="text-muted-foreground">اطلاعات و دانش برای سلامتی بهتر</p>
        </div>

        <div className="grid gap-4">
          {articles.map((article, i) => (
            <Card key={i} className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>{article.category}</CardDescription>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

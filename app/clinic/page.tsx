'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Stethoscope, ArrowRight } from 'lucide-react'

export default function ClinicPage() {
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
          <Stethoscope className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-2">کلینیک</h1>
          <p className="text-muted-foreground">خدمات پزشکی و مشاوره</p>
        </div>

        <div className="grid gap-4">
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardHeader>
              <CardTitle>مشاوره پزشک</CardTitle>
              <CardDescription>ارتباط مستقیم با پزشکان متخصص</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/user/appointments">
                <Button className="w-full">رزرو نوبت</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

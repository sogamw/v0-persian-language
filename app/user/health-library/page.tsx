'use client'

import { UserSidebar } from '@/components/user/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Apple, Dumbbell, Brain, Heart } from 'lucide-react'
import { useState } from 'react'

export default function HealthLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const articles = [
    {
      id: '1',
      category: 'نوجوان',
      title: 'تغییرات بدن در دوران نوجوانی',
      description: 'درک تغییرات طبیعی و نرمال در دوران نوجوانی',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      id: '2',
      category: 'نوجوان',
      title: 'بهداشت و پاکی‌زی شخصی',
      description: 'نکات مهم برای حفظ بهداشت شخصی',
      icon: Heart,
      color: 'text-primary'
    },
    {
      id: '3',
      category: 'تغذیه',
      title: 'تغذیه متوازن برای زنان',
      description: 'اصول تغذیه درست برای سلامتی بهتر',
      icon: Apple,
      color: 'text-green-600'
    },
    {
      id: '4',
      category: 'تغذیه',
      title: 'مواد غذایی پیشگیری‌کننده',
      description: 'غذاهایی که باعث تقویت ایمنی می‌شوند',
      icon: Apple,
      color: 'text-green-600'
    },
    {
      id: '5',
      category: 'تغذیه',
      title: 'تغذیه در دوران قاعدگی',
      description: 'چه بخوریم در ایام قاعدگی',
      icon: Apple,
      color: 'text-green-600'
    },
    {
      id: '6',
      category: 'ورزش',
      title: 'ورزش‌های مناسب برای زنان',
      description: 'تمرین‌های ایمن و موثر',
      icon: Dumbbell,
      color: 'text-orange-600'
    },
    {
      id: '7',
      category: 'ورزش',
      title: 'یوگا و نرمش برای سلامتی',
      description: 'تمرین‌های یوگا برای تقویت بدن',
      icon: Dumbbell,
      color: 'text-orange-600'
    },
    {
      id: '8',
      category: 'ورزش',
      title: 'فعالیت جسمانی در چرخه قاعدگی',
      description: 'بهترین ورزش‌ها برای هر فاز',
      icon: Dumbbell,
      color: 'text-orange-600'
    },
    {
      id: '9',
      category: 'سلامت‌روان',
      title: 'مدیریت استرس و اضطراب',
      description: 'روش‌هایی برای کاهش استرس',
      icon: Brain,
      color: 'text-purple-600'
    },
  ]

  const categories = ['all', 'نوجوان', 'تغذیه', 'ورزش', 'سلامت‌روان']

  const filtered = selectedCategory === 'all'
    ? articles
    : articles.filter(a => a.category === selectedCategory)

  return (
    <div className="flex h-screen bg-background">
      <UserSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">کتاب‌خانه سلامت</h1>
            <p className="text-muted-foreground">آموزش‌ها و مقالات درباره سلامتی زنان</p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'همه' : cat}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(article => {
              const Icon = article.icon
              return (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Icon className={`w-8 h-8 ${article.color}`} />
                      <span className="px-2 py-1 bg-secondary/50 rounded text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      خواندن
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Featured Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">مقالات برتر</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="lg:col-span-2 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <CardTitle>رابطه قاعدگی و سلامتی روان</CardTitle>
                  <CardDescription>چگونه چرخه قاعدگی بر حالات خلقی تأثیر می‌گذارد</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    چرخه قاعدگی تنها تغییرات فیزیکی ایجاد نمی‌کند بلکه می‌تواند بر سلامتی روانی و حالات خلقی نیز تأثیر بگذارد...
                  </p>
                  <Button>خواندن مقاله کامل</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

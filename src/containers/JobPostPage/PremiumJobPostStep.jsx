"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Tag } from "lucide-react"

export default function PremiumJobPostStep({ formData, handleInputChange, handleTagToggle, nextStep, prevStep }) {
  const premiumTags = [
    "Lương cao",
    "Thưởng hấp dẫn",
    "Môi trường quốc tế",
    "Chế độ tốt",
    "Đào tạo chuyên sâu",
    "Cơ hội thăng tiến",
    "Công nghệ mới",
    "Làm việc từ xa",
    "Linh hoạt thời gian",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gói dịch vụ</CardTitle>
        <CardDescription>Chọn gói dịch vụ và thêm các thẻ đánh dấu để tăng hiệu quả tuyển dụng</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup
          defaultValue={formData.selectedPackage}
          onValueChange={(value) => handleInputChange("selectedPackage", value)}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
            <RadioGroupItem value="basic" id="basic" />
            <Label htmlFor="basic" className="flex-1 cursor-pointer">
              <div className="font-medium">Gói Cơ Bản</div>
              <div className="text-sm text-muted-foreground">Đăng tin tuyển dụng cơ bản</div>
            </Label>
            <div className="font-medium">Miễn phí</div>
          </div>
          <div className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-muted/50 cursor-pointer border-primary bg-primary/5">
            <RadioGroupItem value="premium" id="premium" />
            <Label htmlFor="premium" className="flex-1 cursor-pointer">
              <div className="font-medium">Gói Nâng Cao</div>
              <div className="text-sm text-muted-foreground">
                Đăng tin tuyển dụng + Hiển thị ưu tiên + Thêm thẻ đánh dấu
              </div>
            </Label>
            <div className="font-medium">500.000đ</div>
          </div>
          <div className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
            <RadioGroupItem value="premium-plus" id="premium-plus" />
            <Label htmlFor="premium-plus" className="flex-1 cursor-pointer">
              <div className="font-medium">Gói Cao Cấp</div>
              <div className="text-sm text-muted-foreground">
                Đăng tin tuyển dụng + Hiển thị ưu tiên + Thêm thẻ đánh dấu + Tiếp cận ứng viên tiềm năng
              </div>
            </Label>
            <div className="font-medium">1.000.000đ</div>
          </div>
        </RadioGroup>

        <div className="space-y-4 pt-4">
          <div className="flex items-center">
            <Tag className="mr-2 h-5 w-5 text-primary" />
            <h3 className="font-medium">Thêm thẻ đánh dấu</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Thêm các thẻ đánh dấu để thu hút ứng viên và làm nổi bật tin tuyển dụng của bạn
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {premiumTags.map((tag) => (
              <Badge
                key={tag}
                variant={formData.premiumTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer py-1.5 px-3"
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <Button onClick={nextStep}>
          Tiếp theo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}


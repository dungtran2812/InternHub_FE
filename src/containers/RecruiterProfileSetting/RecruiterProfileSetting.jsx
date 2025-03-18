import { useState } from "react"
import { Upload, Building, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function RecruiterProfileSettings() {
  const [logoFile, setLogoFile] = useState(null)
  const [backgroundFile, setBackgroundFile] = useState(null)
  const [logoPreview, setLogoPreview] = useState(null)
  const [backgroundPreview, setBackgroundPreview] = useState(null)

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setLogoFile(file)
      setLogoPreview(URL.createObjectURL(file))
    }
  }

  const handleBackgroundChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setBackgroundFile(file)
      setBackgroundPreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="container mx-auto py-10 space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">Cài Đặt Hồ Sơ</h1>

      {/* Recruiter Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>Hồ Sơ Nhà Tuyển Dụng</CardTitle>
          <CardDescription>Cập nhật thông tin cá nhân của bạn với tư cách là nhà tuyển dụng</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Họ và Tên</Label>
              <Input id="fullName" placeholder="Nhập họ và tên của bạn" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Địa Chỉ Email</Label>
              <Input id="email" type="email" placeholder="email@congty.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số Điện Thoại</Label>
              <Input id="phone" type="tel" placeholder="0912 345 678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Địa chỉ làm việc</Label>
              <Input id="location" placeholder="VD: Q1 TpHCM" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Lưu Hồ Sơ Nhà Tuyển Dụng</Button>
        </CardFooter>
      </Card>

      {/* Company Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>Hồ Sơ Công Ty</CardTitle>
          <CardDescription>Quản lý thông tin công ty của bạn</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="existing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="existing">Chọn Công Ty Hiện Có</TabsTrigger>
              <TabsTrigger value="new">Tạo Hồ Sơ Công Ty Mới</TabsTrigger>
            </TabsList>

            <TabsContent value="existing">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company-search">Tìm kiếm công ty của bạn</Label>
                  <Input id="company-search" placeholder="Nhập tên công ty..." />
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Công Ty Gợi Ý</h3>

                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                        <Building className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Công Ty Mẫu {i}</h4>
                        <p className="text-sm text-muted-foreground">Công nghệ • 100-500 nhân viên</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Check className="h-4 w-4 mr-2" />
                        Chọn
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="new">
              <div className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/50 overflow-hidden">
                    {logoPreview ? (
                      <img
                        src={logoPreview || "/placeholder.svg"}
                        alt="Logo công ty"
                        className="object-contain"
                      />
                    ) : (
                      <Upload className="h-10 w-10 text-muted-foreground" />
                    )}
                    <input
                      type="file"
                      id="logo-upload"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      accept="image/*"
                      onChange={handleLogoChange}
                    />
                  </div>
                  <Label htmlFor="logo-upload" className="cursor-pointer text-sm text-muted-foreground">
                    {logoPreview ? "Thay đổi logo công ty" : "Tải lên logo công ty"}
                  </Label>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/50 overflow-hidden">
                    {backgroundPreview ? (
                      <img
                        src={backgroundPreview || "/placeholder.svg"}
                        alt="Logo công ty"
                        className="object-contain"
                      />
                    ) : (
                      <Upload className="h-10 w-10 text-muted-foreground" />
                    )}
                    <input
                      type="file"
                      id="logo-upload"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      accept="image/*"
                      onChange={handleBackgroundChange}
                    />
                  </div>
                  <Label htmlFor="logo-upload" className="cursor-pointer text-sm text-muted-foreground">
                    {backgroundPreview ? "Thay đổi ảnh nền công ty" : "Tải lên ảnh nền công ty"}
                  </Label>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">
                      Tên công ty <span className="text-red-500">*</span>
                    </Label>
                    <Input id="company-name" placeholder="Nhập tên công ty" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-id">Mã số thuế</Label>
                    <Input id="tax-id" placeholder="Nhập mã số thuế" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">
                      Lĩnh vực hoạt động <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Chọn lĩnh vực hoạt động" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Công nghệ</SelectItem>
                        <SelectItem value="healthcare">Y tế</SelectItem>
                        <SelectItem value="finance">Tài chính</SelectItem>
                        <SelectItem value="education">Giáo dục</SelectItem>
                        <SelectItem value="manufacturing">Sản xuất</SelectItem>
                        <SelectItem value="retail">Bán lẻ</SelectItem>
                        <SelectItem value="other">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-size">Quy mô</Label>
                    <Select>
                      <SelectTrigger id="company-size">
                        <SelectValue placeholder="Chọn quy mô công ty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 nhân viên</SelectItem>
                        <SelectItem value="11-50">11-50 nhân viên</SelectItem>
                        <SelectItem value="51-200">51-200 nhân viên</SelectItem>
                        <SelectItem value="201-500">201-500 nhân viên</SelectItem>
                        <SelectItem value="501-1000">501-1000 nhân viên</SelectItem>
                        <SelectItem value="1001+">1001+ nhân viên</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-email">
                      Email công ty <span className="text-red-500">*</span>
                    </Label>
                    <Input id="company-email" type="email" placeholder="Nhập email công ty" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-phone">
                      Số điện thoại <span className="text-red-500">*</span>
                    </Label>
                    <Input id="company-phone" type="tel" placeholder="Nhập số điện thoại" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="company-address">
                      Địa chỉ <span className="text-red-500">*</span>
                    </Label>
                    <Input id="company-address" placeholder="Nhập địa chỉ công ty" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="company-description">Mô tả công ty</Label>
                    <Textarea
                      id="company-description"
                      placeholder="Mô tả về công ty, văn hóa và điều gì làm nên sự độc đáo của công ty bạn..."
                      className="min-h-[120px]"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button>Lưu Hồ Sơ Công Ty</Button>
        </CardFooter>
      </Card>
    </div>
  )
}


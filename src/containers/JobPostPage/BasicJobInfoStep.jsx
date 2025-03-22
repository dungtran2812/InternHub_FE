import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight } from 'lucide-react'
import { useGetIndustryQuery, useGetJobFunctionQuery } from "@/services/internHubApi"

export default function BasicJobInfoStep({ formData, handleInputChange, nextStep }) {

  const { data: jobFunctions, isLoading: isLoadingJobFunction } = useGetJobFunctionQuery();
  const { data: industries, isLoading: isLoadingIndustry } = useGetIndustryQuery()


  return (
    <Card>
      <CardHeader>
        <CardTitle>Thông tin cơ bản</CardTitle>
        <CardDescription>
          Nhập thông tin chi tiết về vị trí tuyển dụng
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="jobTitle">Tiêu đề công việc <span className="text-red-500">*</span></Label>
            <Input
              id="jobTitle"
              placeholder="Ví dụ: Nhân viên kinh doanh, Kỹ sư phần mềm..."
              value={formData.jobTitle}
              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="salary">Tiền lương <span className="text-red-500">*</span></Label>
            <Input
              id="salary"
              placeholder="10000000"
              value={formData.salary}
              onChange={(e) => handleInputChange('salary', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="jobFunctionId">Chức năng công việc <span className="text-red-500">*</span></Label>
            <Select
              onValueChange={(value) => handleInputChange('jobFunctionId', value)}
              value={formData.jobFunctionId}
            >
              <SelectTrigger id="jobFunctionId">
                <SelectValue placeholder="Chọn chức năng công việc" />
              </SelectTrigger>
              <SelectContent>
                {jobFunctions?.map((item) => (
                  <SelectItem key={item} value={item.id}>{item.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="industryId">Ngành nghề <span className="text-red-500">*</span></Label>
            <Select
              onValueChange={(value) => handleInputChange('industryId', value)}
              value={formData.industryId}
            >
              <SelectTrigger id="industryId">
                <SelectValue placeholder="Chọn ngành nghề" />
              </SelectTrigger>
              <SelectContent>
                {industries?.map((item) => (
                  <SelectItem key={item} value={item.id}>{item.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Mô tả công việc <span className="text-red-500">*</span></Label>
          <Textarea
            id="description"
            placeholder="Mô tả chi tiết về công việc, trách nhiệm, quyền lợi..."
            className="min-h-[120px]"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="requirement">Yêu cầu công việc <span className="text-red-500">*</span></Label>
          <Textarea
            id="requirement"
            placeholder="Các kỹ năng, kinh nghiệm, bằng cấp yêu cầu..."
            className="min-h-[120px]"
            value={formData.requirement}
            onChange={(e) => handleInputChange('requirement', e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="duration">Thời hạn hợp đồng <span className="text-red-500">*</span></Label>
            <Select
              onValueChange={(value) => handleInputChange('duration', value)}
              value={formData.duration}
            >
              <SelectTrigger id="duration">
                <SelectValue placeholder="Chọn thời hạn" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Toàn thời gian</SelectItem>
                <SelectItem value="part-time">Bán thời gian</SelectItem>
                <SelectItem value="contract">Hợp đồng</SelectItem>
                <SelectItem value="temporary">Tạm thời</SelectItem>
                <SelectItem value="internship">Thực tập</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Số lượng tuyển <span className="text-red-500">*</span></Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              placeholder="Nhập số lượng cần tuyển"
              value={formData.quantity}
              onChange={(e) => handleInputChange('quantity', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Địa điểm làm việc <span className="text-red-500">*</span></Label>
          <Input
            id="location"
            placeholder="Ví dụ: Hà Nội, Hồ Chí Minh..."
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            required
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={nextStep}>
          Tiếp theo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

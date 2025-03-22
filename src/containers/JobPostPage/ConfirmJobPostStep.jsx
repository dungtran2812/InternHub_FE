"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, FileCheck } from "lucide-react"
import { useCreateJobMutation } from "@/services/internHubApi"
import { toast } from "@/hooks/use-toast"
import { message } from "antd"

export default function ConfirmJobPostStep({ formData, prevStep }) {
  console.log("formData: ", formData)
  const [createJob, { isLoading: isApplying, isSuccess: isApplySuccess, isError: isApplyError }] = useCreateJobMutation()
  const handleSubmit = async () => {

    try {
      const response = await createJob(formData)
      if(response){
        message.success("Tạo công việc thành công")
      }
    } catch (error) {
      message.error(error)
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Xác nhận thông tin</CardTitle>
        <CardDescription>Kiểm tra lại thông tin trước khi đăng tin tuyển dụng</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted p-6 rounded-lg space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">{formData.jobTitle || "Chưa có tiêu đề"}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{formData.jobFunctionId || "Chưa chọn chức năng"}</Badge>
              <Badge variant="secondary">{formData.industryId || "Chưa chọn ngành nghề"}</Badge>
              <Badge variant="secondary">{formData.location || "Chưa có địa điểm"}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Thời hạn:</span> {formData.duration || "Chưa chọn"}
            </div>
            <div>
              <span className="font-medium">Số lượng:</span> {formData.quantity || "0"}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Mô tả công việc:</h4>
            <p className="text-sm whitespace-pre-line">{formData.description || "Chưa có mô tả"}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Yêu cầu công việc:</h4>
            <p className="text-sm whitespace-pre-line">{formData.requirement || "Chưa có yêu cầu"}</p>
          </div>

          {formData.premiumTags.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium">Thẻ đánh dấu:</h4>
              <div className="flex flex-wrap gap-2">
                {formData.premiumTags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <div className="flex items-center justify-between p-3 border rounded-md bg-background">
              <div>
                <h4 className="font-medium">Gói dịch vụ:</h4>
                <p className="text-sm text-muted-foreground">
                  {formData.selectedPackage === "basic"
                    ? "Gói Cơ Bản"
                    : formData.selectedPackage === "premium"
                      ? "Gói Nâng Cao"
                      : "Gói Cao Cấp"}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {formData.selectedPackage === "basic"
                    ? "Miễn phí"
                    : formData.selectedPackage === "premium"
                      ? "500.000đ"
                      : "1.000.000đ"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tôi đồng ý với các điều khoản và điều kiện
            </label>
            <p className="text-sm text-muted-foreground">
              Bạn đồng ý với các điều khoản sử dụng và chính sách bảo mật của chúng tôi.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <Button onClick={handleSubmit}>
          <FileCheck className="mr-2 h-4 w-4" />
          Đăng tin tuyển dụng
        </Button>
      </CardFooter>
    </Card>
  )
}


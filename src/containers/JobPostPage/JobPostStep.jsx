import { Check } from "lucide-react"

export default function JobPostStep({ currentStep }) {
  const steps = [
    { number: 1, label: "Thông tin cơ bản" },
    { number: 2, label: "Gói dịch vụ" },
    { number: 3, label: "Xác nhận" },
  ]

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                ${
                  currentStep === step.number
                    ? "bg-primary text-primary-foreground"
                    : currentStep > step.number
                      ? "bg-primary/80 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
            >
              {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
            </div>
            <span className={`text-sm ${currentStep === step.number ? "font-medium" : "text-muted-foreground"}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-muted h-1 mt-4 rounded-full overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-300"
          style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}


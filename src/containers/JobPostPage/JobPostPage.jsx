import { useState } from "react"
import JobPostStep from "./JobPostStep"
import BasicJobInfoStep from "./BasicJobInfoStep"
import PremiumJobPostStep from "./PremiumJobPostStep"
import ConfirmJobPostStep from "./ConfirmJobPostStep"
import { number } from "yup"

export default function JobPostingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    requirement: "",
    duration: "",
    quantity: "",
    location: "",
    jobFunctionId: "",
    industryId: "",
    premiumTags: [],
    selectedPackage: "basic",
    salary: ""
  })

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleTagToggle = (tag) => {
    const updatedTags = formData.premiumTags.includes(tag)
      ? formData.premiumTags.filter((t) => t !== tag)
      : [...formData.premiumTags, tag]

    setFormData({
      ...formData,
      premiumTags: updatedTags,
    })
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <JobPostStep currentStep={currentStep} />

      {currentStep === 1 && (
        <BasicJobInfoStep formData={formData} handleInputChange={handleInputChange} nextStep={nextStep} />
      )}

      {currentStep === 2 && (
        <PremiumJobPostStep
          formData={formData}
          handleInputChange={handleInputChange}
          handleTagToggle={handleTagToggle}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {currentStep === 3 && <ConfirmJobPostStep formData={formData} prevStep={prevStep} />}
    </div>
  )
}


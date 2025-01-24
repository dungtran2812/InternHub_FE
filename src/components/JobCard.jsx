import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function JobCard({ job }) {
  const { id, title, company, companyLogo, salary, locations } = job;
  return (
    <Card className="w-full border border-gray-200">
      <CardHeader className="p-4">
        <div className="flex items-start gap-3">
          <div className="relative w-12 h-12">
            <img
              src={companyLogo || "/placeholder.svg"}
              alt={`${company} logo`}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{company}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-orange-500 font-medium">{salary}</p>
        <p className="text-gray-600 text-sm mt-2">{locations.join(", ")}</p>
      </CardContent>
    </Card>
  )
}


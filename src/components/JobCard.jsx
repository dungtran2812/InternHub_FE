import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function JobCard({ job }) {
  const { id, jobTitle, company, salary, location } = job

  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200">
      <CardHeader className="p-4">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden border bg-white">
            <img
              src={company?.logoCompany || "/placeholder.svg"}
              alt={`${company?.name} logo`}
              className="object-contain w-full h-full p-1"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight line-clamp-2 mb-1">{jobTitle}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{company?.name}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-2">
          <p className="text-orange-500 font-medium">{salary}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="truncate">{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


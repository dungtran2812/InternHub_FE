import { Card } from "@/components/ui/card"
import MapPinIcon from "@/assets/MapPin.svg"

export default function RecruiterCard({
  name,
  logo,
  location,
  jobsAvailable,
  field,
}) {
  return (
    <Card className="flex w-[226px] h-[280px] p-1 flex-col justify-center items-center bg-white rounded-xl border-2 border-[#9699DB]">
      <div className="flex flex-col items-center w-full ">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 overflow-hidden bg-gray-50 flex items-center justify-center">
            {logo ? (
              <img
                alt={`${name} logo`}
                className="h-full w-full object-cover"
                src={logo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/fallback-logo.png';
                }}
              />
            ) : (
              <span className="text-gray-400 text-xl">{name[0]}</span>
            )}
          </div>
          <div className="mt-8 mb-4">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{field}</p>
          </div>
        </div>

        {/* Location and Jobs Available */}
        <div className="flex items-center text-center mt-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={MapPinIcon} alt="Location" className="mr-2" />
            <span>{location}</span>
          </div>
          
          <div className="text-sm">
            <span className="text-[#372ECE] font-medium">{jobsAvailable} jobs available</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

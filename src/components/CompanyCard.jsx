/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import { Link } from "react-router-dom"

export default function CompanyCard({
  name,
  logo,
  address,
  phoneNumber,
  email,
  type,
  website,
  employees
}) {
  return (
    <Card className="flex w-full max-w-3xl overflow-hidden">
      <div className="relative w-1/3 min-w-[120px] p-3 bg-white">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            alt={`Logo của ${name}`}
            className="absolute inset-0 h-full w-full object-cover"
            height="400"
            src={logo}
            width="200"
          />
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Theo dõi</Button>
              <Button size="sm">Xem tất cả việc làm</Button>
            </div>
          </div>
          <div className="grid gap-4 text-sm">
            <div>
              <span className="font-medium text-muted-foreground">Địa chỉ:</span>
              <p>{address}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-muted-foreground">Số điện thoại:</span>
                <p>{phoneNumber}</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Loại hình:</span>
                <p>{type}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-muted-foreground">Email:</span>
                <p>{email}</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Website:</span>
                {website ? (
                  <Link
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                    href={website}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {website.replace(/^https?:\/\//, '')}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                ) : (
                  <p>Không có sẵn</p>
                )}
              </div>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Số lượng nhân viên:</span>
              <p>{employees}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

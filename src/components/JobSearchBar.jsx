"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

const fields = [
  { id: 1, value: "Công nghệ" },
  { id: 2, value: "Tài chính" },
  { id: 3, value: "Chăm sóc sức khỏe" },
]

const jobFunctions = [
  { id: 1, value: "Developer" },
  { id: 2, value: "Designer" },
  { id: 3, value: "Manager" },
]

const locations = [
  { id: 1, value: "New York" },
  { id: 2, value: "San Francisco" },
  { id: 3, value: "Los Angeles" },
]
export default function JobSearchBar() {
  const [fieldOpen, setFieldOpen] = React.useState(false)
  const [fieldValue, setFieldValue] = React.useState("")

  const [jobFunctionOpen, setJobFunctionOpen] = React.useState(false)
  const [jobFunctionValue, setJobFunctionValue] = React.useState("")

  const [locationOpen, setLocationOpen] = React.useState(false)
  const [locationValue, setLocationValue] = React.useState("")

  const [searchText, setSearchText] = React.useState("")

  const handleSearch = () => {
    console.log("Tìm kiếm:", {
      searchText,
      field: fieldValue,
      location: locationValue,
      jobFunction: jobFunctionValue,
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-3">
        <Popover open={fieldOpen} onOpenChange={setFieldOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={fieldOpen}
              aria-label="Select field"
              className="w-[200px] justify-between"
            >
              {fieldValue ? fields.find((field) => field.value === fieldValue)?.value : "Lĩnh vực"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Tìm lĩnh vực..." className="h-9" />
              <CommandList>
                <CommandEmpty>Không tìm thấy lĩnh vực.</CommandEmpty>
                <CommandGroup>
                  {fields.map((field) => (
                    <CommandItem
                      key={field.value}
                      value={field.value}
                      onSelect={(currentValue) => {
                        setFieldValue(currentValue === fieldValue ? "" : currentValue)
                        setFieldOpen(false)
                      }}
                    >
                      {field.value}
                      <Check
                        className={cn("ml-auto h-4 w-4", fieldValue === field.value ? "opacity-100" : "opacity-0")}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={jobFunctionOpen} onOpenChange={setJobFunctionOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={jobFunctionOpen}
              aria-label="Select job function"
              className="w-[200px] justify-between"
            >
              {jobFunctionValue ? jobFunctions.find((job) => job.value === jobFunctionValue)?.value : "Ngành nghề"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Tìm ngành nghề..." className="h-9" />
              <CommandList>
                <CommandEmpty>Không tìm thấy ngành nghề.</CommandEmpty>
                <CommandGroup>
                  {jobFunctions.map((job) => (
                    <CommandItem
                      key={job.value}
                      value={job.value}
                      onSelect={(currentValue) => {
                        setJobFunctionValue(currentValue === jobFunctionValue ? "" : currentValue)
                        setJobFunctionOpen(false)
                      }}
                    >
                      {job.value}
                      <Check
                        className={cn("ml-auto h-4 w-4", jobFunctionValue === job.value ? "opacity-100" : "opacity-0")}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={locationOpen}
              aria-label="Select location"
              className="w-[200px] justify-between"
            >
              {locationValue ? locations.find((location) => location.value === locationValue)?.value : "Địa điểm"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Tìm địa điểm..." className="h-9" />
              <CommandList>
                <CommandEmpty>Không tìm thấy địa điểm.</CommandEmpty>
                <CommandGroup>
                  {locations.map((location) => (
                    <CommandItem
                      key={location.value}
                      value={location.value}
                      onSelect={(currentValue) => {
                        setLocationValue(currentValue === locationValue ? "" : currentValue)
                        setLocationOpen(false)
                      }}
                    >
                      {location.value}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          locationValue === location.value ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-[2] min-w-[200px]"
        />

        <Button onClick={handleSearch} className="bg-[#181D97] text-white hover:bg-[#181D97]/90">
          <Search className="mr-2 h-4 w-4" />
          Tìm kiếm
        </Button>
      </div>
    </div>
  )
}


import * as React from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { useGetIndustryQuery, useGetJobFunctionQuery } from "@/services/internHubApi"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "@/features/user"

const locations = [
  { id: 1, name: "New York" },
  { id: 2, name: "San Francisco" },
  { id: 3, name: "Los Angeles" },
]
export default function JobSearchBar() {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const search = useSelector((state) => state.rootReducer.user.search)
  const { data: jobFunctions, isLoading: isLoadingJobFunction, error: jobFunctionError } = useGetJobFunctionQuery();
  const { data: industries, isLoading: isLoadingIndustry, error: industryError } = useGetIndustryQuery();
  const [industryOpen, setIndustryOpen] = React.useState(false);
  const [industryValue, setIndustryValue] = React.useState(search.industry);

  const [jobFunctionOpen, setJobFunctionOpen] = React.useState(false);
  const [jobFunctionValue, setJobFunctionValue] = React.useState(search.jobFunction);

  const [locationOpen, setLocationOpen] = React.useState(false);
  const [locationValue, setLocationValue] = React.useState(search.location);
  
  const [searchTextValue, setSearchTextValue] = React.useState(search.searchText)
  React.useEffect(() => {
    dispatch(setSearch({
      industry: industryValue,
      jobFunction: jobFunctionValue,
      location: locationValue,
      searchText: searchTextValue
    }))
  }, [locationValue, jobFunctionValue, industryValue, dispatch, searchTextValue])

  const handleSearch = () => {
    navigation(`/job-search`)
    console.log("first")
  };
  console.log(search)
  return (
    <div className="max-w-4xl p-4">
      <div className="flex flex-col lg:flex-row items-center gap-2 bg-white rounded-lg border border-gray-200 p-3">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          {/* Loading state for industry */}
          {isLoadingIndustry ? (
            <div>Loading industries...</div>
          ) : industryError ? (
            <div className="text-red-500">Error loading industries: {industryError.message}</div>
          ) : (
            <Popover open={industryOpen} onOpenChange={setIndustryOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={industryOpen}
                  aria-label="Select field"
                  className="w-[130px] justify-between"
                >
                  <p className="truncate">{industryValue ? industries.find((industry) => industry.id === industryValue)?.name : 'Lĩnh Vực'}</p>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Tìm lĩnh vực..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>Không tìm thấy lĩnh vực.</CommandEmpty>
                    <CommandGroup>
                      {industries?.map((industry) => (
                        <CommandItem
                          key={industry.id}
                          value={industry.name}
                          onSelect={() => {
                            setIndustryValue(industry.id === industryValue ? "" : industry.id);
                            setIndustryOpen(false);
                          }}
                        >
                          {industry.name}
                          <Check
                            className={cn("ml-auto h-4 w-4", industryValue === industry.id ? "opacity-100" : "opacity-0")}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          )}

          {/* Loading state for job functions */}
          {isLoadingJobFunction ? (
            <div>Loading job functions...</div>
          ) : jobFunctionError ? (
            <div className="text-red-500">Error loading job functions: {jobFunctionError.message}</div>
          ) : (
            <Popover open={jobFunctionOpen} onOpenChange={setJobFunctionOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={jobFunctionOpen}
                  aria-label="Select job function"
                  className="w-[150px] justify-between"
                >
                  <p className="truncate">{jobFunctionValue ? jobFunctions.find((job) => job.id === jobFunctionValue)?.name : 'Ngành Nghề'}</p>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Tìm ngành nghề..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>Không tìm thấy ngành nghề.</CommandEmpty>
                    <CommandGroup>
                      {jobFunctions?.map((job) => (
                        <CommandItem
                          key={job.id}
                          value={job.id}
                          onSelect={() => {
                            setJobFunctionValue(job.id === jobFunctionValue ? "" : job.id);
                            setJobFunctionOpen(false);
                          }}
                        >
                          {job.name}
                          <Check
                            className={cn("ml-auto h-4 w-4", jobFunctionValue === job.id ? "opacity-100" : "opacity-0")}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          )}

          <Popover open={locationOpen} onOpenChange={setLocationOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={locationOpen}
                aria-label="Select location"
                className="w-[130px] justify-between"
              >
                <p className="truncate">{locationValue ? locations.find((location) => location.id === locationValue)?.name : "Địa điểm"}</p>
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
                        key={location.id}
                        value={location.id}
                        onSelect={() => {
                          setLocationValue(location.id === locationValue ? "" : location.id);
                          setLocationOpen(false);
                        }}
                      >
                        {location.name}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            locationValue === location.id ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Input and Button for lg and below */}
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <Input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            value={searchTextValue}
            onChange={(e) => setSearchTextValue(e.target.value)}
            className="min-w-[100px]"
          />
          <Button onClick={handleSearch} className="bg-[#181D97] text-white hover:bg-[#181D97]/90">
            {/* Hide text for xl and below */}
            <span className="hidden xl:inline">Tìm kiếm</span>
            <Search className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}


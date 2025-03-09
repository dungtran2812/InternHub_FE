import * as React from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { useGetIndustryQuery, useGetJobFilterQuery, useGetJobFunctionQuery } from "@/services/internHubApi"
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
  const { data: jobFunctions, isLoading: isLoadingJobFunction } = useGetJobFunctionQuery();
  const { data: industries, isLoading: isLoadingIndustry } = useGetIndustryQuery();

  const [industryOpen, setIndustryOpen] = React.useState(false);
  const [industryValue, setIndustryValue] = React.useState("");
  const [jobFunctionOpen, setJobFunctionOpen] = React.useState(false);
  const [jobFunctionValue, setJobFunctionValue] = React.useState("");
  const [searchTextValue, setSearchTextValue] = React.useState(search.searchText);

  // Set initial values from search state
  React.useEffect(() => {
    if (industries && search.industry) {
      const industry = industries.find(i => i.id === search.industry);
      setIndustryValue(industry?.name || "");
    }
    if (jobFunctions && search.jobFunction) {
      const jobFunction = jobFunctions.find(j => j.id === search.jobFunction);
      setJobFunctionValue(jobFunction?.name || "");
    }
  }, [search, industries, jobFunctions]);

  const handleSearch = () => {
    dispatch(setSearch({
      industry: industryValue,
      jobFunction: jobFunctionValue,
      searchText: searchTextValue
    }));
    navigation(`/job-search`);
  };

  return (
    <div className="max-w-4xl p-4">
      <div className="flex flex-col lg:flex-row items-center gap-2 bg-white rounded-lg border border-gray-200 p-3">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          {/* Industry Selector */}
          {isLoadingIndustry ? (
            <div>Loading industries...</div>
          ) : (
            <Popover open={industryOpen} onOpenChange={setIndustryOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={industryOpen}
                  className="w-[200px] justify-between"
                >
                  <p className="truncate">{industryValue || 'Lĩnh Vực'}</p>
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
                            setIndustryValue(industry.name);
                            setIndustryOpen(false);
                          }}
                        >
                          {industry.name}
                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              industryValue === industry.name ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          )}

          {/* Job Function Selector */}
          {isLoadingJobFunction ? (
            <div>Loading job functions...</div>
          ) : (
            <Popover open={jobFunctionOpen} onOpenChange={setJobFunctionOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={jobFunctionOpen}
                  className="w-[200px] justify-between"
                >
                  <p className="truncate">{jobFunctionValue || 'Ngành Nghề'}</p>
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
                          value={job.name}
                          onSelect={() => {
                            setJobFunctionValue(job.name);
                            setJobFunctionOpen(false);
                          }}
                        >
                          {job.name}
                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              jobFunctionValue === job.name ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Search Input and Button */}
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <Input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            value={searchTextValue}
            onChange={(e) => setSearchTextValue(e.target.value)}
            className="min-w-[100px]"
          />
          <Button 
            onClick={handleSearch} 
            className="bg-[#181D97] text-white hover:bg-[#181D97]/90"
          >
            <span className="hidden xl:inline">Tìm kiếm</span>
            <Search className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}


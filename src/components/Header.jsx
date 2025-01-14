import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import internlogoWhite from "@/assets/orgLogo/internlogoWhite.png";
import internText from "@/assets/orgLogo/interntext.png";

const Header = () => {
  const navItems = [
    { label: "Việc làm", href: "/jobs" },
    { label: "Hồ sơ & CV", href: "/profile" },
    { label: "Nhà tuyển dụng", href: "/recruiters" },
    { label: "Blog", href: "/blog" },
    { label: "Trang", href: "/pages" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1E34C0] text-white">
      <div className="container flex h-16 items-center justify-between px-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-14 w-12 p-1">
              <img src={internlogoWhite} alt="Logo Intern" className="h-full w-full object-contain" />
            </div>
            <div className="h-12 w-18">
              <img src={internText} alt="Chữ Intern" className="h-full w-full object-contain" />
            </div>
          </a>
        </div>

        {/* Main Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-200",
                    "focus:bg-blue-700 focus:text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400",
                    "rounded-md px-3 py-2"
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="hidden text-white hover:bg-blue-700 hover:text-white md:flex"
            style={{ fontSize: '14px', padding: '8px 16px', borderRadius: '80px', background: '#19267D' }}
          >
            Dành cho Nhà Tuyển Dụng
          </Button>
          <Button
            variant="outline"
            className="hidden bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 md:flex"
            style={{ fontSize: '14px', padding: '8px 16px', borderRadius: '30px', background: '#6F73E9', color: 'white', borderColor: '#6F73E9' }}
          >
            Đăng Nhập
          </Button>
          <Button 
            className="hidden text-white underline md:flex"
            style={{ fontSize: '14px', padding: '8px 16px', background: 'transparent' }}
          >
            Đăng Ký
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            size="icon"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

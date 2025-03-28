import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import avt_default from "@/assets/avt_default.png";
import internlogoWhite from "@/assets/orgLogo/internlogoWhite.png";
import internText from "@/assets/orgLogo/interntext.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "@/features/auth.action";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.rootReducer.user.accessToken);
  const avtUrl = useSelector((state) => state.rootReducer.user.avtUrl);
  
  const navItems = [
    { label: "Premium", href: "/become-premium" },
    { label: "Hồ sơ & CV", href: "/employee-profile" },
    { label: "Tạo CV", href: "/create-cv" },
    { label: "Công ty", href: "/companies" },
    { label: "Blog", href: "/blog" },
    { label: "Giới thiệu", href: "/about" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State để quản lý menu

  const handleLogout = () => {
    dispatch(signout());
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Đảo ngược trạng thái menu
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-[#1E34C0] text-white">
      <div className="grid grid-cols-12 h-16 w-full px-16">
        {/* Logo */}
        <div className="col-span-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-14 w-12 p-1">
              <img src={internlogoWhite} alt="Logo Intern" className="h-full w-full object-contain" />
            </div>
            <div className="h-12 w-18">
              <img src={internText} alt="Chữ Intern" className="h-full w-full object-contain" />
            </div>
          </Link>
        </div>

        {/* Main Navigation */}
        <NavigationMenu className="col-span-6 hidden xl:flex">
          <NavigationMenuList className="flex gap-5">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-200",
                    "focus:bg-blue-700 focus:text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400",
                    "rounded-md px-3 py-2"
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="col-span-4  items-center gap-2 hidden xl:flex">
          <Link to='/recruiter-register'>
            <Button
              variant="ghost"
              className="hidden text-white hover:bg-blue-700 hover:text-white sm:flex"
              style={{ fontSize: '14px', padding: '8px 16px', borderRadius: '80px', background: '#19267D' }}
            >
              Dành cho Nhà Tuyển Dụng
            </Button>
          </Link>
          {accessToken ? (
            <div className="flex items-center">
              <img
                src={avtUrl ? avtUrl : avt_default}
                alt="User  Avatar"
                className="h-10 w-10 rounded-full object-cover"
              />
              <Button
                className="ml-4 text-white underline"
                onClick={handleLogout}
                style={{ fontSize: '14px', padding: '8px 16px', background: 'transparent', border: 'none' }}
              >
                Đăng Xuất
              </Button>
            </div>
          ) : (
            <div className="flex">
              <Button
                variant="outline"
                className="hidden bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 sm:flex"
                style={{ fontSize: '14px', padding: '8px 16px', borderRadius: '30px', background: '#6F73E9', color: 'white', borderColor: '#6F73E9' }}
              >
                <Link to='/login'>
                  Đăng Nhập
                </Link>
              </Button>
              <Button
                className="hidden text-white underline sm:flex"
                style={{ fontSize: '14px', padding: '8px 16px', background: 'transparent' }}
              >
                <Link to='/signup'>
                  Đăng Ký
                </Link>
              </Button>
            </div>
          )}

        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden px-16">
        <Button
          variant="ghost"
          className=""
          size="icon"
          aria-label="Menu"
          onClick={toggleMenu} // Calls the toggleMenu function when the button is clicked
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
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
      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="xl:hidden bg-[#1E34C0] text-white">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-200",
                  "focus:bg-blue-700 focus:text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400",
                  "rounded-md px-3 py-2"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col">
              {accessToken ? (
                <>
                  <div className="flex items-center">
                    <img
                      src={avtUrl ? avtUrl : avt_default}
                      alt="User  Avatar"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <Button
                      className="ml-4 text-white underline"
                      onClick={handleLogout}
                      style={{ fontSize: '14px', padding: '8px 16px', background: 'transparent', border: 'none' }}
                    >
                      Đăng Xuất
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Link to='/recruiter-register'>
                    <Button
                      variant="ghost"
                      className="hidden text-white hover:bg-blue-700 hover:text-white sm:flex"
                      style={{ fontSize: '14px', padding: '8px 16px', borderRadius: '80px', background: '#19267D' }}
                    >
                      Dành cho Nhà Tuyển Dụng
                    </Button>
                  </Link>
                  <div className="mt-2 w-[200px]">
                    <Link to='/login' >
                      <Button className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 w-full">
                        Đăng Nhập
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-2 w-[200px]">
                    <Link to='/signup' >
                      <Button className="text-white underline w-full">
                        Đăng Ký
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
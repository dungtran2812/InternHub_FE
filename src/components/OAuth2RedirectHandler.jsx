import { setAccessToken, setAvatar, setEmail, setFullname, setGender, setRole, setUserId } from "@/features/user";
import { useLazyGetUserInfoQuery } from "@/services/internHubApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const OAuth2RedirectHandler = () => {
    const dispatch = useDispatch();
    const { toast } = useToast();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();
    const [fetchUser, { data: userInfo }] = useLazyGetUserInfoQuery();

    useEffect(() => {
        const handleGoogleRedirect = async () => {
            if (token) {
                try {
                    // Set token first
                    dispatch(setAccessToken(token));
                    
                    // Fetch user info
                    await fetchUser().unwrap();
                    
                    if (userInfo) {
                        // Dispatch user data
                        dispatch(setEmail(userInfo.email));
                        dispatch(setAvatar(userInfo.avtUrl));
                        dispatch(setRole(userInfo.role));
                        dispatch(setUserId(userInfo.id));
                        dispatch(setFullname(userInfo.fullName));
                        dispatch(setGender(userInfo.gender));

                        // Show success toast
                        toast({
                            title: 'Đăng Nhập Thành Công',
                            description: `Xin chào ${userInfo.fullName}, cảm ơn đã sử dụng dịch vụ của InternHub`,
                        });

                        // Navigate based on role
                        const routes = {
                            STUDENT: '/',
                            RECRUITER: '/recruiter',
                            UNIVERSITY: '/university',
                            ADMIN: '/admin',
                        };
                        navigate(routes[userInfo.role] || '/', { replace: true });
                    }
                } catch (error) {
                    console.error('Google login error:', error);
                    toast({
                        variant: 'destructive',
                        title: 'Đăng nhập thất bại',
                        description: 'Có lỗi xảy ra khi đăng nhập bằng Google',
                    });
                    navigate("/login", { replace: true });
                }
            } else {
                navigate("/login", { replace: true });
            }
        };

        handleGoogleRedirect();
    }, [token, navigate, dispatch, fetchUser, toast, userInfo]);

    return <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        <span className="ml-2">Đang xử lý đăng nhập...</span>
    </div>;
};

export default OAuth2RedirectHandler;
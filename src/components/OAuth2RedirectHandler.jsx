import { setAccessToken } from "@/features/user";
import { toast } from "@/hooks/use-toast";
import { useGetUserInfoQuery } from "@/services/internHubApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";


const OAuth2RedirectHandler = () => {
    const dispatch = useDispatch()
    const [tokenValid, setTokenValid] = useState(false);
    const { data: userInfo, refetch } = useGetUserInfoQuery(undefined, {
        skip: !tokenValid, // Fetch only if tokenValid is true
      });
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            setTokenValid(true)
            refetch()
            console.log(token)
            dispatch(setAccessToken(token))
            toast({
                title: 'Đăng Nhập Thành Công',
                description: `Xin chào ${userInfo.fullName}, cảm ơn đã sử dụng dịch vụ của internhub`,
              });
            navigate("/", { replace: true });
        } else {
            navigate("/login", { replace: true });

    }}, [token, navigate, dispatch, refetch, userInfo.fullName]);
    return <div>Loading</div>};
export default OAuth2RedirectHandler;
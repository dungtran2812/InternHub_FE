import { setAccessToken } from "@/features/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";


const OAuth2RedirectHandler = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            console.log(token)
            dispatch(setAccessToken(token))
            navigate("/", { replace: true });
        } else {
            navigate("/login", { replace: true });

    }}, [token, navigate, dispatch]);
    return <div>Loading</div>};
export default OAuth2RedirectHandler;
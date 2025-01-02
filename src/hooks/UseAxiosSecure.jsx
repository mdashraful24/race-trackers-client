import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const UseAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();

    useEffect(() => {
        
        axiosInstance.interceptors.response.use(
            response => response,
            error => {
                console.error('Interceptor error:', error?.response || error);
                if (error.response?.status === 401 || error.response?.status === 403) {
                    logOut()
                        .then(() => navigate("/login"))
                        .catch(err => console.error('Logout error:', err));
                }
                return Promise.reject(error);
            }
        );
    }, [])

    return axiosInstance;
};

export default UseAxiosSecure;











// axiosInstance.interceptors.response.use(response => {
//     return response;
// }, error => {
//     // console.log('error caught in interceptor', error);

//     if (error.status === 401 || error.status === 403) {
//         // console.log('need to logout the user');
//         logOut()
//             .then(() => {
//                 // console.log('logged out user');
// navigate("/login");
//                 navigate(location?.state ? location.state : "/login");
//             })
//             .catch(error => {
//                 // console.log(error);
//             });
//     }
//     return Promise.reject(error);
// })
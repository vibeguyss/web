import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const customAxios = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

customAxios.interceptors.request.use(
    (config) => {
        // 로그인/회원가입 API는 토큰 없이 요청 허용
        if (
            config.url?.includes("/auth/sign-in") ||
            config.url?.includes("/auth/sign-up")
        ) {
            return config;
        }

        const token = localStorage.getItem("accessToken");
        if (!token) {
            return Promise.reject(new axios.Cancel("토큰 없음 - 요청 취소"));
        }

        if (config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

customAxios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            const errorCode = error.response.data.code;
            if (errorCode === "MALFORMED_TOKEN") {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

                alert("인증 정보가 올바르지 않습니다. 다시 로그인 해주세요.");
                window.location.href = "/auth";
            } else {
                console.error("인증 오류 - 로그인 필요");
            }
        }
        return Promise.reject(error);
    }
);

export default customAxios;

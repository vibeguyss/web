import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserState";
import customAxios from "../../api/customAxios";

const AuthForm = () => {
    const { setUser } = useUserStore();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const fetchMe = async () => {
        try {
            const res = await customAxios.get("/user/me");
            const { userId, imageUrl } = res.data.data;
            console.log("setUser 호출 전", { userId, imageUrl });
            setUser({ userId, imageUrl });
            console.log("setUser 호출 후");
        } catch (err) {
            console.error("내 정보 가져오기 실패:", err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const endpoint = isLogin ? "/auth/sign-in" : "/auth/sign-up";

        const payload = isLogin
            ? { email, password }
            : { email, password, userRole: "USER" };

        try {
            const res = await customAxios.post(endpoint, payload);
            const data = res.data.data;

            if (isLogin) {
                const { accessToken, refreshToken } = data;
                if (res.status === 200) {
                    localStorage.setItem("accessToken", accessToken);
                    localStorage.setItem("refreshToken", refreshToken);
                    await fetchMe();
                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                } else {
                    alert("토큰이 없습니다.");
                }
            } else {
                alert("회원가입 성공! 로그인해주세요.");
                setIsLogin(true);
            }
        } catch (err: any) {
            console.error("❌ 오류:", err.response?.data || err.message);
            alert("오류가 발생했습니다.");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f8f9fa",
            }}
        >
            <img src="/logo.svg" alt="로고" width="120" height="120" />

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "2rem",
                    background: "#fff",
                    borderRadius: "0.5rem",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    width: "100%",
                    maxWidth: "400px",
                }}
            >
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={inputStyle}
                />

                <button
                    type="submit"
                    style={{
                        padding: "0.75rem",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "0.25rem",
                        cursor: "pointer",
                        fontSize: "1rem",
                    }}
                >
                    {isLogin ? "로그인" : "회원가입"}
                </button>

                <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
                    {isLogin ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}{" "}
                    <span
                        style={{ color: "#007bff", cursor: "pointer" }}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "회원가입" : "로그인"}
                    </span>
                </p>
            </form>
        </div>
    );
};

const inputStyle = {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "0.25rem",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box" as const,
};

export default AuthForm;

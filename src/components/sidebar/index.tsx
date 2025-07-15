import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";

const sidebarItems = [
    { text: "홈", key: "/" },
    { text: "채팅", key: "/chat" },
    { text: "나의 일기", key: "/diarylist" },
    { text: "프로필", key: "/profile" },
];

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Content>
                <S.Logo src="/logo.svg" />
                <S.List>
                    {sidebarItems.map(({ text, key }) => (
                        <S.Elem
                            key={key}
                            $isselected={
                                key == "/"
                                    ? currentPath === "/"
                                    : currentPath.startsWith(key)
                            }
                            onClick={() => navigate(`${key}`)}
                        >
                            <S.ElemText>{text}</S.ElemText>
                        </S.Elem>
                    ))}
                </S.List>
            </S.Content>
        </S.Container>
    );
};

export default Sidebar;

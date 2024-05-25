interface IerrorCodes  {
    [key: string]: string;
    PASSWORD_NOT_MATCH: string;
    USER_NOT_FOUND: string;
    INTERNAL_SERVER_ERROR: string;
    UNEXPECTED_ERROR: string
};
const errorCodes: IerrorCodes = {
    PASSWORD_NOT_MATCH: "아이디 또는 비밀번호가 일치하지 않습니다.",
    USER_NOT_FOUND: "사용자를 찾을 수 없습니다.",
    INTERNAL_SERVER_ERROR: "서버 내부 오류입니다.",
    UNEXPECTED_ERROR: "UNEXPECTED_ERROR"
};

export default errorCodes;



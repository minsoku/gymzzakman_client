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
    UNEXPECTED_ERROR: "UNEXPECTED_ERROR",
    NO_EMAIL: "이메일을 입력해주세요.",
    NO_NICKNAME: "닉네임을 입력해주세요.",
    NO_PASSWORD: "비밀번호를 입력해주세요.",
    PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다.",
    PHONENUMBER_ALREADY_EXIST: "이미 등록된 전화번호입니다.",
    EMAIL_ALREADY_EXIST: "이미 등록된 이메일입니다.",
    NICKMANE_ALREADY_EXIST: "이미 등록된 닉네임입니다.",
    NO_PROFILE_IMAGE: "프로필 이미지를 등록해주세요.",
};

export default errorCodes;



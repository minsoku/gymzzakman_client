export function responseStatus(status: number) {
    switch (status) {
        case 401:
            throw new Error("PASSWORD_NOT_MATCH");
        case 404:
            throw new Error("USER_NOT_FOUND");
        case 500:
            throw new Error("INTERNAL_SERVER_ERROR");
        default:
            if (status < 200 || status >= 300) {
                throw new Error("UNEXPECTED_ERROR");
            }
    }
}

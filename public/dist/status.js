// cria uma lista enumerada
// como se fosse uma forma de explicitar as opcoes do case
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Admin"] = 1] = "Admin";
    UserStatus[UserStatus["Editor"] = 2] = "Editor";
    UserStatus[UserStatus["User"] = 3] = "User";
})(UserStatus || (UserStatus = {}));
export function checkStatus(status) {
    let tipoUser = "";
    switch (status) {
        // case 1:
        case UserStatus.Admin:
            return tipoUser = 'admin';
            break;
        // case 2:
        case UserStatus.Editor:
            return tipoUser = 'editor';
            break;
        // case 3:
        case UserStatus.User:
            return tipoUser = 'é usuario';
            break;
        default:
            return tipoUser = 'erro de cadastro';
            break;
    }
}

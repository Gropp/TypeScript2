// cria uma lista enumerada
// como se fosse uma forma de explicitar as opcoes do case
enum UserStatus{
    Admin = 1,
    Editor = 2,
    User = 3,
}


export function checkStatus(status:number){
    let tipoUser = "";
    switch(status){
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
export default function login_validate(values){
    const errors = {};

    if (!values.email) {
        errors.email = 'Erforderlich';
    } else if (!/^[A-Z0-9._%+-]+@(iu-study\.org|iu\.org|iubh-fernstudium\.de)$/i.test(values.email)) {
        errors.email = 'Ungültige Emailadresse';
    }

    // validation for password
    if(!values.password){
        errors.password = "Erforderlich";
    } else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Das Passwort muss zwischen 8 und 20 Zeichen enthalten!";
    } else if(values.password.includes(" ")){
        errors.password = "Ungültiges Passwort";
    }

    return errors;

}

export function registerValidate(values){
    const errors = {};

    if(!values.username){
        errors.username = "Erforderlich";
    }else if(values.username.includes(" ")){
        errors.username = "Ungültiger Username"
    }

    if (!values.email) {
        errors.email = 'Erforderlich';
    } else if (!/^[A-Z0-9._%+-]+@(iu-study\.org|iu\.org|iubh-fernstudium\.de)$/i.test(values.email)) {
        errors.email = 'Ungültige Emailadresse';
    }

       // validation for password
       if(!values.password){
        errors.password = "Erforderlich";
    } else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "Das Passwort muss zwischen 8 und 20 Zeichen enthalten!";
    } else if(values.password.includes(" ")){
        errors.password = "Ungültiges Passwort";
    }

    // validate confirm password
    if(!values.cpassword){
        errors.cpassword = "Erforderlich";
    } else if(values.password !== values.cpassword){
        errors.cpassword = "Die Passwörter stimmen nicht überein"
    } else if(values.cpassword.includes(" ")){
        errors.cpassword = "Ungültiges Passwort"
    }

    return errors;
}
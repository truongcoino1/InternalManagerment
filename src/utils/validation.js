import moment from 'moment';

export const isValidEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const isValidBirthday = (birthday) => {
    return moment(birthday).isValid();
};

export const validPhone = (str) => {
    if(str && str.length < 10) return false;
    return /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/g.test(str);
};

export const validPassWord = (password) => {
    //Minimum six characters, at least one letter and one number
    if(password.length>=6) return true
    return false;
}

export const mask = {
    phone: () => ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    getRawValue: (value) => {
        if(!value) return null;
        return value.replace(/[\(|\)\s+?\-\_]/g, "");
    }
};

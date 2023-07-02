export const formatCPF = (cpf) => {
    if (typeof cpf !== "string") return cpf;

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return cpf;

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4");
};

export const formatPhone = (phone) => {
    if (typeof phone !== "string") return phone;

    if (phone.length === 10) return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");

    if (phone.length === 11)
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    return phone;
};

export const formatEmail = (email) => {
    if (typeof email !== 'string') return email;

    return email.toLocaleLowerCase()
}


export const isValidEmail = (email) => {
    if (typeof email !== "string") return false;

    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
};

export const isValidPassword = (password) => {
    if (typeof password !== "string") return false;

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    return regex.test(password);
};

export const isValidPhone = (phone, isCellPhone = false) => {
    if (typeof phone !== "string") return false;

    phone = phone.replace(/\D/g, "");

    let phoneLenght = 10;
    if (isCellPhone) phoneLenght = 11;

    if (phone.length !== phoneLenght) return false;

    return true;
}

export const isMobile = () => {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    )
        return true;
    else
        return false;

}

export const patternNameOnFirebase = (name) => {
    if (typeof name !== "string") return name;

    name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();

    return name.split(" ");
}
export const formatCPF = (cpf) => {
    if (typeof cpf !== "string") return cpf;

    if (cpf.length !== 11) return cpf;

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const formatPhone = (phone) => {
    if (typeof phone !== "string") return phone;

    if (phone.length === 8) return phone.replace(/(\d{4})(\d{4})/, "$1-$2");

    if (phone.length === 11)
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    return phone;
};

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

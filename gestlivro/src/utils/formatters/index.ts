export const onlyNumbers = (value: string) => {
    return value.replace(/\D/g, "");
}

export const formatDate = (value: string) => {
    return value.replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2})(\d)/, "$1/$2")
}

export const onlyLetters = (value: string) => {
    return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "").replace(/(\d{2})(\d)/, "$1")
}

export const formatYear = (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{4})(\d)/, "$1")
}

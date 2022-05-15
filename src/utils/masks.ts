export const maskCPFNumber = (value: string) => {
    return value
        .replace(/[\D]/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1-$2");
};

export const maskPhoneNumber = (value: string) => {
    value = value.replace(/[^0-9]/g, "");

    if (value.length > 0) {
        value = ["(", value].join("");
    }

    if (value.length > 3) {
        value = [value.slice(0, 3), ") ", value.slice(3)].join("");
    }

    if (value.length > 9) {
        value = [value.slice(0, 9), "-", value.slice(9)].join("");
    }

    if (value.length > 14) {
        console.log(value.slice(0, 9), value.slice(10, 11), "-", value.slice(11));
        value = [value.slice(0, 9), value.slice(10, 11), "-", value.slice(11)].join("");
    }

    return value;
};

export const saveToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = (key: string, defaultValue: any) => {
    const storedValue: string|null = localStorage.getItem(key)

    return storedValue ? JSON.parse(storedValue) : defaultValue;
}
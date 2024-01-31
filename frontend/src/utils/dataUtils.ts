// Date型を"yyyy/MM/dd"の文字列型に変換する処理
export const formatDatetoStr = (date: Date | null, separator: string): string => {
    if (date === null) {
        return "―"
    }

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}${separator}${month}${separator}${day}`;
};



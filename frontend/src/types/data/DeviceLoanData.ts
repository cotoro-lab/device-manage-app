// データ型を定義
export type DeviceLoanData = {
    id: number;
    device_id: string;
    device_name: string;
    user_id: number;
    user_name: string;
    rental_date: string;
    return_date: string;
    usage_memo: string;
};

function getDeviceLoanData(): DeviceLoanData[] {
    return new Array(20).fill(null).map((_, index) => ({
        id: index,
        device_id: `PC-MMAMM-${("000" + (index + 1)).slice(-3)}`,
        device_name: `Thinkpab${("000" + (index + 1)).slice(-3)}`,
        user_id: 10002300000 + index + 1,
        user_name: `田中太郎 ${index + 1}`,
        rental_date: `2023/10/${("00" + index + 1).slice(-2)}`,
        return_date: `2024/03/${("00" + index + 1).slice(-2)}`,
        usage_memo: `利用目的_${("00" + index + 1).slice(-2)}`,
    }));
};

export { getDeviceLoanData };

// データ型を定義
export type DeviceData = {
    id: number;
    device_id: string;
    device_name: string;
    device_category: string;
    purchase_date: Date;
    disposal_date: Date | null;
};

function getDeviceData(): DeviceData[] {
    return new Array(20).fill(null).map((_, index) => ({
        id: index,
        device_id: `PC-MMAMM-${("000" + (index + 1)).slice(-3)}`,
        device_name: `Thinkpab${("000" + (index + 1)).slice(-3)}`,
        device_category: `ノートPC`,
        purchase_date: new Date(`2023/04/${("00" + (index + 1)).slice(-2)}`),
        disposal_date: null
    }));
};

export { getDeviceData };

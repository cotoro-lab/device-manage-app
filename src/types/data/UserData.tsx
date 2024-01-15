// データ型を定義
type UserData = {
    id: number;
    user_id: number;
    user_name: string;
    user_division: string;
    tel_num: string;
    mail_address: string;
};

function getUserData(): UserData[] {
    return new Array(20).fill(null).map((_, index) => ({
        id: index,
        user_id: 10002300000 + index + 1,
        user_name: `田中太郎 ${index + 1}`,
        user_division: `田中太郎 ${index + 1}`,
        tel_num: `080-3333-22${("00" + (index + 1)).slice(-2)}`,
        mail_address: `hoge@gmail.com${index + 1}`
    }));
};

export { getUserData };

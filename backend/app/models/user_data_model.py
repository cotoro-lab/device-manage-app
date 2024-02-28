from dataclasses import dataclass
from datetime import datetime

@dataclass
class UserData:
    id: int
    user_id: int
    user_name: str
    user_division: str
    tel_num: str
    mail_address: str
    delete_flag: bool = False
    create_date: datetime
    update_date: datetime
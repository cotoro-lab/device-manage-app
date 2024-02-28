from dataclasses import dataclass
from datetime import datetime

@dataclass
class DeviceLoanData:
    id: int
    device_id: str
    user_id: int
    rental_date: datetime
    return_date: datetime
    usage_memo: str
    delete_flag: bool = False
    create_date: datetime
    update_date: datetime
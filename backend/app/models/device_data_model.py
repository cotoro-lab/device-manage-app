from dataclasses import dataclass
from typing import Optional
from datetime import datetime

@dataclass
class DeviceData:
    id: int
    device_id: str
    device_name: str
    device_category: str
    purchase_date: datetime
    disposal_date: Optional[datetime] = None
    delete_flag: bool = False
    create_date: datetime
    update_date: datetime
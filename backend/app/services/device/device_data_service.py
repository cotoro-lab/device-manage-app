from flask import Blueprint
from datetime import datetime


from ...models.device_data_model import DeviceData


# Create a blueprint object
device_service = Blueprint("device_data_service", __name__, url_prefix="/device_data_service")

device_data = DeviceData()

# Define your routes
@device_service.route("/select_list")
def select_list():
    return [
        {
            "id": index,
            "device_id": f"PC-MMAMM-{str(index + 1).zfill(3)}",
            "device_name": f"Thinkpad{str(index + 1).zfill(3)}",
            "device_category": "ノートPC",
            "purchase_date": datetime.strptime(f"2021/01/{str(index + 1).zfill(2)}", "%Y-%m-%d"),
            "disposal_date": None
        }
        for index in range(20)
    ]


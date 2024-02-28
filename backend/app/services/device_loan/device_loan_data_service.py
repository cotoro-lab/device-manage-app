from flask import Blueprint
from datetime import datetime


from ...models.device_loan_data_model import DeviceLoanData


# Create a blueprint object
device_loan_service = Blueprint("device_loan_data_service", __name__, url_prefix="/device_loan_data_service")

device_loan_data = DeviceLoanData()

# Define your routes
@device_loan_service.route("/select_list")
def select_list():
    return [
        {
            "id": index,
            "device_id": f"PC-MMAMM-{str(index + 1).zfill(3)}",
            "device_name": f"Thinkpad{str(index + 1).zfill(3)}",
            "user_id": 10002300000 + index + 1,
            "user_name": f"田中太郎 {index + 1}",
            "rental_date": datetime.strptime(f"2023-10-{str(index + 1).zfill(2)}", "%Y-%m-%d"),
            "return_date": datetime.strptime(f"2024-03-{str(index + 1).zfill(2)}", "%Y-%m-%d"),
            "user_memo": f"利用目的_{str(index + 1).zfill(2)}"
        }
        for index in range(20)
    ]



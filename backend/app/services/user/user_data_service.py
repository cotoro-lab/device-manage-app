from flask import Blueprint
from ...models.user_data_model import UserData


# Create a blueprint object
user_service = Blueprint("user_data_service", __name__, url_prefix="/user_data_service")

user_data = UserData()

# Define your routes
@user_service.route("/select_list")
def select_list():
    return [
        {
            "id": index,
            "user_id": 10002300000 + index + 1,
            "user_name": f"田中太郎 {index + 1}",
            "user_division": f"田中太郎 {index + 1}",
            "tel_num": f"080-3333-22{str(index + 1).zfill(2)}",
            "mail_address": f"hoge@gmail.com{index + 1}"
        }
        for index in range(20)
    ]


from flask import Flask
from flask_cors import CORS

from app.services.device.device_data_service import device_service
from app.services.device_loan.device_loan_data_service import device_loan_service
from app.services.user.user_data_service import user_service

app = Flask(__name__)

# blueprintを登録
app.register_blueprint(device_service)
app.register_blueprint(device_loan_service)
app.register_blueprint(user_service)

# CORSの設定を追加
CORS(app)


@app.route("/")
def hello():
    return "Hello from Flask !"


@app.route("/night")
def goodNight():
    return "Good Night from Flask !"


if __name__ == "__main__":
    app.debug = True
    app.run(host="127.0.0.1", port=5000)

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

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

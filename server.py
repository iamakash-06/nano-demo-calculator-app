from flask import Flask, jsonify
from flask import request
import json

app = Flask(__name__)


@app.route("/calculator/greeting", methods=['GET'])
def greeting():
    return 'Hello World!', 200 

@app.route("/calculator/add", methods=['POST'])
def add():
    data = request.get_json()
    first = data.get('first')
    second = data.get('second')
    if first is None or second is None:
        return jsonify(error="Both 'first' and 'second' numbers are required."), 400
    res = first + second
    return jsonify(result=res), 200

@app.route("/calculator/subtract", methods=['POST'])
def subtract():
    data = request.get_json()
    first = data.get('first')
    second = data.get('second')
    if first is None or second is None:
        return jsonify(error="Both 'first' and 'second' numbers are required."), 400
    res = first - second
    return jsonify(result=res), 200

if __name__ == '__main__':
    app.run(port=8080,host='0.0.0.0')

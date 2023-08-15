from flask import Flask, request, jsonify

app = Flask(__name__)

class Calculator:
    @staticmethod
    def add(first, second):
        return first + second
    
    @staticmethod
    def subtract(first, second):
        return first - second

class API:
    @staticmethod
    @app.route("/calculator/greeting", methods=['GET'])
    def greeting():
        return "Hello world!"

    @staticmethod
    @app.route("/calculator/add", methods=['POST'])
    def add():
        try:
            data = request.get_json()
            first = data.get('first', 0)
            second = data.get('second', 0)
            result = Calculator.add(first, second)
            return jsonify({'result': result}), 200
        except Exception as e:
            return jsonify({'error': 'Invalid input'}), 400
    
    @staticmethod
    @app.route("/calculator/subtract", methods=['POST'])
    def subtract():
        try:
            data = request.get_json()
            first = data.get('first', 0)
            second = data.get('second', 0)
            result = Calculator.subtract(first, second)
            return jsonify({'result': result}), 200
        except Exception as e:
            return jsonify({'error': 'Invalid input'}), 400

if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0')

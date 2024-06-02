import time
from flask import Flask, jsonify, request

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/time')
def get_current_time():
    now = time.time()
    return jsonify(time='test')


@app.route('/diabetes', methods=[ 'POST'])
def get_diabetes_result():
    data = request.get_json()
    BMI = data.get('inputs')
    return jsonify(thing=BMI)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
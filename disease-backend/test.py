# import necessary libraries
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from scipy.stats import chi2_contingency
from sklearn import preprocessing
label_encoder = preprocessing.LabelEncoder() 
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix, recall_score, ConfusionMatrixDisplay, precision_score
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
import time
from flask import Flask, jsonify, request

from diabetes import predict_using_all_models, scrape_resources

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/time')
def get_current_time():
    now = time.time()
    return jsonify(time='test')



def transform_gender(gender: str) -> int:
    if gender == 'male':
        return 1
    return 0

def transform_smoking(smoking: str):
    match smoking:
        case "No_Info":
            return 0
        case "Current":
            return 1
        case "Ever":
            return 2
        case "Former":
            return 3
        case "Never":
            return 4
        case "Not_Current":
            return 5
        
def transform_boolean_to_int(value: any):
    if str(value) == 'True':
        return 1
    return 0
        
@app.route('/diabetes', methods=['POST', 'GET'])
def get_diabetes_result():
    data = request.get_json()
    inputs = data.get('formValues')
    age = inputs.get('age')
    bmi = inputs.get('BMI')
    gender = transform_gender(inputs.get('gender'))
    smoking = transform_smoking(inputs.get('SmokingHistory'))
    hypertension = transform_boolean_to_int(inputs.get('hypertension'))
    heart_disease = transform_boolean_to_int(inputs.get('heartDisease'))
    HbA1c = inputs.get('HbA1c')
    blood_glucose = inputs.get('bloodGluclose')
    row = np.array([float(gender), float(age), float(hypertension), float(heart_disease), float(smoking), float(bmi), float(HbA1c), float(blood_glucose)]).reshape(1, -1)
    result = predict_using_all_models(data=row)
    file = open('result.txt', 'w')
    
    file.write(stringify(result))
    print("wrote to file")
    return jsonify(result=result)

@app.route('/diabetes-resources', methods=[ 'GET'])
def get_diabetes_resources(): 
    results = scrape_resources()
    return jsonify(results)

def stringify(dictionary: dict):
    string = ''.join([(value + ": " + dictionary[value] + "\n") for value in dictionary])
    return string
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
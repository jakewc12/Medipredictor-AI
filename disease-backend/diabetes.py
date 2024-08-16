
# import necessary libraries
import requests
from bs4 import BeautifulSoup
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV
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
import dotenv


def create_data_frame():
    df = pd.read_csv('disease-backend/diabetes.csv')
    df['gender'] = label_encoder.fit_transform(df['gender']) 
    df['smoking_history'] = label_encoder.fit_transform(df['smoking_history'])
    X = df.drop(columns=['diabetes'])
    y = df.diabetes
    X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.3,random_state=42)
    return X_train, y_train

def create_KNN_model(neighbors: int) -> KNeighborsClassifier:
    """
    Creates a K-Nearest Neighbors predictive model using the given data

    Returns:
    KNeighborsClassifier: Produced model
    """
    print("HEREEE")
    X_train, y_train = create_data_frame()
    knn = KNeighborsClassifier(n_neighbors = neighbors)
    knn.fit(X_train, y_train)
    return knn

def create_Bayes_model(*args) -> GaussianNB:
    """
    Creates a Bayes predictive model using the given data

    Returns:
    GaussianNB: Produced model
    """
    print("HEREE")
    X_train, y_train = create_data_frame()
    model = GaussianNB()
    mod = model.fit(X_train, y_train)
    return mod

def create_SVM_model(*args) -> SVC:
    """
    Creates a SVM(Support Vector Machine) with specific parameterspredictive model using the given data

    Returns:
    SVC: Produced model(sklearn's implementation of SVM)
    """
    print("HERE")
    X_train, y_train = create_data_frame()
    svm = SVC()
    params = {
        'C': [46],
        'kernel': ['rbf'],
        'gamma': [.0005]
    }
    print("HERE")
    svm_grid = GridSearchCV(svm, params, cv=5)
    print("HERE")
    svm_grid.fit(X_train, y_train)
    print("HEREEEEE")
    return svm_grid

def predict_using_model(data: list, model, neighbors = None) -> int:
    """
    Predicts outcome of diabetes based on given model

    Parameters:
    data (list): all of the data points to use for the prediction
    create_model: the type of model to use to predict
    neighbors(optional int): knn neighbors if the model is KNN

    Returns:
    int: Predicted outcome of diabetes, 1 for yes, 0 for no
    """
    print("predicting")
    formatted_data = np.array([data]).reshape(1, -1)
    prediction = model.predict(formatted_data)
    if prediction[0] == 1:
        return "Diabetes"
    else:
        return "No Diabetes"
    
def predict_using_all_models(data: list) -> list:
    results = {}
    #, 'svm': create_SVM_model()
    models = {'bayes': create_Bayes_model(), 'knn': create_KNN_model(7), 'svm': create_SVM_model()}
    for model in models:
        results[model] = predict_using_model(data, models[model])
    print(results)
    return results

def scrape_resources():
    """
    A simple web-scraping script that looks for articles related to Diabetes on the NIH webpage.

    Returns:
    dict: dictionary where the key is the url of the article and the value is a list of headline/date of the article.
    """
    url = 'https://www.niddk.nih.gov/news'

    response = requests.get(url)

    soup = BeautifulSoup(response.content, 'html.parser')

    gpg = soup.find_all(class_ = 'sc-slider sc-news')

    new_soup = BeautifulSoup(str(gpg), 'html.parser')

    results = new_soup.find_all(lambda tag: 'sc-card' in tag.get('class', []))
    result = {}
    for thing in results:
        current_soup = BeautifulSoup(str(thing), 'html.parser')
        current_result = current_soup.find(lambda tag: tag.name == "a").get("href")
        current_text = current_soup.get_text().strip().split('\r\n                            \n\n')
        result[current_result] = current_text
    return result
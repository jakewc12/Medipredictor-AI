
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
    X_train, y_train = create_data_frame()
    model = GaussianNB()
    mod = model.fit(X_train, y_train)
    return mod

def predict_using_model(data: list, create_model, neighbors = None) -> int:
    """
    Summary or Description of the Function

    Parameters:
    data (list): all of the data points to use for the prediction
    create_model: the type of model to use to predict
    neighbors(optional int): knn neighbors if the model is KNN

    Returns:
    int: Predicted outcome of diabetes, 1 for yes, 0 for no
    """
    model = create_model(neighbors)
    formatted_data = np.array([data]).reshape(1, -1)
    prediction = model.predict(formatted_data)
    if prediction[0] == 1:
        return "Diabetes"
    else:
        return "No Diabetes"

# print(predict_using_model([1,42.0,0,0,4,33.64,4.8,145
# ], create_KNN_model, neighbors=7))
# print(predict_using_model([1,42.0,0,0,4,33.64,4.8,145
# ], create_Bayes_model))
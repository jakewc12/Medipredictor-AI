import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    classification_report, 
    accuracy_score, 
    confusion_matrix, 
    recall_score, 
    ConfusionMatrixDisplay, 
    precision_score
)

# Load the data
df = pd.read_csv('heart.csv')

# Prepare the data
X = df.drop('target', axis=1)
y = df['target']
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)

def create_KNN_model(neighbors: int) -> KNeighborsClassifier:
    """
    Creates a K-Nearest Neighbors predictive model using the given data

    Args:
    neighbors (int): Number of neighbors to use for k-neighbors queries.

    Returns:
    KNeighborsClassifier: Trained K-Nearest Neighbors model.
    """
    knn = KNeighborsClassifier(n_neighbors=neighbors)
    knn.fit(X_train, y_train)
    
    # Optional: Evaluation (can be removed if not needed)
    y_pred = knn.predict(X_test)
    print("KNN Model Evaluation:")
    print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
    print("\nClassification Report:\n", classification_report(y_test, y_pred))
    print("\nAccuracy Score:", accuracy_score(y_test, y_pred))
    
    return knn

def create_SVM_model(kernel_type: str = 'poly') -> SVC:
    """
    Creates a SVM (Support Vector Machine) predictive model using the given data

    Args:
    kernel_type (str): The kernel type to be used in the SVM. Default is 'poly'.

    Returns:
    SVC: Trained SVM model.
    """
    svm_classifier = SVC(kernel=kernel_type)
    svm_classifier.fit(X_train, y_train)
    
    # Optional: Evaluation (can be removed if not needed)
    y_pred = svm_classifier.predict(X_test)
    print("SVM Model Evaluation:")
    print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
    print("\nClassification Report:\n", classification_report(y_test, y_pred))
    print("\nAccuracy Score:", accuracy_score(y_test, y_pred))
    
    return svm_classifier

def create_RandomForest_model() -> RandomForestClassifier:
    """
    Creates a Random Forest predictive model using the given data

    Returns:
    RandomForestClassifier: Trained Random Forest model.
    """
    random_forest = RandomForestClassifier(random_state=42)
    random_forest.fit(X_train, y_train)
    y_pred = random_forest.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    conf_matrix = confusion_matrix(y_test, y_pred)
    class_report = classification_report(y_test, y_pred)

    # results
    print("Random Forest Accuracy:", accuracy)
    print("\nConfusion Matrix:")
    print(conf_matrix)
    print("\nClassification Report:")
    print(class_report)
    print("\nRandom Forest Accuracy:", accuracy)
    return random_forest

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
        return "Heart Disease"
    else:
        return "No Heart Disease"
    
def predict_using_all_models(data: list) -> list:
    results = {}
    #, 'svm': create_SVM_model()
    models = {'svm': create_SVM_model(kernel_type='poly'), 'knn': create_KNN_model(7), 'randomforest': create_RandomForest_model}
    print(models)
    for model in models:
        results[model] = predict_using_model(data, models[model])
    print(results)
    return results